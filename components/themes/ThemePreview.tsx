import React from 'react';
import { ThemeContext } from 'styled-components';
import {
  Box, Button, Anchor, Heading, Select, Text,
  TextInput, CheckBox, RadioButton, Menu, Layer, RangeInput,
  DropButton, FormField, RangeSelector, Stack,
} from 'grommet';
import { colorIsDark, normalizeColor } from 'grommet/utils/colors';
import { Menu as MenuIcon, Edit, Grommet } from 'grommet-icons';
import ColorRoll from './ColorRoll';

const stringOptions = ['small', 'medium', 'large', 'xlarge', 'huge'];


interface ThemePreviewState {
  layer: React.ReactNode,
  open: boolean,
  size: string,
}
export default class ThemePreview extends React.Component<{}, ThemePreviewState> {
  state = {
    layer: undefined,
    open: undefined,
    size: stringOptions[0],
  };

  renderControls = (background?: string) => {
    const { open, size } = this.state;
    const diabledProps = {
      disabled: true,
    };
    return (
      <Box pad='large' gap='medium' background={background}>
        <Box direction='row-responsive' align='center' justify='between'>
          {[1, 2, 3, 4].map(item => <Heading key={`heading_${item}`} level={item as any} margin='none'>{`Heading H${item}`}</Heading>)}
        </Box>
        <Box direction='row-responsive' align='center' justify='between'>
          {['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall']
            .map(item => <Text key={`text_${item}`} size={item}>{`Text ${item}`}</Text>)
          }
        </Box>
        <Box direction='row-responsive' justify='between' align='center'>
          <FormField
            label='FormField'
            error='error'
          >
            <TextInput placeholder='placeholder' />
          </FormField>
          <Box flex={false}>
            <TextInput value='TextInput' />
          </Box>
          <Box flex={false}>
            <TextInput disabled={true} value='disabled' />
          </Box>
          <Select
            options={stringOptions}
            value={size}
            onChange={({ value }: any) => this.setState({
              size: value,
            })}
          />
          <Select
            options={stringOptions}
            disabled={true}
            value='disabled'
            onChange={({ value }: any) => this.setState({
              size: value,
            })}
          />
        </Box>
        <Box direction='row-responsive' justify='between'>
          <Button
            icon={<Grommet />}
            active={true}
            label='Active'
            onClick={() => {
            }}
          />
          <Button
            icon={<Grommet />}
            color='status-critical'
            label='Color'
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
          <Button
            icon={<Edit />}
            label='Disabled'
            disabled={true}
          />
        </Box>
        <Box direction='row-responsive' justify='between'>
          <Anchor
            label='Anchor'
            href='#'
          />
          <Anchor
            color='status-critical'
            label='Anchor color'
            href='#'
          />
          <Anchor
            icon={<Grommet />}
            label='Anchor icon'
            href='#'
          />
          <Anchor
            icon={<Edit />}
            label='Anchor disabled'
            {...diabledProps}
          />
        </Box>
        <Box direction='row-responsive' justify='between'>
          <CheckBox checked={true} label='Checked' disabled={false} onChange={() => {}} />
          <CheckBox checked={false} label='Unchecked' disabled={false} onChange={() => {}} />
          <CheckBox checked={true} label='Disabled' disabled={true} onChange={() => {}} />
          <RadioButton name='radio' label='Radio 1' />
          <RadioButton name='radio' label='Radio 2' />
          <RadioButton name='radio2' checked={true} label='Disabled' disabled={true} />
          <CheckBox label='Toggle' toggle={true} checked={true} onChange={() => {}} />
        </Box>
        <Box direction='row-responsive' justify='between' align='center'>
          <Menu
            icon={<MenuIcon />}
            label='menu'
            items={stringOptions.map(item => ({
              label: item,
            }))}
          />

          <Box
            border={{
              color: 'brand', size: 'large',
            }}
            elevation='xlarge'
            pad='large'
          >
            Box with shadow
          </Box>
          <Box flex={false}>
            <DropButton
              label='DropButton'
              open={open}
              dropAlign={{
                top: 'bottom', right: 'right',
              }}
              dropContent={(
                <Box>
                  <TextInput placeholder='Search' />
                  {stringOptions.map((label, index) => (
                    <Button
                      key={label}
                      hoverIndicator={true}
                      onClick={() => this.setState({
                        open: undefined,
                      })}
                    >
                      <Box
                        direction='row'
                        justify='between'
                        align='center'
                        pad={{
                          horizontal: 'small', vertical: 'xsmall',
                        }}
                      >
                        <Text>{label}</Text>
                        <Text>{index + 1}</Text>
                      </Box>
                    </Button>
                  ))}
                </Box>
)}
            />
          </Box>
          <Box flex={false}>
            <RangeInput />
          </Box>
          <Box flex={false}>
            <Stack>
              <Box
                direction='row'
                justify='between'
              >
                {[11, 12, 13, 14, 15].map(value => (
                  <Box
                    key={`range_selector_${value}`}
                    width='xxsmall'
                    height='xxsmall'
                    align='center'
                    pad='small'
                  >
                    <Text
                      style={{
                        fontFamily: 'monospace',
                      }}
                    >
                      {value}
                    </Text>
                  </Box>
                ))}
              </Box>
              <RangeSelector
                min={10}
                max={20}
                size='full'
                values={[12, 14]}
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    );
  };

  render() {
    const { layer } = this.state;
    let modal;
    if (layer !== undefined) {
      const close = () => {
        this.setState({
          layer: undefined,
        });
      };
      modal = (
        <Layer
          position={layer === 'vertical' ? 'right' : 'center'}
          full={layer}
          onEsc={close}
        >
          <Box
            pad={{
              horizontal: 'medium',
            }}
          >
            <Heading level={2} margin='medium'>Confirm</Heading>
            <Text>
              Are you sure you want to close this layer?
            </Text>
            <Box
              align='start'
              margin={{
                vertical: 'medium',
              }}
            >
              <Button primary={true} label='Close' onClick={close} />
            </Box>
          </Box>
        </Layer>
      );
    }

    return (
      <ThemeContext.Consumer>
        {theme => (
          <Box
            border='all'
            flex={true}
          >
            {this.renderControls()}
            {this.renderControls(colorIsDark(normalizeColor('background', theme)) ? 'white' : 'black')}
            <Box
              fill='horizontal'
              pad={{
                horizontal: 'large', vertical: 'medium',
              }}
              gap='medium'
            >
              <Box direction='row' gap='small' fill='horizontal'>
                <Button
                  label='Dialog'
                  onClick={() => this.setState({
                    layer: false,
                  })}
                />
                <Button
                  label='Layer'
                  onClick={() => this.setState({
                    layer: 'vertical',
                  })}
                />
              </Box>
              <Box
                fill='horizontal'
                border='top'
                pad={{
                  top: 'medium',
                }}
                align='center'
              >
                <ColorRoll size='small' />
              </Box>
            </Box>
            {modal}
          </Box>
        )}
      </ThemeContext.Consumer>

    );
  }
}
