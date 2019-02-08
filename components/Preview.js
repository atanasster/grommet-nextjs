import {
  Box, Button, Anchor, Heading, Select, Text,
  TextInput, CheckBox, RadioButton, Menu, Layer, RangeInput,
  DropButton, FormField,
} from 'grommet';
import { Menu as MenuIcon, Edit, Grommet } from 'grommet-icons';
import { Tag, Tags } from 'grommet-controls';
import ColorRoll from './ColorRoll';


const stringOptions = ['small', 'medium', 'large', 'xlarge', 'huge'];

export default class Preview extends React.Component {
  state = {
    layer: undefined,
    open: undefined,
    selected: [stringOptions[0], stringOptions[2]],
    size: stringOptions[0],
  };
  render() {
    const {
      layer, open, selected, size,
    } = this.state;
    let modal;
    if (layer !== undefined) {
      const close = () => { this.setState({ layer: undefined }); };
      modal = (
        <Layer
          position={layer === 'vertical' ? 'right' : 'center'}
          full={layer}
          onEsc={close}
        >
          <Box pad={{ horizontal: 'medium' }}>
            <Heading level={2} margin='medium'>Confirm</Heading>
            <Text>
              Are you sure you want to close this layer?
            </Text>
            <Box align='start' margin={{ vertical: 'medium' }}>
              <Button primary={true} label='Close' onClick={close} />
            </Box>
          </Box>
        </Layer>
      );
    }

    return (
      <Box
        border='all'
        flex={true}
        direction='column'
        animation='fadeIn'
      >
        <Box pad='medium' background='brand' direction='row-responsive' justify='between' align='center'>

          <Menu
            icon={<MenuIcon />}
            label='menu'
            dropAlign={{ top: 'top', right: 'right' }}
            items={stringOptions.map(item => ({ item }))}
          />
          <Anchor
            label='Anchor'
            onClick={() => {}}
          />
        </Box>
        <Box pad='large' align='start'>
          <Heading level={1} margin={{ top: 'none' }}>Heading H1</Heading>
          <Text>Text</Text>
          <Box direction='row-responsive' fill='horizontal' pad={{ vertical: 'medium' }} justify='between' align='center'>
            <FormField
              label='TextInput'
              error='error'
            >
              <TextInput plain={true} placeholder='TextInput' />
            </FormField>
            <FormField
              label='Select'
              help='select an option'
            >
              <Select
                options={stringOptions}
                value={size}
                onChange={({ option }) => this.setState({ size: option })}
              />
            </FormField>
            <FormField
              label='RangeInput'
            >
              <RangeInput
                onChange={() => {}}
              />

            </FormField>

          </Box>
          <Box direction='row-responsive' pad={{ vertical: 'medium' }} justify='between' fill='horizontal'>
            <Box gap='small' margin={{ right: 'medium' }}>
              <Button
                active={true}
                label='Active'
                onClick={() => {
              }}
              />
              <Button
                color='status-critical'
                label='Critical'
                onClick={() => {
              }}
              />
              <Button
                primary={true}
                icon={<Grommet />}
                label='Primary'
                onClick={() => {
              }}
              />
              <Button icon={<Edit />} label='Disabled' />
            </Box>
            <Box gap='small' margin={{ horizontal: 'medium' }}>
              <CheckBox checked={true} label='Checked' disabled={false} onChange={() => {}} />
              <CheckBox checked={false} label='Unchecked' disabled={false} onChange={() => {}} />
              <CheckBox checked={true} label='Disabled' disabled={true} onChange={() => {}} />
              <RadioButton name='radio' label='Radio 1' />
              <RadioButton name='radio' label='Radio 2' />
              <RadioButton name='radio2' checked={true} label='Disabled' disabled={true} />
              <CheckBox label='Toggle' toggle={true} checked={true} onChange={() => {}} />

            </Box>
            <Box gap='medium' margin={{ right: 'medium' }} align='start'>
              <Box
                basis='xsmall'
                border={{ color: 'brand', size: 'large' }}
                elevation='xlarge'
                pad='large'
              />
              <DropButton
                label='DropButton'
                open={open}
                dropAlign={{ top: 'bottom', right: 'right' }}
                dropContent={
                  <Box>
                    <TextInput placeholder='Search' />
                    {stringOptions.map((label, index) => (
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
            </Box>
          </Box>
          <Box direction='row-responsive' fill='horizontal'justify='between' pad={{ vertical: 'medium' }} margin={{ top: 'medium' }}>
            <Tags
              options={stringOptions}
              value={selected}
              onChange={({ value }) => this.setState({ selected: value })}
            />
            <Tag size='large' pad='small' />
          </Box>

          <Box fill='horizontal' border='top' align='center' pad={{ vertical: 'medium' }} margin={{ top: 'medium' }}>
            <ColorRoll basis='xsmall' extended={true} />
          </Box>
          <Box direction='row' pad={{ top: 'medium' }} gap='small' border='top' fill='horizontal'>
            <Button label='Dialog' onClick={() => this.setState({ layer: false })} />
            <Button label='Layer' onClick={() => this.setState({ layer: 'vertical' })} />
          </Box>
        </Box>
        {modal}
      </Box>
    );
  }
}
