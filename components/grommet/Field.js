import { Box, Text } from 'grommet';

export default ({
  children, error, focused, label, help,
}) => {
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
  let borderColor;
  if (error) {
    borderColor = 'status-critical';
  } else if (focused) {
    borderColor = 'brand';
  } else {
    borderColor = 'light-3';
  }
  return (
    <Box
      direction='column'
      border={{ color: borderColor, side: 'bottom', size: 'small' }}
      margin={{ vertical: 'xsmall' }}
    >
      {header}
      {children}
    </Box>
  );
};
