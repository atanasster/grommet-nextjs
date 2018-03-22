import { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import 'isomorphic-unfetch';
import JSONPretty from 'react-json-pretty';
import {
  Anchor, Box, Button, Grommet, Heading, Layer, Select, Text,
  TextInput, DropButton,
} from 'grommet';
import { withTheme } from 'grommet/components/hocs';
import { deepMerge } from 'grommet/utils/object';
import { ColorInput } from 'grommet-controls';
import materialUIPalette from 'grommet-controls/components//Colors/palettes/materialColors';
import Page from '../components/Page';
import createTheme, { MOODS, SCHEMES, SHARPNESSES, themeFromFont } from '../utils/theme';
import { updateTheme } from '../redux/themes/actions';
import connect from '../redux';
import Preview from '../components/Preview';
import { FormField } from '../components/grommet/FormField';

const defaultFont = 'Roboto';
const defaultColor = '#99cc33';
const defaultBackground = '#ffffff';
const defaultMood = 'pastel';
const defaultScheme = 'triade';
const defaultSharpness = 'medium';

class Fonts extends React.Component {
 state = { fonts: [] };

 loadFontThemes(props) {
   const { fonts, search } = props;
   this.setState({ fonts: [] });
   const filtered =
      fonts.filter(f => (f.family.toUpperCase().startsWith(search.toUpperCase()) ||
        f.category.toUpperCase().startsWith(search.toUpperCase()))).slice(0, 10);
   const self = this;
   filtered.map(font => (
     themeFromFont(font).then(theme => self.setState({
       fonts: [...this.state.fonts, { ...font, theme }],
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
     <Fragment >
       {fonts.map(font => (
         <Button
           key={font.family}
           hoverIndicator={true}
           onClick={() => this.props.onSelect(font)}
         >
           <Grommet theme={deepMerge(theme, { global: { font: font.theme } })} >
             <Box
               direction='row-responsive'
               justify='between'
               align='center'
               pad={{ horizontal: 'small', vertical: 'xsmall' }}
             >
               <Text>{font.family}</Text>
               <Text>{font.category}</Text>
             </Box>
           </Grommet>
         </Button>))
        }
     </Fragment>
   );
 }
}

const ThemeFonts = withTheme(Fonts);

class Theme extends React.Component {
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
  static async getInitialProps() {
    const res = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.GOOGLE_FONTS_API_KEY}&sort=popularity`);
    const json = await res.json();
    const fonts = json.items ? json.items.filter(item => item.subsets.indexOf('latin') !== -1) : [];
    const font = fonts.find(f => f.family === defaultFont);
    const theme = await themeFromFont(font);
    return { fonts, font: { ...font, theme } };
  }


  onChangeColor = (event) => {
    const {
      errors, key, background, mood, scheme, sharpness, font,
    } = this.state;
    const color = event.target.value;
    const theme = createTheme({
      color, background, mood, scheme, sharpness, font,
    });
    if (theme) {
      this.setState({
        color,
        errors: { ...errors, color: undefined },
        key: key + 1,
        theme,
      });
    } else {
      this.setState({
        color,
        errors: { ...errors, color: 'must be #RRGGBB' },
      });
    }
  };
    onChangeBackground = (event) => {
      const {
        errors, key, color, mood, scheme, sharpness, font,
      } = this.state;
      const background = event.target.value;
      const theme = createTheme({
        color, background, mood, scheme, sharpness, font,
      });
      if (theme) {
        this.setState({
          background,
          errors: { ...errors, background: undefined },
          key: key + 1,
          theme,
        });
      } else {
        this.setState({
          background,
          errors: { ...errors, background: 'must be #RRGGBB' },
        });
      }
    };

  onChangeSharpness = ({ option: sharpness }) => {
    const {
      key, color, background, mood, scheme, font,
    } = this.state;
    this.setState({
      key: key + 1,
      sharpness,
      theme: createTheme({
        color, background, mood, scheme, sharpness, font,
      }),
    });
  };

  onChangeMood = ({ option: mood }) => {
    const {
      key, color, background, sharpness, font, scheme,
    } = this.state;
    this.setState({
      key: key + 1,
      mood,
      theme: createTheme({
        color, background, mood, scheme, sharpness, font,
      }),
    });
  };

  onChangeScheme = ({ option: scheme }) => {
    const {
      key, color, background, sharpness, font, mood,
    } = this.state;
    this.setState({
      key: key + 1,
      scheme,
      theme: createTheme({
        color, background, mood, scheme, sharpness, font,
      }),
    });
  };

  onSelectFont = (font) => {
    const {
      color, background, mood, scheme, sharpness, key,
    } = this.state;
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
    this.setState({ fontSearch: search, open: true });
  };

 onApply = () => {
   const { name, theme } = this.state;
   this.props.updateTheme(name, theme);
 };


 render() {
   const {
     color, background, errors, font, key, mood, scheme, name, sharpness,
     theme, fontSearch, viewTheme, open,
   } = this.state;
   const { fonts } = this.props;
   let layer;
   if (viewTheme) {
     const closeLayer = () => this.setState({ viewTheme: false });
     layer = (
       <Layer onEsc={closeLayer} onClickOutside={closeLayer}>
         <JSONPretty json={theme} />
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

       <Box direction='row-responsive'>
         <Box basis='medium' margin={{ bottom: 'large' }}>
           <Box pad='medium'>
             <FormField label='Name'>
               <TextInput
                 plain={true}
                 value={name}
                 onChange={event => this.setState({ name: event.target.value })}
               />
             </FormField>
             <FormField
               label='Brand Color'
               help='hex RGB'
               error={errors.color}
             >
               <ColorInput
                 plain={true}
                 colors={materialUIPalette}
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
                 colors={materialUIPalette}
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
                 dropAlign={{ top: 'bottom', right: 'right' }}
                 dropContent={
                   <Box>
                     <TextInput placeholder='Search' onChange={this.onFontSearch} />
                     <ThemeFonts fonts={fonts} search={fontSearch} onSelect={this.onSelectFont} />
                   </Box>
                }
               />
             </FormField>
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
           <Box pad={{ horizontal: 'medium' }} >
             <Button label='Apply' primary={true} onClick={this.onApply} />
             <Button label='View theme' onClick={() => this.setState({ viewTheme: true })} />
           </Box>
         </Box>

         <Box
           pad={{ horizontal: 'medium' }}
           flex='grow'
           margin={{ bottom: 'large' }}
           align='center'
         >
           <Grommet key={key} theme={theme}>
             <Preview />
           </Grommet>
         </Box>
         {layer}
       </Box>
     </Page>
   );
 }
}

const mapDispatchToProps = dispatch => bindActionCreators({ updateTheme }, dispatch);


const mapStateToProps = state => ({
  themes: state.themes,
});


export default connect(mapStateToProps, mapDispatchToProps)(Theme);
