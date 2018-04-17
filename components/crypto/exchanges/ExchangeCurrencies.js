import React, { Component } from 'react';
import { Box, Text } from 'grommet';
import { graphql } from 'react-apollo';
import connect from '../../../redux';
import CardScroll from '../CardScroll';
import Coin, { CoinPath } from '../coins/Coin';
import Card from '../Card';
import PagingTable from '../../grommet-table';
import { exchangeMarketsQuery } from '../graphql/exchanges';

class ExchangeCurrencies extends Component {
  renderItem = (label, value) => (
    <Box direction='row' responsive={false}>
      <Text >{label}:</Text>
      <Text >{value || 'N/A'}</Text>
    </Box>
  );

  renderCountries = (countries) => {
    if (typeof countries === 'string') {
      return this.renderItem('Country', countries);
    }
    return this.renderItem('Countries', countries.join());
  };
  renderCurrencyPairs(currency) {
    const { data: { exchange } } = this.props;
    const pairs = exchange.markets.filter(market => market.base === currency);
    return (
      <PagingTable
        data={pairs}
        columns={[
          {
            accessor: 'quote',
            Header: 'Symbol',
            Cell: props => (
              <CoinPath symbol={currency} toSymbol={props.value} exchange={exchange.name}>
                {props.value}
              </CoinPath>),
          }, {
            accessor: 'maker',
            Header: 'Maker',
            decorations: {
              cell: {
                align: 'end',
              },
            },
          }, {
            accessor: 'taker',
            Header: 'Taker',
            decorations: {
              cell: {
                align: 'end',
              },
            },
          },
        ]}
      />
    );
  }
  render() {
    const { data: { exchange }, defaultCurrency } = this.props;
    let currencies;
    if (exchange && exchange.currencies) {
      currencies = exchange.currencies.map(currency => (
        <Card
          key={`curr${currency.code}`}
          title={(
            <Coin
              coin={currency.coin}
              toCoin={{ symbol: defaultCurrency }}
              exchange={exchange.name}
            />
            )}
          subTitle={`precision: ${currency.precision}`}
        >
          {this.renderCurrencyPairs(currency.code)}
        </Card>
      ));
    }
    return (
      <CardScroll>
        {currencies}
      </CardScroll>
    );
  }
}

const mapStateToProps = state =>
  ({
    defaultCurrency: state.settings.defaultCurrency,
  });

export default graphql(exchangeMarketsQuery, {
  options: props => ({ variables: { exchange: props.exchange } }),
})(
  connect(mapStateToProps)(ExchangeCurrencies)
);
