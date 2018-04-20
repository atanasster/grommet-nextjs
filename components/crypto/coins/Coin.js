import React from 'react';
import PropTypes from 'prop-types';
import { Box, Image, Text, Heading } from 'grommet';
import numeral from 'numeral';
import RoutedAnchor from '../RoutedAnchor';
import connect from '../../../redux/index';
import { Router } from '../../../utils/routes';

export const FormattedCoinValue = ({
  value, toSymbol, coin, large, justify, level,
}) => {
  let format = (coin.fullName && !large) ? '0,0.0000' : '0,0.00';
  if (large) {
    format = `${format}a`;
  }
  return (
    <Box direction='row' align='baseline' gap='xsmall' justify={justify}>
      <Heading margin='none' level={level}>
        {numeral(value).format(format)}
      </Heading>
      <Text size='xsmall'>
        {toSymbol}
      </Text>

    </Box>
  );
};

FormattedCoinValue.defaultProps = {
  large: false,
  justify: 'end',
  level: 4,
};

FormattedCoinValue.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  coin: PropTypes.object.isRequired,
  large: PropTypes.bool,
  justify: PropTypes.string,
  level: PropTypes.number,
};


export const valueToColor = (value) => {
  if (value > 0) {
    return 'status-ok';
    // eslint-disable-next-line no-bitwise
  } else if (value < 0) {
    return 'status-critical';
  }
  return 'status-warning';
};


export const ColoredPercentChange = ({ value, level = 4 }) => (
  <Heading margin='none' level={level} color={valueToColor(value)} >
    {numeral(value).format('0,0.00%')}
  </Heading>
);

export const CoinPath = ({
  symbol, toSymbol, exchange, children,
}) => (
  <RoutedAnchor route='coin_info' params={{ symbol, toSymbol, exchange }} >
    {children}
  </RoutedAnchor>
);

export const pushCoinPath = ({ symbol, toSymbol, exchange }) => {
  Router.pushRoute('coin_info', { symbol, toSymbol, exchange });
};
const Coin = (
  {
    coin, exchange, defaultExchange, toCoin, level, aggregatedExchange, short,
  }
) => {
  let coinName;
  if (coin) {
    coinName = (coin.fullName && !short) ? coin.fullName : coin.symbol;
  } else {
    coinName = '';
  }
  const textLevel = short ? 4 : level;
  const title = <Heading level={textLevel} margin='none'>{coinName}</Heading>;
  const link = coin && coin.fullName ? (
    <CoinPath
      symbol={coin.symbol}
      toSymbol={toCoin.symbol}
      exchange={exchange === aggregatedExchange ? defaultExchange : exchange}
    >
      {title}
    </CoinPath>
  ) : title;
  let image;
  if (coin && coin.imageUrl && !short) {
    image = (
      <Image
        src={coin.imageUrl}
        style={{ width: textLevel > 2 ? '24px' : '34px', height: textLevel > 2 ? '24px' : '34px' }}
      />
    );
  }
  return (
    <Box
      a11yTitle={`View details of ${coinName} coin`}
      gap='small'
      direction='row'
      align='center'
      flex={false}
      responsive={false}
    >
      {image}
      {link}
    </Box>
  );
};


const mapStateToProps = (state, props) => ({
  defaultExchange: state.settings.defaultExchange,
  aggregatedExchange: state.settings.aggregatedExchange,
  exchange: props.exchange || state.settings.defaultExchange,
});


const ConnectedCoin = connect(mapStateToProps)(Coin);

Coin.defaultProps = {
  level: 3,
  coin: undefined,
  toCoin: undefined,
  exchange: undefined,
  short: false,
};

Coin.propTypes = {
  coin: PropTypes.object,
  toCoin: PropTypes.object,
  exchange: PropTypes.string,
  level: PropTypes.number,
  short: PropTypes.bool,
};

export default ConnectedCoin;


export const CoinToCoin = ({ coin, toCoin, exchange }) => (
  <Box align='center' fill='hoizontal'>
    <ConnectedCoin
      coin={coin}
      toCoin={toCoin}
      exchange={exchange}
    />
    <ConnectedCoin
      coin={toCoin}
      toCoin={coin}
      exchange={exchange}
      level={4}
    />
  </Box>
);

CoinToCoin.propTypes = {
  coin: PropTypes.object.isRequired,
  toCoin: PropTypes.object.isRequired,
  exchange: PropTypes.string.isRequired,
};

