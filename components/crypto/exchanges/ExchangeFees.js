import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import numeral from 'numeral';
import { Close, Checkmark } from 'grommet-icons';
import { Box, Text } from 'grommet';
import connect from '../../../redux';
import Card from '..//Card';
import Coin from '../coins/Coin';
import CardScroll from '../CardScroll';
import PagingTable from '../../grommet-table';

import { exchangeFeesQuery } from '../graphql/exchanges';

const redIcon = {
  icon: {
    color: 'red',
  },
};

const greenIcon = {
  icon: {
    color: 'green',
  },
};

function yesNoIcon(value) {
  return value ? <Checkmark theme={greenIcon} /> : <Close theme={redIcon} />;
}

class ExchangeFees extends Component {
  renderFundingFees() {
    const { data: { exchange }, exchange: exchangeName, defaultCurrency } = this.props;

    if (exchange && exchange.fees && exchange.fees.funding) {
      const { funding } = exchange.fees;
      const fees = funding.deposit.map(fee =>
        ({ symbol: fee.symbol, coin: fee.coin, deposit: fee.fee }));
      if (funding.withdraw) {
        funding.withdraw.forEach((fee) => {
          const deposit = fees.find(item => (item.symbol === fee.symbol));
          if (deposit) {
            deposit.withdraw = fee.fee;
          } else {
            fees.push({ symbol: fee.symbol, withdraw: fee.fee, coin: fee.coin });
          }
        });
      }
      const table = (
        <PagingTable
          decorations={{
            cell: {
              align: 'end',
            },
          }}
          defaultPageSize={50}
          data={fees}
          columns={[
            {
              Header: 'Symbol',
              accessor: 'symbol',
              minWidth: 300,
              decorations: {
                cell: {
                  align: 'start',
                },
              },
              Cell: props => (
                <Coin
                  coin={props.original.coin}
                  toCoin={{ symbol: defaultCurrency }}
                  exchange={exchangeName}
                  level={4}
                  border={null}
                />),
            },
            {
              Header: 'Deposit',
              accessor: 'deposit',
              Cell: props => (numeral(props.value).format('0,0.0000')),
            }, {
              Header: 'Withdraw',
              accessor: 'withdraw',
              Cell: props => (numeral(props.value).format('0,0.0000')),
            },
          ]}
        />);
      return (
        <Card
          title='Funding fees'
          subTitle={(
            <Box direction='row' justify='between' pad={{ vertical: 'small' }}>
              <Box direction='row' align='center' margin={{ horizontal: 'small' }}>
                <Text>Percentage:</Text>{yesNoIcon(exchange.fees.funding.percentage)}
              </Box>
              <Box direction='row' justify='between' margin={{ horizontal: 'small' }}>
                <Text>Tier based:</Text>{yesNoIcon(exchange.fees.funding.tierBased)}
              </Box>
            </Box>)}
        >
          {table}
        </Card>
      );
    }
    return null;
  }

  renderTradingFees() {
    const { data: { exchange } } = this.props;
    if (exchange && exchange.fees && exchange.fees.trading) {
      const { tiers } = exchange.fees.trading;
      let table;
      if (tiers) {
        const data = tiers.maker ? tiers.maker.map(fee =>
          ({ maker_tier: fee.tier, maker_fee: fee.fee })) : [];
        if (tiers.taker) {
          tiers.taker.forEach((item, index) => {
            if (data.length < index) {
              data[index].push({});
            }
            data[index].taker_tier = item.tier;
            data[index].taker_fee = item.fee;
          });
        }
        table = (
          <PagingTable
            decorations={{
              cell: {
                align: 'end',
              },
            }}
            data={data}
            columns={[
              {
                Header: 'Maker',
                columns: [
                  { Header: 'Tier', accessor: 'maker_tier' },
                  { Header: 'Fee', accessor: 'maker_fee', Cell: props => (numeral(props.value).format('0,0.0000')) },
                ],
              },
              {
                Header: 'Taker',
                columns: [
                  { Header: 'Tier', accessor: 'taker_tier' },
                  { Header: 'Fee', accessor: 'taker_fee', Cell: props => (numeral(props.value).format('0,0.0000')) },
                ],
              },
            ]}
          />);
      }
      return (
        <Card
          title='Trading fees'
          subTitle={(
            <Box>
              <Box direction='row' fill='horizontal' pad={{ vertical: 'small' }}>
                <Box direction='row' align='center' margin={{ horizontal: 'small' }}>
                  <Text>Percentage:</Text>
                  {yesNoIcon(exchange.fees.trading.percentage)}
                </Box>
                <Box direction='row' align='center' margin={{ horizontal: 'small' }}>
                  <Text>Tier based:</Text>
                  {yesNoIcon(exchange.fees.trading.tierBased)}
                </Box>
              </Box>
            </Box>
          )}
        >
          {table}
        </Card>
      );
    }
    return null;
  }

  render() {
    return (
      <CardScroll >
        {this.renderFundingFees()}
        {this.renderTradingFees()}
      </CardScroll>
    );
  }
}


const mapStateToProps = state => (
  {
    defaultCurrency: state.settings.defaultCurrency,
  }
);

export default graphql(exchangeFeesQuery, {
  options: props => ({ variables: { exchange: props.exchange } }),
})(
  connect(mapStateToProps)(ExchangeFees)
);
