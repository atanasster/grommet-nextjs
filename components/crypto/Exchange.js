import React from 'react';
import PropTypes from 'prop-types';
import { Box, Image, Heading } from 'grommet';
import RoutedAnchor from '../RoutedAnchor';
import connect from '../../redux';

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


const Exchange = ({
  level, exchange, aggregatedExchange, border, justify,
}) => {
  if (!exchange) {
    return null;
  }
  const exchangeName = exchange.code === aggregatedExchange ? 'Aggregated' : exchange;
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
      a11yTitle={`View details of ${exchangeName} exchange`}
      border={border}
      direction='row'
      align='center'
      justify={justify}
      gap='xsmall'
    >
      {image}
      <RoutedAnchor path={`/crypto-grommet/exchanges/prices/${exchange.code}`}>
        <Heading level={level} margin='none'><strong>{exchangeName}</strong></Heading>
      </RoutedAnchor>
    </Box>
  );
};

const mapStateToProps = state => ({
  aggregatedExchange: state.settings.aggregatedExchange,
});


Exchange.defaultProps = {
  level: 4,
  border: undefined,
  exchange: undefined,
};

Exchange.propTypes = {
  exchange: PropTypes.object,
  level: PropTypes.number,
  border: PropTypes.string,
};

export default connect(mapStateToProps)(Exchange);
