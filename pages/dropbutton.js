import { Box, Button, DropButton, Text, TextInput } from 'grommet';
import { doc } from 'grommet/components/DropButton/doc';

import Doc from '../components/Doc';

const desc = doc(DropButton).toJSON();

export default class DropButtonDoc extends React.Component {
  state = {}

  render() {
    const { open } = this.state;
    return (
      <Doc
        name='DropButton'
        desc={desc}
        example={(
          <DropButton
            label='Fancy Selector'
            open={open}
            dropAlign={{ top: 'bottom', right: 'right' }}
            dropContent={
              <Box>
                <TextInput placeholder='Search' />
                {['one', 'two', 'three', 'four', 'five'].map((label, index) => (
                  <Button
                    key={label}
                    hoverIndicator={true}
                    onClick={() => this.setState({ open: undefined })}
                  >
                    <Box
                      direction='row'
                      justify='between'
                      align='center'
                      pad={{ horizontal: 'small', vertical: 'xsmall' }}
                    >
                      <Text>{label}</Text>
                      <Text>{index + 1}</Text>
                    </Box>
                  </Button>
                ))}
              </Box>
            }
          />
        )}
      />
    );
  }
}
