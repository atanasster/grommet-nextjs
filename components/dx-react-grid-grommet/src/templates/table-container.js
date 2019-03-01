import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'grommet';

export const TableContainer = styled(Box)`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;
`;


TableContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

TableContainer.defaultProps = {
  className: undefined,
};
