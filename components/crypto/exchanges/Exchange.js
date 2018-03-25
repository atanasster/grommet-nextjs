import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Box, Image, Heading } from 'grommet';
import RoutedAnchor from '../RoutedAnchor';
import { exchangeInfoQuery } from '../graphql/exchanges';

export const CountryFlag = ({ code }) => (
  <div>{code}</div>
);


export const Country = ({ code, name = 'all countries', level = 4 }) => (
  <Box direction='row' align='center' pad={{ horizontal: 'small' }}>
    <CountryFlag code={code} />
    <Box pad={{ horizontal: 'small' }}>
      <Heading margin='xsmall' level={level}>{name}</Heading>
    </Box>
  </Box>
);

export const ExchangeCountries = ({ countries }) => (
  countries.map(code => (
    <Box key={`country_${code}`} margin={{ horizontal: 'xsmall' }} border='all' alignSelf='center'>
      <CountryFlag code={code} />
    </Box>
  ))
);


export const ConnectedExchange = ({
  level, exchange, aggregatedExchange, ...rest
}) => {
  if (!exchange) {
    return null;
  }
  let image;
  if (exchange) {
    image = (
      <Image
        src={exchange.logo}
        style={{
          height: level > 2 ? '24px' : '34px',
        }}
      />
    );
  }
  return (
    <Box
      a11yTitle={`View details of ${exchange.name} exchange`}
      direction='row'
      align='center'
      gap='xsmall'
      {...rest}
    >
      {image}
      <RoutedAnchor route='exchange_prices' params={{ exchange: exchange.name }} >
        <Heading level={level} margin='none'><strong>{exchange.name === 'CCCAGG' ? 'Aggregated' : exchange.name}</strong></Heading>
      </RoutedAnchor>
    </Box>
  );
};

ConnectedExchange.defaultProps = {
  level: 4,
  exchange: undefined,
};

ConnectedExchange.propTypes = {
  exchange: PropTypes.object,
  level: PropTypes.number,
};


// eslint-disable-next-line no-unused-vars
const Exchange = ({ exchange: sExchange, data: { exchange }, rest }) => (
  <ConnectedExchange exchange={exchange} {...rest} />
);

Exchange.propTypes = {
  exchange: PropTypes.string.isRequired,
};

export default graphql(exchangeInfoQuery, {
  options: props => ({ variables: { exchange: props.exchange } }),
})(
  Exchange
);

