import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import ReactHighstock from 'react-highcharts/ReactHighstock';
import { Box } from 'grommet';
import { priceHistoryQuery } from '../graphql/coins';


class TechnicalAnalysis extends Component {
  renderChart() {
    const { priceHistory: { priceHistory } } = this.props;
    const { symbol, toSymbol, exchange } = this.props;
    const data = priceHistory || [];
    const groupingUnits = [[
      'week',
      [1],
    ], [
      'month',
      [1, 2, 3, 4, 6],
    ]];
    const ohlc = data.map(item => (
      [item.time * 1000, item.open, item.high, item.low, item.close]));
    const volumeTo = data.map(item => (
      [item.time * 1000, item.volumeto]
    ));
    const config = {
      chart: {
        height: '500px',
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        shared: true,
      },
      rangeSelector: {
        enabled: false,
        selected: 1,
      },
      title: {
        text: `${symbol}/${toSymbol} Historical`,
      },
      subtitle: {
        text: exchange,
      },
      legend: {
        enabled: true,
      },
      yAxis: [{
        labels: {
          align: 'right',
          x: -3,
        },
        title: {
          text: `${symbol}/${toSymbol}`,
        },
        height: '60%',
        lineWidth: 2,
        resize: {
          enabled: true,
        },
      }, {
        labels: {
          align: 'right',
          x: -3,
        },
        title: {
          text: `${toSymbol}`,
        },
        top: '65%',
        height: '35%',
        offset: 0,
        lineWidth: 2,
      },
      ],
      plotOptions: {
        candlestick: {
          color: 'red',
          upColor: 'green',
        },
      },
      series: [{
        type: 'candlestick',
        name: `${symbol}/${toSymbol}`,
        id: 'ohlc',
        data: ohlc,
        dataGrouping: {
          units: groupingUnits,
        },
      }, {
        type: 'column',
        name: `Volume ${toSymbol}`,
        id: 'volume',
        data: volumeTo,
        yAxis: 1,
        color: 'black',
        dataGrouping: {
          units: groupingUnits,
        },
      },
      ],
    };
    return (
      <ReactHighstock
        isPureConfig={true}
        config={config}
        domProps={{ style: { width: '100%' } }}
      />
    );
  }

  render() {
    return (
      <Box direction='row' fill='horizontal'>
        {this.renderChart()}
      </Box>
    );
  }
}

TechnicalAnalysis.defaultProps = {
  period: undefined,
  points: undefined,
};

TechnicalAnalysis.propTypes = {
  symbol: PropTypes.string.isRequired,
  toSymbol: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  period: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  points: PropTypes.number,
};


export default graphql(priceHistoryQuery, {
  name: 'priceHistory',
  options: props => ({
    variables: {
      symbol: props.symbol,
      toSymbol: props.toSymbol,
      exchange: props.exchange,
      period: props.period,
      limit: props.points,
    },
  }),
})(TechnicalAnalysis);
