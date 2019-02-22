import React from 'react';
import PropTypes from 'prop-types';
import JSONPretty from 'react-json-pretty';
import { Box, DropButton, Heading } from 'grommet';
import { base } from 'grommet/themes';

const getProp = (obj, path) => {
  const parts = path.split('-');
  if (parts.length >= 1 && obj[parts[0]] !== undefined) {
    return getProp(obj[parts[0]], parts.slice(1).join('-'));
  }
  return obj;
};

const BaseProperty = ({ path }) => {
  const [open] = React.useState();
  const obj = getProp(base, path);
  return (
    <DropButton
      label='base theme'
      open={open}
      dropAlign={{ top: 'bottom', right: 'right' }}
      dropContent={
        <Box pad='small'>
          <Box pad={{ bottom: 'medium' }} border='bottom' flex={false}>
            <Heading level={3} margin='none'>
              {'value in "base" theme'}
            </Heading>
          </Box>
          <JSONPretty json={obj} />
        </Box>
        }
    />
  );
};

BaseProperty.propTypes = {
  path: PropTypes.string.isRequired,
};

export default BaseProperty;
