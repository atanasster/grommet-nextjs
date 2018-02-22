import {
  Box, Button, CheckBox, Heading,
  Paragraph, Text, TextInput,
} from 'grommet';

import Doc from '../components/Doc';

const Field = ({ children, error, label, help }) => {
  let header;
  if (label || help || error) {
    header = (
      <Box
        direction='row'
        justify='between'
        pad={{ horizontal: 'small', top: 'xsmall' }}
      >
        <Text>{label}</Text>
        <Text color={error ? 'status-critical' : 'dark-5'}>{error || help}</Text>
      </Box>
    );
  }
  return (
    <Box
      direction='column'
      border={{ color: 'light-2', side: 'bottom', size: 'small' }}
      margin={{ vertical: 'xsmall' }}
    >
      {header}
      {children}
    </Box>
  );
};

export default () => (
  <Doc
    name='Form'
    text={`Currently, Grommet 2.0 does not provide Form or FormField components.
      Instead, we have a reference on how to build a form
      using the basic Box, Text, and control components.`}
  >
    <Box direction='row' justify='center'>
      <Box basis='medium' margin='large'>
        <form onSubmit={() => {}}>
          <Box>
            <Heading level={2}>Heading With Name</Heading>
            <Paragraph>Paragraph with instructions.</Paragraph>
            <Field label='Label' help='help' error='error'>
              <TextInput plain={true} placeholder='Place holder' />
            </Field>
            <Field label='Label' help='help'>
              <TextInput plain={true} placeholder='Place holder' />
            </Field>
            <Field>
              <Box pad='small'>
                <CheckBox label='CheckBox' />
              </Box>
            </Field>
            <Box margin={{ top: 'large' }}>
              <Button primary={true} type='submit' label='Submit' />
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  </Doc>
);
