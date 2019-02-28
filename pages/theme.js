import React, { Fragment } from 'react';
import { withRouter } from 'next/router';
import { bindActionCreators } from 'redux';
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
import { updateTheme } from '../redux/themes/actions';
import connect from '../redux';
import ThemePreview from '../components/themes/ThemePreview';
import { queryParams } from '../components/nextjs/urlParams';

const defaultFont = 'Roboto';
const defaultColor = '#99cc33';
const defaultBackground = '#fff8e1';
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
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const r = await fetch(`${baseUrl}/api/fonts`);
    const fonts = await r.json();
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
   const { router } = this.props;
   const path = { pathname: queryParams(router), query: { theme: name } };
   this.props.updateTheme(name, theme);
   router.replace(path, path, { shallow: true });
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
         <Box margin={{ bottom: 'large' }}>
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
                   dropAlign={{ top: 'bottom', right: 'right' }}
                   dropContent={
                     <Box>
                       <TextInput placeholder='Search' onChange={this.onFontSearch} />
                       <ThemeFonts fonts={fonts} search={fontSearch} onSelect={this.onSelectFont} />
                     </Box>
                  }
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
           <Box align='start' gap='small' direction='row-responsive'>
             <Button label='Apply' primary={true} onClick={this.onApply} />
             <Button label='View theme' onClick={() => this.setState({ viewTheme: true })} />
           </Box>
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

const mapDispatchToProps = dispatch => bindActionCreators({ updateTheme }, dispatch);


const mapStateToProps = state => ({
  themes: state.themes,
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Theme));
