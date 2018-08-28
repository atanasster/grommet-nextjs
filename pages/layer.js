import { Box, Button, Heading, Layer, Text } from 'grommet';
import { doc } from 'grommet/components/Layer/doc';

import Doc from '../components/Doc';

const desc = doc(Layer).toJSON();

export default class LayerDoc extends React.Component {
  state = {
    full: undefined,
    margin: undefined,
    modal: undefined,
    plain: undefined,
    position: undefined,
    show: false,
  }
  render() {
    const {
      full, margin, modal, plain, position, show,
    } = this.state;
    let layerNode;
    if (show) {
      const close = () => this.setState({ show: false });
      layerNode = (
        <Layer
          position={position}
          full={full}
          margin={margin}
          modal={modal}
          plain={plain}
          onEsc={close}
        >
          <Box pad={{ horizontal: 'medium' }}>
            <Heading level={2} margin='medium'>Confirm</Heading>
            <Text>
              Are you sure you want to close this layer?
            </Text>
            <Box align='start' margin={{ vertical: 'medium' }}>
              <Button primary={true} label='Sure, close it' onClick={close} />
            </Box>
          </Box>
        </Layer>
      );
    }

    return (
      <Doc
        name='Layer'
        desc={desc}
        examples={{
          full: (
            <Box>
              {[true, false, 'horizontal', 'vertical'].map(fullValue => (
                <Box key={fullValue} margin='small'>
                  <Button
                    active={fullValue === full}
                    label={`${fullValue}`}
                    onClick={() => this.setState({ show: true, full: fullValue })}
                  />
                </Box>
              ))}
            </Box>
          ),
          margin: (
            <Box>
              {['none', 'xsmall', 'small', 'medium', 'large'].map(marginValue => (
                <Box key={marginValue} margin='small'>
                  <Button
                    active={marginValue === margin}
                    label={marginValue}
                    onClick={() => this.setState({ show: true, margin: marginValue })}
                  />
                </Box>
              ))}
            </Box>
          ),
          modal: (
            <Box>
              {[true, false].map(modalValue => (
                <Box key={modalValue} margin='small'>
                  <Button
                    active={modalValue === modal}
                    label={`${modalValue}`}
                    onClick={() => this.setState({ show: true, modal: modalValue })}
                  />
                </Box>
              ))}
            </Box>
          ),
          plain: (
            <Box>
              {[true, false].map(plainValue => (
                <Box key={plainValue} margin='small'>
                  <Button
                    active={plainValue === plain}
                    label={`${plainValue}`}
                    onClick={() => this.setState({ show: true, plain: plainValue })}
                  />
                </Box>
              ))}
            </Box>
          ),
          position: (
            <Box>
              {['bottom', 'center', 'hidden', 'left', 'right', 'top'].map(positionValue => (
                <Box key={positionValue} margin='small'>
                  <Button
                    active={positionValue === position}
                    label={positionValue}
                    onClick={() => this.setState({ show: true, position: positionValue })}
                  />
                </Box>
              ))}
            </Box>
          ),
        }}
      >
        {layerNode}
      </Doc>
    );
  }
}
