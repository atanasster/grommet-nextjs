import React, { useState } from 'react';
import { withTheme } from 'styled-components';
import { Box, Select, Grommet, Text } from 'grommet';
import { deepMerge } from 'grommet/utils';


const fontString = font => `'${font.family}', ${font.category}`;

interface FontInterface {
  family: string,
}
interface FontEditorProps {
  object: FontInterface,
  onChange(font: FontInterface): void,
  theme: object,
  fonts: FontInterface[],

}
const FontEditor: React.FC<FontEditorProps> = ({ theme, object, onChange, fonts }) => {
 const [ search, setSearch] = useState<string>('');
 return (
   <Select
     labelKey='family'
     value={(object && object.family) || ''}
     options={fonts.filter(font => (font.family.toLowerCase().match(search)))}
     onClose={() => this.setState({ search: '' })}
     onChange={({ option: font }) => onChange({ family: fontString(font) })}
     onSearch={(text) => {
        this.setState({
          search: text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&').toLowerCase(),
        });
      }}
   >
     {font => (
       <Grommet key={`font_${font.family}`} theme={deepMerge(theme, { global: { font: { family: fontString(font) } } })} >
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

export default withTheme(FontEditor);

