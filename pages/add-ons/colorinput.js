import { Box } from 'grommet';
import { ColorInput, materialColors, uiColors } from 'grommet-controls';
import doc from 'grommet-controls/components/ColorInput/doc';
import Doc from '../../components/Doc';

const desc = doc(ColorInput).toJSON();

export default class ColorInputDoc extends React.Component {
  state = { color: '#ff0000' };
  render() {
    const { color } = this.state;
    return (
      <Doc
        name='ColorInput'
        desc={desc}
        example={
          <Box direction='row'>
            <Box basis='medium'>
              <ColorInput
                colors={materialColors}
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
               columns={9}
               wrap={true}
               onChange={({ target: { value } }) => this.setState({ color: value })}
               colors={uiColors}
             />
           ),
        }}
      />
    );
  }
}
