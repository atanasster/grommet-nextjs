import React, { Component } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { Box, Anchor, Text } from 'grommet';
import { shortDate } from 'grommet-controls/utils/moment';
import Card from '../Card';
import Table from '../../grommet-table';
import Coin from './Coin';


export default class ICOCard extends Component {
  renderTable() {
    const { coin } = this.props;
    if (coin) {
      const { ICO } = coin;
      console.log(ICO.date);
      const rows = [
        {
          label: 'Blog',
          value: (
            <Anchor href={ICO.blogLink} target='_blank' label={ICO.blogLink} />
          ),
        }, {
          label: 'Web site',
          value: (
            <Anchor href={ICO.websiteURL} target='_blank' label={ICO.websiteURL} />
          ),
        }, {
          label: 'White paper',
          value: (
            <Anchor href={ICO.whitePaperLink} target='_blank' label={ICO.whitePaperLink} />
          ),
        }, {
          label: 'Date',
          value: shortDate(ICO.date),
        }, {
          label: 'End date',
          value: ICO.endDate ? shortDate(ICO.endDate) : 'N/A',
        }, {
          label: 'Features',
          value: (
            <Box>
              {ICO.features.map((item, index) => (
                <Text key={`feature_${index}`} >{item}</Text>
              ))}
            </Box>
          ),
        }, {
          label: 'Token type',
          value: ICO.tokenType,
        }, {
          label: 'Funding target',
          value: ICO.fundingTarget,
        }, {
          label: 'Payment',
          value: (
            <Box gap='small'>
              {ICO.paymentMethod.map((item, index) => (
                <Coin key={`payment_${index}`} level={4} symbol={item.symbol} border={null} />
              ))}
            </Box>
          ),
        }, {
          label: 'Start price',
          value: ICO.startPrice,
        }, {
          label: 'Start crypto',
          value: ICO.startPriceCurrency,
        }, {
          label: 'Funds raised',
          value: ICO.fundsRaisedList,
        }, {
          label: '% for investors',
          value: ICO.tokenPercentageForInvestors,
        }, {
          label: 'Reserve split',
          value: (
            <Box>
              {ICO.tokenReserveSplit.map((item, index) => (
                <Text key={`reserve_${index}`} >{item}</Text>
              ))}
            </Box>
          ),
        }, {
          label: 'Token supply',
          value: ICO.tokenSupply,
        }, {
          label: 'Supply post ICO',
          value: ICO.tokenSupplyPostICO,
        }, {
          label: 'Funding cap',
          value: ICO.fundingCap,
        }, {
          label: 'Funds raised (USD)',
          value: numeral(ICO.fundsRaisedUSD).format('$0,0.00'),
        }, {
          label: 'Jurisdiction',
          value: ICO.jurisdiction,
        }, {
          label: 'Legal advisers',
          value: ICO.legalAdvisers,
        }, {
          label: 'Legal form',
          value: ICO.legalForm,
        },
      ];
      return (
        <Box full='horizontal'>
          <Table
            data={rows}
            sortable={false}
            resizable={false}
            columns={[
              { accessor: 'label', width: 200 },
              { accessor: 'value' },
            ]}
          />
        </Box>
      );
    }
    return null;
  }

  render() {
    const { coin } = this.props;
    const ico = coin && coin.ICO ? coin.ICO : null;
    return (
      <Card
        basis='large'
        title={<Coin symbol={coin && coin.symbol} />}
        subTitle={`ICO ${ico && ico.status}`}
      >
        <Box pad='small'>
          {this.renderTable()}
        </Box>
      </Card>
    );
  }
}

ICOCard.defaultProps = {
  coin: undefined,
};


ICOCard.propTypes = {
  coin: PropTypes.object,
};

