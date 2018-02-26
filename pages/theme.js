import { bindActionCreators } from 'redux';
import 'isomorphic-unfetch';
import JSONPretty from 'react-json-pretty';
import {
  Anchor, Box, Button, Grommet, Heading, Layer, Paragraph, Select, Text,
  TextInput, TextArea, CheckBox, RadioButton, Menu,
} from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';
import Page from '../components/Page';
import createTheme, { MOODS, SCHEMES, SHARPNESSES, themeFromFont, themeColors } from '../utils/theme';
import { updateTheme } from '../redux/themes/actions';
import connect from '../redux';

const defaultFont = 'Roboto';
const defaultColor = '#99cc33';
const defaultMood = 'pastel';
const defaultScheme = 'triade';
const defaultSharpness = 'medium';

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

class Theme extends React.Component {
  constructor(props) {
    super(props);
    const color = defaultColor;
    const mood = defaultMood;
    const scheme = defaultScheme;
    const sharpness = defaultSharpness;
    const { font } = props;
    const theme = createTheme({
      color, mood, scheme, sharpness, font,
    });
    this.state = {
      color,
      errors: {},
      font,
      fontFamily: defaultFont,
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
    const fonts = json.items.filter(item => item.subsets.indexOf('latin') !== -1);
    const font = await themeFromFont(fonts.find(f => f.family === defaultFont));
    return { fonts, font };
  }

  onChangeColor = (event) => {
    const {
      errors, key, mood, scheme, sharpness, font,
    } = this.state;
    const color = event.target.value;
    const theme = createTheme({
      color, mood, scheme, sharpness, font,
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

  onChangeSharpness = ({ option: sharpness }) => {
    const {
      key, color, mood, scheme, font,
    } = this.state;
    this.setState({
      key: key + 1,
      sharpness,
      theme: createTheme({
        color, mood, scheme, sharpness, font,
      }),
    });
  };

  onChangeMood = ({ option: mood }) => {
    const {
      key, color, sharpness, font, scheme,
    } = this.state;
    this.setState({
      key: key + 1,
      mood,
      theme: createTheme({
        color, mood, scheme, sharpness, font,
      }),
    });
  };

  onChangeScheme = ({ option: scheme }) => {
    const {
      key, color, sharpness, font, mood,
    } = this.state;
    this.setState({
      key: key + 1,
      scheme,
      theme: createTheme({
        color, mood, scheme, sharpness, font,
      }),
    });
  };


  onChangeFont = ({ option: { family } }) => {
    const {
      color, mood, scheme, sharpness,
    } = this.state;
    const { fonts } = this.props;
    themeFromFont(fonts.find(f => f.family === family))
      .then((font) => {
        this.setState({
          theme: createTheme({
            color, mood, scheme, sharpness, font,
          }),
          fontFamily: family,
        });
      });
  };

  onFontSearch = (search) => {
    this.setState({ fontSearch: search });
  };

 onApply = () => {
   const { name, theme } = this.state;
   this.props.updateTheme(name, theme);
 };


 render() {
   const {
     color, errors, focused, fontFamily, key, mood, scheme, name, sharpness,
     theme, fontSearch, viewTheme,
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
               help={<Anchor href='https://fonts.google.com/' label='google fonts' />}
               focused={focused === 'font'}
             >
               <Select
                 options={fonts.filter(
                    f => (f.family.toUpperCase().startsWith(fontSearch.toUpperCase()) ||
                      f.category.toUpperCase().startsWith(fontSearch.toUpperCase()))
                  )}
                 onClose={() => this.setState({ fontSearch: '' })}
                 value={fontFamily}
                 plain={true}
                 onSearch={this.onFontSearch}
                 onChange={this.onChangeFont}
                 onFocus={() => this.setState({ focused: 'font' })}
                 onBlur={() => this.setState({ focused: undefined })}
               >
                 {item => (
                   <Box border='botton' pad='small'>
                     <Text>{`${item.family} (${item.category})`}</Text>
                   </Box>
                 )}
               </Select>
             </Field>
             <Field label='Border sharpness' focused={focused === 'sharpness'}>
               <Select
                 plain={true}
                 value={sharpness}
                 options={SHARPNESSES}
                 onChange={this.onChangeSharpness}
                 onFocus={() => this.setState({ focused: 'sharpness' })}
                 onBlur={() => this.setState({ focused: undefined })}
               />
             </Field>
             <Field label='Color scheme' focused={focused === 'scheme'}>
               <Select
                 plain={true}
                 value={scheme}
                 options={SCHEMES}
                 onChange={this.onChangeScheme}
                 onFocus={() => this.setState({ focused: 'scheme' })}
                 onBlur={() => this.setState({ focused: undefined })}
               />
             </Field>
             <Field label='Color variation' focused={focused === 'mood'}>
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
             <Button label='Apply' primary={true} onClick={this.onApply} />
           </Box>
         </Box>

         <Box flex='grow' margin={{ bottom: 'large' }} align='center'>
           <Grommet key={key} theme={theme}>
             <Box
               direction='column'
               animation='fadeIn'
               background='white'
               elevation='xlarge'
             >
               <Box pad='medium' background='accent-1' direction='row' justify='between' align='center'>

                 <Menu
                   icon={<MenuIcon />}
                   label='menu'
                   dropAlign={{ top: 'top', right: 'right' }}
                   items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]}
                 />
                 <Button primary={true} label='Subscribe' onClick={() => {}} />
               </Box>
               <Box direction='row' justify='center'>
                 <Box basis='large' pad='large' align='start'>
                   <Heading level={1} margin={{ top: 'none' }}>Bring it on!</Heading>
                   <Text>Get your creativity going !</Text>
                   <Box direction='row' gap='medium' pad={{ vertical: 'medium' }} justify='between' align='end' fill='horizontal'>
                     <TextInput placeholder='TextInput' />
                     <TextArea placeholder='<TextArea />' disabled={true} />
                   </Box>
                   <Box direction='row' pad={{ vertical: 'medium' }} justify='between' align='center' fill='horizontal'>
                     <CheckBox checked={true} label='Option one' disabled={true} />
                     <RadioButton checked={true} label='Option one' disabled={true} />
                   </Box>
                   <Box pad={{ vertical: 'medium' }} fill='horizontal' basis='xsmall' direction='row'>
                     {themeColors(theme).map(c => (
                       <Box key={`color_${c}`} flex={true} background={c} />
                      ))}
                   </Box>
                   <Box margin={{ top: 'medium' }} border='top'>
                     <Button label='View theme' onClick={() => this.setState({ viewTheme: true })} />
                   </Box>
                 </Box>
               </Box>
             </Box>
             {layer}
           </Grommet>
         </Box>
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
