import { Box } from 'grommet';
import { ColorInput } from '../../components/grommet/ColorInput';
import materialUIPalette from '../../components/grommet/Colors/palettes/materialColors';
import doc from '../../components/grommet/ColorInput/doc';
import Doc from '../../components/Doc';
import uiColorPalette from '../../components/grommet/Colors/palettes/uiColors';

const desc = doc(ColorInput).toJSON();

export default class EmailInputDoc extends React.Component {
  state = { color: '#ff0000' };
  render() {
    const { color } = this.state;
    return (
      <Box>
        <Doc
          name='ColorInput'
          desc={desc}
          example={
            <Box direction='row'>
              <Box basis='medium'>
                <ColorInput
                  colors={materialUIPalette}
                  value={color}
                  onChange={({ target: { value } }) => this.setState({ color: value })}
                />
              </Box>
            </Box>
          }
          examples={{
             colors: (
               <ColorInput
                 value={color}
                 onChange={({ target: { value } }) => this.setState({ color: value })}
                 colors={uiColorPalette}
               />
             ),
          }}
        />
      </Box>
    );
  }
}
