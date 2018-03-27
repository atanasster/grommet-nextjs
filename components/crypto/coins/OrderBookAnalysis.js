import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import CardScroll from '../CardScroll';
import { ConnectedOrderBook } from './OrderBookCard';
import { allExchangesQuery, orderBookQuery } from '../graphql/exchanges';
import initApollo from '../../../apollo/initApollo';

class OrderBookAnalysis extends Component {
  state = { cards: [] };

  componentWillReceiveProps(nextProps) {
    const { data: { allExchanges }, symbol, toSymbol } = nextProps;
    if (symbol !== this.props.symbol ||
      toSymbol !== this.props.toSymbol ||
      allExchanges !== this.props.data.allExchanges) {
      this.buildOrderBookCards(nextProps);
    }
  }

  buildOrderBookCards(props) {
    const { data: { allExchanges }, symbol, toSymbol } = props;
    const selected = allExchanges.filter(exchange => (exchange.hasOrderBook));
    const apollo = initApollo();
    const cards = [];
    this.setState({ cards });
    selected.forEach(async (exchange) => {
      const { data } = await apollo.query({
        query: orderBookQuery,
        variables: {
          start: 0, limit: 100, symbol, toSymbol, exchange: exchange.name,
        },
      });
      if (data.orderBook.coin) {
        cards.push({ orderBook: data.orderBook, exchange: exchange.name });
        this.setState({ cards });
      }
    });
  }

  renderSortedCards() {
    const { cards } = this.state;
    const { toSymbol } = this.props;
    return cards.sort((c1, c2) => {
      const a = c1.orderBook;
      const b = c2.orderBook;
      if (!a || !b) {
        if (b) {
          return -1;
        }
        return a ? 1 : 0;
      }
      const aAsks = a.asks;
      const bAsks = b.asks;
      if (aAsks.length === 0 || bAsks.length === 0) {
        return bAsks.length - aAsks.length;
      }
      return aAsks[0].price - bAsks[0].price;
    }).map(card => (
      <ConnectedOrderBook
        key={`${card.orderBook}_${toSymbol}_${card.exchange}`}
        orderBook={card.orderBook}
        toSymbol={toSymbol}
        exchange={card.exchange}
      />
    ));
  }

  render() {
    return (
      <CardScroll>
        {this.renderSortedCards()}
      </CardScroll>
    );
  }
}

OrderBookAnalysis.propTypes = {
  symbol: PropTypes.string.isRequired,
  toSymbol: PropTypes.string.isRequired,
};


export default graphql(allExchangesQuery)(OrderBookAnalysis);
