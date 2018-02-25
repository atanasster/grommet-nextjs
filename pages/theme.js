import { Anchor, Box, Button, Grommet, Heading, Image, Paragraph, Select, Text, TextInput } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';
import { hslToRgb, parseRGBString, rgbToHsl, toRGBString } from '../utils/color';
import { deepMerge } from '../utils/object';
import Page from '../components/Page';

const SHARPNESSES = [
  'soft',
  'medium',
  'hard',
];

const SHARPNESS_ROUND_SIZE = {
  soft: 'large',
  medium: 'medium',
  hard: 'none',
};

const SHARPNESS = {
  soft: {
    global: { input: { border: { radius: '24px' } } },
    button: { border: { radius: '24px' } },
    checkBox: { border: { radius: '24px' } },
    layer: { border: { radius: '24px' } },
  },
  medium: {
    global: { input: { border: { radius: '4px' } } },
    button: { border: { radius: '4px' } },
    checkBox: { border: { radius: '4px' } },
    layer: { border: { radius: '4px' } },
  },
  hard: {
    global: { input: { border: { radius: '0px' } } },
    button: { border: { radius: '0px' } },
    checkBox: { border: { radius: '0px' } },
    layer: { border: { radius: '0px' } },
  },
};

const MOODS = [
  'happy',
  'even',
  'serious',
];

const MOOD = {
  happy: { saturationBoost: 0.1, luminenceBoost: 0.2 },
  even: { saturationBoost: 0, luminenceBoost: 0 },
  serious: { saturationBoost: -0.1, luminenceBoost: -0.2 },
};

const deriveHues = (h, count) => {
  const degH = h * 360;
  const offset = 360 / (count + 1);
  const result = [];
  for (let i = 1; i <= count; i += 1) {
    result.push(((degH + (offset * i)) % 360) / 360.0);
  }
  return result;
};

const between = (value, min, max) =>
  Math.min(max, Math.max(min, value));

const colorsForMood = (color, mood) => {
  let result;
  const array = parseRGBString(color);
  if (array) {
    result = { global: { colors: { brand: color } } };
    const [r, g, b] = array;
    const [h, s, l] = rgbToHsl(r, g, b);
    const accentHues = deriveHues(h, 2);
    const accentSat = between(s + MOOD[mood].saturationBoost, 0.2, 0.8);
    const accentLum = between(1.0 - (l - MOOD[mood].luminenceBoost), 0.2, 0.8);
    result.global.colors.accent = accentHues.map(ah =>
      `#${toRGBString(hslToRgb(ah, accentSat, accentLum))}`);
  }
  return result;
};

const Field = ({
  children, error, focused, label, help,
}) => {
  let header;
  if (label || help || error) {
    header = (
      <Box
        direction='row'
        justify='between'
        pad={{ horizontal: 'small', top: 'xsmall' }}
      >
        <Text>{label}</Text>
        <Text color={error ? 'status-critical' : 'dark-5'}>{error || help}</Text>
      </Box>
    );
  }
  let borderColor;
  if (error) {
    borderColor = 'status-critical';
  } else if (focused) {
    borderColor = 'brand';
  } else {
    borderColor = 'light-3';
  }
  return (
    <Box
      direction='column'
      border={{ color: borderColor, side: 'bottom', size: 'small' }}
      margin={{ vertical: 'xsmall' }}
    >
      {header}
      {children}
    </Box>
  );
};

export default class Theme extends React.Component {
  constructor() {
    super();
    const font = 'Fira Sans';
    const color = '#99cc33';
    const mood = 'even';
    const sharpness = 'medium';
    let theme = {};
    theme = deepMerge(theme, colorsForMood(color, mood) || {});
    theme = deepMerge(theme, SHARPNESS[sharpness]);
    this.state = {
      color,
      errors: {},
      font,
      key: 1,
      loading: {},
      mood,
      name: 'My Theme',
      sharpness,
      theme,
    };
  }

  componentDidMount() {
    const { font } = this.state;
    // eslint-disable-next-line global-require
    this.WebFont = require('webfontloader');
    this.onChangeFont({ target: { value: font } });
  }

  onChangeColor = (event) => {
    const {
      errors, key, mood, theme,
    } = this.state;
    const color = event.target.value;
    const colors = colorsForMood(color, mood);
    if (colors) {
      this.setState({
        color,
        errors: { ...errors, color: undefined },
        key: key + 1,
        theme: deepMerge(theme, colors),
      });
    } else {
      this.setState({
        color,
        errors: { ...errors, color: 'must be #RRGGBB' },
      });
    }
  }

  onFontLoaded = name => () => {
    const { key, loading, theme } = this.state;
    this.setState({
      key: key + 1,
      loading: { ...loading, font: undefined },
      theme: deepMerge(theme, {
        global: {
          font: {
            name,
            family: `'${name}', Arial, sans-serif`,
            face: undefined,
          },
        },
      }),
    });
  };

  onFontError = () => () => {
    const { errors, loading } = this.state;
    this.setState({
      errors: { ...errors, font: 'unavailable' },
      loading: { ...loading, font: undefined },
    });
  }

  onChangeFont = (event) => {
    const { errors, loading } = this.state;
    const name = event.target.value;
    // remove all previously loaded fonts
    // <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Rob" media="all">
    const links = document.querySelectorAll('link[href^="http://fonts.googleapis.com"]');
    for (let i = 0; i < links.length; i += 1) {
      links[i].remove();
    }

    this.setState({
      font: name,
      errors: { ...errors, font: undefined },
      loading: { ...loading, font: true },
    });
    this.WebFont.load({
      classes: false,
      inactive: this.onFontError(name),
      active: this.onFontLoaded(name),
      google: { families: [name] },
    });
  }

  onChangeSharpness = ({ option: sharpness }) => {
    const { key, theme } = this.state;
    this.setState({
      key: key + 1,
      sharpness,
      theme: deepMerge(theme, SHARPNESS[sharpness]),
    });
  }

  onChangeMood = ({ option: mood }) => {
    const { key, theme } = this.state;
    this.setState({
      key: key + 1,
      mood,
      theme: deepMerge(
        theme,
        colorsForMood(theme.global.colors.brand, mood) || {}
      ),
    });
  }

  onDownload = () => {
    const { name, theme } = this.state;
    // extract font-face from link in header
    const fontLink = document.querySelector('link[href*="fonts.googleapis.com"]');
    fetch(fontLink.getAttribute('href'))
      .then(response => response.text())
      .then((face) => {
        const downloadTheme = deepMerge(theme, { global: { font: { face } } });
        const jsonString = encodeURIComponent(JSON.stringify(downloadTheme));
        const data = `data:text/json;charset=utf-8,${jsonString}`;
        const element = document.createElement('a');
        element.setAttribute('href', data);
        element.setAttribute('download', `${name}.json`);
        element.click();
        element.remove();
      });
  }

  render() {
    const {
      color, errors, focused, font, key, loading, mood, name, sharpness, theme,
    } = this.state;
    return (
      <Page title='Theme'>
        <Box pad='large'>
          <Box direction='row'>
            <Box margin={{ vertical: 'large' }} basis='medium'>
              <Heading level={1}>
                <strong>Try us without writing a single line of code</strong>
              </Heading>
              <Paragraph size='large'>
                Learn more about how you can theme using the grommet library.
              </Paragraph>
            </Box>
          </Box>
        </Box>

        <Box direction='row' wrap={true}>
          <Box basis='medium' margin={{ bottom: 'large' }}>
            <Box pad='medium'>
              <Field label='Name' focused={focused === 'name'}>
                <TextInput
                  plain={true}
                  value={name}
                  onChange={event => this.setState({ name: event.target.value })}
                  onFocus={() => this.setState({ focused: 'name' })}
                  onBlur={() => this.setState({ focused: undefined })}
                />
              </Field>
              <Field
                label='Brand Color'
                help='hex RGB'
                error={errors.color}
                focused={focused === 'color'}
              >
                <Box direction='row' align='center' justify='between'>
                  <TextInput
                    plain={true}
                    value={color}
                    onChange={this.onChangeColor}
                    onFocus={() => this.setState({ focused: 'color' })}
                    onBlur={() => this.setState({ focused: undefined })}
                  />
                  <Box background={theme.global.colors.brand} pad='small' round='small' />
                </Box>
              </Field>
              <Field
                label='Font Name'
                help={loading.font ? 'loading ...' : (
                  <Anchor
                    href='https://fonts.google.com/'
                    label='google fonts'
                  />
                )}
                error={errors.font}
                focused={focused === 'font'}
              >
                <TextInput
                  plain={true}
                  value={font}
                  onChange={this.onChangeFont}
                  onFocus={() => this.setState({ focused: 'font' })}
                  onBlur={() => this.setState({ focused: undefined })}
                />
              </Field>
              <Field label='Sharpness' focused={focused === 'sharpness'}>
                <Select
                  plain={true}
                  value={sharpness}
                  options={SHARPNESSES}
                  onChange={this.onChangeSharpness}
                  onFocus={() => this.setState({ focused: 'sharpness' })}
                  onBlur={() => this.setState({ focused: undefined })}
                />
              </Field>
              <Field label='Mood' focused={focused === 'mood'}>
                <Select
                  plain={true}
                  value={mood}
                  options={MOODS}
                  onChange={this.onChangeMood}
                  onFocus={() => this.setState({ focused: 'mood' })}
                  onBlur={() => this.setState({ focused: undefined })}
                />
              </Field>
            </Box>
            <Box pad={{ horizontal: 'medium' }}>
              <Button label='Download' primary={true} onClick={this.onDownload} />
            </Box>
          </Box>

          <Box flex='grow' margin={{ bottom: 'large' }} align='center'>
            <Grommet key={key} theme={theme}>
              <Box
                direction='column'
                round={SHARPNESS_ROUND_SIZE[sharpness]}
                animation='fadeIn'
                background='white'
                style={{
                  overflow: 'hidden',
                  boxShadow: '0px 5px 20px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Box pad='medium' background='accent-1' direction='row' justify='between' align='center'>
                  <Button icon={<MenuIcon />} label='menu' onClick={() => {}} />
                  <Button primary={true} label='Subscribe' onClick={() => {}} />
                </Box>
                <Box direction='row' justify='center'>
                  <Box basis='large' pad='large' align='start'>
                    <Heading level={1} margin={{ top: 'none' }}>Bring it on!</Heading>
                    <Text>January</Text>
                    <Paragraph>
                      Biodiesel small batch blue bottle you probably have not
                      heard of them cornhole taiyaki thundercats celiac
                      messenger bag. Prism cred, poutine bespoke tumeric tofu
                      helvetica put a bird on it.
                    </Paragraph>
                    <Image src='https://myjourneytosixmillion.files.wordpress.com/2018/01/park-dasol-146056.jpg?w=300' />
                  </Box>
                </Box>
              </Box>
            </Grommet>
          </Box>
        </Box>
      </Page>
    );
  }
}
