import { bindActionCreators } from 'redux';
import 'isomorphic-unfetch';
import JSONPretty from 'react-json-pretty';
import {
  Anchor, Box, Button, Grommet, Heading, Layer, Paragraph, Select, Text,
  TextInput, CheckBox, RadioButton, Menu,
} from 'grommet';
import { Menu as MenuIcon, Edit } from 'grommet-icons';
import Page from '../components/Page';
import AirlineMultiSelect from '../components/drop-button/AirlineMultiSelect';
import LabelMultiSelect from '../components/drop-button/LabelMultiSelect';
import createTheme, { MOODS, SCHEMES, SHARPNESSES, themeFromFont, themeColors } from '../utils/theme';
import { updateTheme } from '../redux/themes/actions';
import connect from '../redux';

const defaultFont = 'Roboto';
const defaultColor = '#99cc33';
const defaultBackground = '#ffffff';
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
    const background = defaultBackground;
    const mood = defaultMood;
    const scheme = defaultScheme;
    const sharpness = defaultSharpness;
    const { font } = props;
    const theme = createTheme({
      color, background, mood, scheme, sharpness, font,
    });
    this.state = {
      color,
      background,
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


  onChangeFont = ({ option: { family } }) => {
    const {
      color, background, mood, scheme, sharpness,
    } = this.state;
    const { fonts } = this.props;
    themeFromFont(fonts.find(f => f.family === family))
      .then((font) => {
        this.setState({
          theme: createTheme({
            color, background, mood, scheme, sharpness, font,
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
     color, background, errors, focused, fontFamily, key, mood, scheme, name, sharpness,
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
                 <Box background={theme.global.colors.brand} pad='small' round='small' border='all' />
               </Box>
             </Field>
             <Field
               label='Background Color'
               help='hex RGB'
               error={errors.background}
               focused={focused === 'background'}
             >
               <Box direction='row' align='center' justify='between'>
                 <TextInput
                   plain={true}
                   value={background}
                   onChange={this.onChangeBackground}
                   onFocus={() => this.setState({ focused: 'background' })}
                   onBlur={() => this.setState({ focused: undefined })}
                 />
                 <Box background={theme.global.colors.background} pad='small' round='small' border='all' />
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
                 <Box pad='large' align='start'>
                   <Heading level={1} margin={{ top: 'none' }}>Heading H1</Heading>
                   <Text>Text</Text>
                   <Box direction='row' gap='medium' pad={{ vertical: 'medium' }} justify='between' align='center'>
                     <Field
                       label='TextInput'
                       error='error'
                     >
                       <TextInput plain={true} placeholder='TextInput' />
                     </Field>
                     <Field
                       label='Select'
                       help='select an option'
                     >
                       <Select
                         plain={true}
                         placeholder='slect an option'
                         options={['Option 1', 'Option 2', 'Option 3']}
                       />
                     </Field>
                   </Box>
                   <Box direction='row' pad={{ vertical: 'medium' }} gap='medium' fill='horizontal'>
                     <Box gap='small' margin={{ right: 'medium' }}>
                       <Button active={true} label='Active' onClick={() => {}} />
                       <Button color='status-critical' label='Critical' onClick={() => {}} />
                       <Button primary={true} label='Primary' onClick={() => {}} />
                       <Button icon={<Edit />} label='Disabled' />
                     </Box>
                     <Box gap='small' margin={{ horizontal: 'medium' }}>
                       <CheckBox checked={true} label='Option one' disabled={true} />
                       <RadioButton checked={true} label='Option one' disabled={true} />
                     </Box>
                     <Box gap='small' margin={{ right: 'medium' }} align='start' >
                       <Box direction='row' margin={{ vertical: 'medium' }}>
                         <AirlineMultiSelect />
                       </Box>
                       <Box direction='row' margin={{ vertical: 'medium' }}>
                         <LabelMultiSelect />
                       </Box>
                     </Box>
                   </Box>
                   <Box fill='horizontal'>
                     <Box fill='horizontal' basis='xsmall' direction='row'>
                       {themeColors(theme).map(c => (
                         <Box key={`color_${c}`} flex={true} background={c} />
                        ))}
                     </Box>
                   </Box>
                   <Box direction='row' margin={{ top: 'medium' }} pad={{ vertical: 'medium' }} border='top' fill='horizontal'>
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
