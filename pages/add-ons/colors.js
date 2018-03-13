import { Box } from 'grommet';
import { Colors } from 'grommet-controls';
import doc from 'grommet-controls/components/Colors/doc';
import materialUIPalette, {
  blue, blueGrey, brown, cyan,
  deepOrange,
} from 'grommet-controls/components/Colors/palettes/materialColors';
import uiColorPalette from 'grommet-controls/components/Colors/palettes/uiColors';
import basicColorPalette from 'grommet-controls/components/Colors/palettes/basicColors';
import Doc from '../../components/Doc';

const desc = doc(Colors).toJSON();

export default class ColorsDoc extends React.Component {
  render() {
    return (
      <Doc
        name='Colors'
        desc={desc}
        example={
          <Box direction='row'>
            <Box basis='medium'>
              <Colors
                size='small'
                onSelect={(option) => { alert(JSON.stringify(option)); }}
                colors={materialUIPalette}
              />
            </Box>
          </Box>
        }
        examples={{
          colors: (
            <Colors
              size='small'
              defaultColor='#ff0000'
              colors={uiColorPalette}
            />
          ),
          onSelect: (
            <Colors
              size='small'
              colors={basicColorPalette}
              onSelect={(option) => { alert(JSON.stringify(option)); }}
            />
          ),
          size: (
            <Box gap='small'>
              <Colors
                size='small'
                colors={{
                  blue, blueGrey, brown, cyan, deepOrange,
                }}
              />
              <Colors
                size='medium'
                columns={5}
                colors={{
                  blue, blueGrey, brown, cyan, deepOrange,
                }}
              />
              <Colors
                size='large'
                columns={3}
                colors={{
                  blue, blueGrey, brown, cyan, deepOrange,
                }}
              />
            </Box>
          ),
          columns: (
            <Colors
              size='small'
              columns={5}
              colors={{
                blue, blueGrey, brown, cyan, deepOrange,
              }}
            />
          ),
          wrap: (
            <Colors
              size='small'
              columns={5}
              wrap={true}
              colors={{
                blue, blueGrey, brown, cyan, deepOrange,
              }}
            />
          ),
        }}
      />
    );
  }
}
