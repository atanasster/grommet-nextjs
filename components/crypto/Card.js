import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text } from 'grommet';
import connect from '../../redux/index';


const Card = ({
  title, subTitle, children, responsive, basis, size, ...rest
}) => (
  <Box direction='row'>
    <Box basis={size}>
      <Box
        pad='small'
        elevation='small'
        border='all'
        round='xsmall'
        fill={responsive ? 'horizontal' : undefined}
        margin={{ vertical: 'small' }}
        align='center'
        basis={basis}
        {...rest}
      >
        <Box direction='row' align='center' >
          {React.isValidElement(title) ? title : (
            <Heading level={2} margin='none'>{title}</Heading>
          )}
        </Box>
        {subTitle ? (
          <Box margin='small' fill='horizontal' align='center'>
            {React.isValidElement(subTitle) ? subTitle :
              (<Text size='medium'><strong>{subTitle}</strong></Text>)
            }
          </Box>
        ) : null}
        <Box pad='small' border='top' fill='horizontal'>
          {children}
        </Box>
      </Box>
    </Box>
  </Box>
);

Card.defaultProps = {
  subTitle: undefined,
  responsive: false,
  basis: undefined,
  size: 'large',
};

Card.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  responsive: PropTypes.bool,
  basis: PropTypes.string,
  size: PropTypes.string,
};

const mapStateToProps = state => ({ responsive: state.nav.responsive });
export default connect(mapStateToProps)(Card);
