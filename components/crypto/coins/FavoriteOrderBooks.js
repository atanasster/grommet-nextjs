import React from 'react';
import { Box } from 'grommet';
import connect from '../../../redux';
import CardScroll from '../CardScroll';
import OrderBookCard from './OrderBookCard';

const FavoriteOrderBooks = ({ favCoins, exchange }) => {
  const cards = favCoins.map((pair, index) => (
    <OrderBookCard
      key={`order_book_${index}`}
      symbol={pair.symbol}
      toSymbol={pair.toSymbol}
      exchange={exchange}
    />));
  return (
    <Box margin={{ bottom: 'xsmall' }} pad='xsmall' align='center'>
      <CardScroll>
        {cards}
      </CardScroll>
    </Box>
  );
};

const mapStateToProps = state => ({
  favCoins: state.settings.favCoins,
});

export default connect(mapStateToProps)(FavoriteOrderBooks);
