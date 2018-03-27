import React from 'react';
import LinksMenu from '../LinksMenu';


export default ({
  activeItem, symbol, toSymbol, exchange,
}) => {
  const coinsMenu = [
    {
      route: 'coin_info',
      params: { symbol, toSymbol, exchange },
      label: 'Info',
      a11yTitle: `Information about ${symbol}`,
      plain: true,
    },
    {
      route: 'coin_order_books',
      params: { symbol, toSymbol, exchange },
      label: 'Order books',
      a11yTitle: `Order books analysis for ${symbol}`,
      plain: true,
    },
    {
      route: 'coin_charts',
      params: { symbol, toSymbol, exchange },
      label: 'Charts',
      a11yTitle: `Technical charts for ${symbol}`,
      plain: true,
    },

  ];
  return (
    <LinksMenu items={coinsMenu} activeItem={activeItem} />
  );
};
