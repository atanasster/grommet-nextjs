import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Box, Distribution } from 'grommet';
import { Spinning } from 'grommet-controls';
import Coin, { FormattedCoinValue, pushCoinPath } from './Coin';
import connect from '../../../redux';
import { marketCapQuery } from '../graphql/coins';


class MarketCapDistribution extends Component {
  onClickBackground = (e, item) => {
    const { currency, exchange } = this.props;
    e.preventDefault();
    pushCoinPath({
      symbol: item.symbol,
      toSymbol: currency,
      exchange,
    });
  };

  render() {
    const { data: { loading, marketCap }, currency, responsive } = this.props;
    if (loading) {
      return (
        <Box full='horizontal' align='center' pad='large'>
          <Spinning />
        </Box>
      );
    }
    const values = marketCap.map((item, index) => (
      {
        ...item,
        value: item.price * item.available_supply,
        index,
      }
    ));
    return (
      <Distribution values={values}>
        {(item) => {
          const colors = [
            'brand', 'accent-1', 'accent-2', 'neutral-1', 'neutral-2', 'neutral-3', 'status-ok', 'status-warning',
          ];
          const colorIdx = item.index % colors.length;
          const smallCap = responsive || item.index > 4;
          return (
            <Box
              background={colors[colorIdx]}
              border='all'
              fill={true}
              pad={smallCap ? null : 'small'}
              onClick={e => this.onClickBackground(e, item)}
            >
              <Coin
                level={3}
                coin={item.coin}
                toCoin={{ symbol: currency }}
                border={null}
                short={smallCap}
              />
              <FormattedCoinValue
                value={item.value}
                large={true}
                level={smallCap ? 4 : 2}
                justify='start'
                coin={{ symbol: currency }}
              />
            </Box>
          );
        }}
      </Distribution>
    );
  }
}

MarketCapDistribution.propTypes = {
  currency: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
};


const mapStateToProps = state => ({
  responsive: state.nav.responsive,
});


export default graphql(marketCapQuery, {
  options: props => ({
    variables: {
      currency: props.currency.toLowerCase(),
      start: 0,
      limit: 25,
    },
  }),
})(connect(mapStateToProps)(MarketCapDistribution));
