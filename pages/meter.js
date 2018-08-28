import { Box, Meter } from 'grommet';
import { doc } from 'grommet/components/Meter/doc';

import Doc from '../components/Doc';

const desc = doc(Meter).toJSON();

const SINGLE_VALUE = [
  { value: 60, label: 'sixty', onClick: () => alert('60') },
];
const MULTIPLE_VALUES = [
  {
    value: 60, label: 'sixty', color: 'neutral-1', onClick: () => alert('60'),
  },
  {
    value: 10, label: 'ten', color: 'accent-1', onClick: () => alert('10'),
  },
];

export default class MeterDoc extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  onHover(index) {
    return b => this.setState({ highlight: (b ? index : undefined) });
  }

  render() {
    const { highlight } = this.state;
    const multipleValues = MULTIPLE_VALUES.map((value, index) => ({
      ...value,
      highlight: (index === highlight),
      onHover: this.onHover(index),
    }));
    return (
      <Doc
        name='Meter'
        desc={desc}
        examples={{
          background: (
            <Meter
              background={{ color: 'light-4', opacity: 'medium' }}
              size='small'
              values={SINGLE_VALUE}
              aria-label='rounded meter'
            />
          ),
          round: (
            <Meter
              round={true}
              size='small'
              values={SINGLE_VALUE}
              aria-label='rounded meter'
            />
          ),
          thickness: (
            <Box>
              {['xsmall', 'small', 'medium', 'large', 'xlarge'].map(thickness => (
                <Box key={thickness} margin={{ bottom: 'xsmall' }} align='end'>
                  <Meter
                    thickness={thickness}
                    size='small'
                    values={SINGLE_VALUE}
                    aria-label={`${thickness} thickness meter`}
                  />
                </Box>
              ))}
            </Box>
          ),
          type: (
            <Box>
              {['bar', 'circle'].map(type => (
                <Box key={type} margin={{ bottom: 'xsmall' }} align='end'>
                  <Meter
                    type={type}
                    size='small'
                    values={SINGLE_VALUE}
                    aria-label={`${type} meter`}
                  />
                </Box>
              ))}
            </Box>
          ),
          values: (
            <Box>
              <Box margin={{ bottom: 'xsmall' }} align='end'>
                <Meter
                  size='small'
                  values={multipleValues}
                  aria-label='multiple value meter'
                />
              </Box>
              <Box margin={{ bottom: 'xsmall' }} align='end'>
                <Meter
                  round={true}
                  size='small'
                  values={multipleValues}
                  aria-label='multiple value meter'
                />
              </Box>
              <Box margin={{ bottom: 'xsmall' }} align='end'>
                <Meter
                  round={true}
                  type='circle'
                  size='small'
                  values={multipleValues}
                  aria-label='multiple value meter'
                />
              </Box>
            </Box>
          ),
        }}
      />
    );
  }
}
