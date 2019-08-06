import React from 'react';
import { Box, Heading } from 'grommet';

interface TitleProps {
  label: string,
  level?: '1' | '2' | '3' | '4' | '5' | '6' | '1' | '2' | '3' | '4' | '5' | '6';
}
const Title: React.FC<TitleProps> = ({ label, level, children }) => (
  <Box
    direction='row'
    justify='between'
    margin={{
      bottom: 'large', top: 'small',
    }}
    align='center'
  >
    <Heading level={level} margin='none'>
      <strong>{label}</strong>
    </Heading>
    {children}
  </Box>
);

Title.defaultProps = {
  label: 'Title',
  level: '3',
};

export default Title;
