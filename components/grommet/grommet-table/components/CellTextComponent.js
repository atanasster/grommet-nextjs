import React from 'react';
import { Text } from 'grommet';

export const extractTextProps = ({
  value, color, size, truncate, textAlign, ...rest
}) => (rest);


export const collectTextProps = ({
  value, color, size, truncate, textAlign,
}) => ({
  value, color, size, truncate, textAlign,
});

export default ({ value, ...rest }) => (
  <Text
    {...collectTextProps(rest)}
  >
    {value}
  </Text>
);
