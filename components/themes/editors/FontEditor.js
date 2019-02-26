import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Box, Select, Grommet, Text } from 'grommet';
import { deepMerge } from 'grommet/utils';

class FontEditor extends React.Component {
 state = { search: '' };

 render() {
   const {
     theme, object, onChange, fonts,
   } = this.props;
   const { search } = this.state;
   return (
     <Select
       labelKey='family'
       value={(object && object.family) || ''}
       options={fonts.filter(font => (font.family.toLowerCase().match(search)))}
       onClose={() => this.setState({ search: '' })}
       onChange={({ option: font }) => onChange({ family: `'${font.family}', ${font.category}` })}
       onSearch={(text) => {
          this.setState({
            search: text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&').toLowerCase(),
          });
        }}
     >
       {font => (
         <Grommet key={`font_${font.family}`} theme={deepMerge(theme, { global: { font: { family: `'${font.family}', ${font.category}` } } })} >
           <Box
             direction='row-responsive'
             justify='between'
             align='center'
             pad={{ horizontal: 'small', vertical: 'xsmall' }}
           >
             <Text>{font.family}</Text>
             <Text size='small'>{font.category}</Text>
           </Box>
         </Grommet>
        )}
     </Select>
   );
 }
}

FontEditor.propTypes = {
  object: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

FontEditor.defaultProps = {
  object: undefined,
};

export default withTheme(FontEditor);

