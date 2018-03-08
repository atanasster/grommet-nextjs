import { Box, Diagram, Stack } from 'grommet';
import doc from 'grommet/components/Diagram/doc';

import Doc from '../components/Doc';

const desc = doc(Diagram).toJSON();

const Node = ({ id, ...rest }) => (
  <Box
    id={id}
    basis='xxsmall'
    margin='small'
    pad='medium'
    round='small'
    background='neutral-1'
    {...rest}
  />
);

const connection = (fromTarget, toTarget, { color, ...rest } = {}) => ({
  fromTarget, toTarget, color: (color || 'accent-1'), thickness: 'xsmall', round: true, type: 'rectilinear', ...rest,
});

const Example = () => (
  <Stack guidingChild={1}>
    <Diagram
      connections={[
        connection('1', '2'),
        connection('6', '7'),
        connection('3', '8'),
      ]}
    />
    <Box>
      <Box direction='row'>
        {[1, 2, 3].map(id => (
          <Node key={id} id={id} />
        ))}
      </Box>
      <Box direction='row'>
        {[4, 5].map(id => (
          <Node key={id} id={id} background='neutral-2' />
        ))}
      </Box>
      <Box direction='row'>
        {[6, 7, 8].map(id => (
          <Node key={id} id={id} background='neutral-3' />
        ))}
      </Box>
    </Box>
    <Diagram
      connections={[
        connection('3', '5', { color: 'accent-2' }),
        connection('4', '1', { color: 'accent-2' }),
        connection('4', '7', { color: 'accent-2' }),
      ]}
    />
  </Stack>
);

class DiagramDoc extends React.Component {
  render() {
    return (
      <Doc
        name='Diagram'
        desc={desc}
        examples={{
          connections: <Example />,
        }}
      />
    );
  }
}

export default DiagramDoc;
