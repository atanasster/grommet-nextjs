import React, { Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { withRouter, Router } from 'next/router';
import 'isomorphic-unfetch';
import JSONPretty from 'react-json-pretty';
import {
  Anchor, Box, Button, Grommet, Heading, Layer, Select, Text,
  TextInput, DropButton, FormField,
} from 'grommet';
import { withTheme } from 'grommet/components/hocs';
import { deepMerge } from 'grommet/utils';
import { ColorInput, materialColors } from 'grommet-controls';
import Page from '../components/app/Page';
import createTheme, { MOODS, SCHEMES, SHARPNESSES, themeFromFont } from '../components/themes/theme';
import ThemePreview from '../components/themes/ThemePreview';
import { queryParams } from '../components/nextjs/urlParams';
import { AppThemeContextConsumer } from '../components/app/AppThemeContext';

const defaultFont = 'Roboto';
const defaultColor = '#99cc33';
const defaultBackground = '#fff8e1';
const defaultMood = 'pastel';
const defaultScheme = 'triade';
const defaultSharpness = 'medium';

interface FontType {
  family: string,
  category: string,
}
interface FontsProps {
  search: string,
  theme: object,
  onSelect(font: string): void,
  fonts: FontType[],
}
class Fonts extends React.Component<FontsProps> {
 state = {
   fonts: [],
 };

 loadFontThemes(props) {
   const { fonts, search } = props;
   this.setState({
     fonts: [],
   });
   const filtered = fonts.filter(f => (f.family.toUpperCase().startsWith(search.toUpperCase())
        || f.category.toUpperCase().startsWith(search.toUpperCase()))).slice(0, 10);
   const self = this;
   filtered.map(font => (
     themeFromFont(font)
       .then(theme => self.setState({
         fonts: [...this.state.fonts, {
           ...font, theme,
         }],
       }))
   ));
 }

 componentDidMount() {
   this.loadFontThemes(this.props);
 }

 componentWillReceiveProps(nextProps) {
   if (nextProps.search !== this.props.search) {
     this.loadFontThemes(nextProps);
   }
 }

 render() {
   const { fonts } = this.state;
   const { theme } = this.props;
   return (
     <Fragment>
       {fonts.map(font => (
         <Button
           key={font.family}
           hoverIndicator={true}
           onClick={() => this.props.onSelect(font)}
         >
           <Grommet
             theme={deepMerge(theme, {
               global: {
                 font: font.theme,
               },
             })}
           >
             <Box
               direction='row-responsive'
               justify='between'
               align='center'
               pad={{
                 horizontal: 'small', vertical: 'xsmall',
               }}
             >
               <Text>{font.family}</Text>
               <Text>{font.category}</Text>
             </Box>
           </Grommet>
         </Button>
       ))
        }
     </Fragment>
   );
 }
}

const ThemeFonts = withTheme(Fonts);

interface ThemeProps {
  router: Router,
  fonts?: FontType[],
}
interface ThemeState {
  errors: {
    color?: string,
    background?: string,
  },
  key: number,
  color: string,
  background: string,
  mood: string,
  scheme: string,
  sharpness: string,
  font: FontType,
  open: boolean,
  viewTheme: boolean,
  fontSearch: string,
  name: string,
  theme: object,
}
class Theme extends React.Component<ThemeProps, ThemeState> {
  constructor(props) {
    super(props);
    const color = defaultColor;
    const background = defaultBackground;
    const mood = defaultMood;
    const scheme = defaultScheme;
    const sharpness = defaultSharpness;
    const { font } = props;
    const theme = createTheme({
      color, background, mood, scheme, sharpness, font,
    });
    this.state = {
      open: undefined,
      color,
      background,
      errors: {},
      font,
      viewTheme: false,
      key: 1,
      mood,
      scheme,
      fontSearch: '',
      name: 'custom',
      sharpness,
      theme,
    };
  }

  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const r = await fetch(`${baseUrl}/api/fonts`);
    const fonts = await r.json();
    const font = fonts.find(f => f.family === defaultFont);
    const theme = await themeFromFont(font);
    return {
      fonts,
      font: {
        ...font, theme,
      },
    };
  }


  onChangeColor = (event) => {
    const { errors, key, background, mood, scheme, sharpness, font } = this.state;
    const color = event.target.value;
    const theme = createTheme({
      color, background, mood, scheme, sharpness, font,
    });
    if (theme) {
      this.setState({
        color,
        errors: {
          ...errors, color: undefined,
        },
        key: key + 1,
        theme,
      });
    } else {
      this.setState({
        color,
        errors: {
          ...errors, color: 'must be #RRGGBB',
        },
      });
    }
  };

    onChangeBackground = (event) => {
      const { errors, key, color, mood, scheme, sharpness, font } = this.state;
      const background = event.target.value;
      const theme = createTheme({
        color, background, mood, scheme, sharpness, font,
      });
      if (theme) {
        this.setState({
          background,
          errors: {
            ...errors, background: undefined,
          },
          key: key + 1,
          theme,
        });
      } else {
        this.setState({
          background,
          errors: {
            ...errors, background: 'must be #RRGGBB',
          },
        });
      }
    };

  onChangeSharpness = ({ option: sharpness }) => {
    const { key, color, background, mood, scheme, font } = this.state;
    this.setState({
      key: key + 1,
      sharpness,
      theme: createTheme({
        color, background, mood, scheme, sharpness, font,
      }),
    });
  };

  onChangeMood = ({ option: mood }) => {
    const { key, color, background, sharpness, font, scheme } = this.state;
    this.setState({
      key: key + 1,
      mood,
      theme: createTheme({
        color, background, mood, scheme, sharpness, font,
      }),
    });
  };

  onChangeScheme = ({ option: scheme }) => {
    const { key, color, background, sharpness, font, mood } = this.state;
    this.setState({
      key: key + 1,
      scheme,
      theme: createTheme({
        color, background, mood, scheme, sharpness, font,
      }),
    });
  };

  onSelectFont = (font) => {
    const { color, background, mood, scheme, sharpness, key } = this.state;
    this.setState({
      key: key + 1,
      font,
      open: undefined,
      theme: createTheme({
        color, background, mood, scheme, sharpness, font,
      }),
    });
  };

  onFontSearch = ({ target: { value: search } }) => {
    this.setState({
      fontSearch: search, open: true,
    });
  };

  onApply = (updateTheme) => {
    const { name, theme } = this.state;
    const { router } = this.props;
    updateTheme(name, theme);
    const params = new URLSearchParams();
    if (theme) {
      params.append('theme', name);
    }
    const sParams = params.toString();
    const path = queryParams(router) + (sParams ? `?${sParams}` : '');
    router.replace(path, path, {
      shallow: true,
    });
  };


  render() {
    const {
      color, background, errors, font, key, mood, scheme, name, sharpness,
      theme, fontSearch, viewTheme, open,
    } = this.state;
    const { fonts } = this.props;
    let layer;
    if (viewTheme) {
      const closeLayer = () => this.setState({
        viewTheme: false,
      });
      layer = (
        <Layer onEsc={closeLayer} onClickOutside={closeLayer} full={true} responsive={true} margin='medium'>
          <Box overflow='auto'>
            <JSONPretty json={theme} />
          </Box>
        </Layer>
      );
    }
    return (
      <Page title='Theme'>
        <Box pad='large'>
          <Heading level={1}>
            <strong>{`Theme "${name}"`}</strong>
          </Heading>
        </Box>

        <Box>
          <Box
            margin={{
              bottom: 'large',
            }}
          >
            <Box gap='small'>
              <Box gap='small' direction='row-responsive'>
                <FormField
                  label='Brand Color'
                  help='hex RGB'
                  error={errors.color}
                >
                  <ColorInput
                    plain={true}
                    colors={materialColors}
                    value={color}
                    onChange={this.onChangeColor}
                  />
                </FormField>
                <FormField
                  label='Background Color'
                  help='hex RGB'
                  error={errors.background}
                >
                  <ColorInput
                    plain={true}
                    colors={materialColors}
                    value={background}
                    onChange={this.onChangeBackground}
                  />
                </FormField>
                <FormField
                  label='Font Name'
                  help={<Anchor href='https://fonts.google.com/' label='google fonts' />}
                >
                  <DropButton
                    plain={true}
                    label={font.family}
                    open={open}
                    dropAlign={{
                      top: 'bottom', right: 'right',
                    }}
                    dropContent={(
                      <Box>
                        <TextInput placeholder='Search' onChange={this.onFontSearch} />
                        <ThemeFonts
                          fonts={fonts}
                          search={fontSearch}
                          onSelect={this.onSelectFont}
                        />
                      </Box>
)}
                  />
                </FormField>
              </Box>
              <Box gap='small' direction='row-responsive'>
                <FormField label='Border sharpness'>
                  <Select
                    plain={true}
                    value={sharpness}
                    options={SHARPNESSES}
                    onChange={this.onChangeSharpness}
                  />
                </FormField>
                <FormField label='Color scheme'>
                  <Select
                    plain={true}
                    value={scheme}
                    options={SCHEMES}
                    onChange={this.onChangeScheme}
                  />
                </FormField>
                <FormField label='Color variation'>
                  <Select
                    plain={true}
                    value={mood}
                    options={MOODS}
                    onChange={this.onChangeMood}
                  />
                </FormField>
              </Box>
            </Box>
            <AppThemeContextConsumer>
              {({ updateTheme }) => (
                <Box align='start' gap='small' direction='row-responsive'>
                  <Button label='Apply' primary={true} onClick={() => this.onApply(updateTheme)} />
                  <Button
                    label='View theme'
                    onClick={() => this.setState({
                      viewTheme: true,
                    })}
                  />
                </Box>
              )}
            </AppThemeContextConsumer>
          </Box>

          <Box
            flex='grow'
          >
            <Grommet key={key} theme={theme}>
              <ThemePreview />
            </Grommet>
          </Box>
          {layer}
        </Box>
      </Page>
    );
  }
}


export default withRouter(Theme);
