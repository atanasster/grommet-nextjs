import { Box, Anchor, Paragraph, Heading } from 'grommet';
import App from '../../components/crypto/App';
import withData from '../../apollo/withData';

export default withData(() => (
  <App title='About'>
    <Box gap='small' fill='horizontal'>
      <Box>
        <Heading level={1}>
          <strong>Site and source code</strong>
        </Heading>
        <Paragraph size='large'>
          <Anchor
            label='Financeboards'
            href='https://financeboards.com'
            target='_blank'
          />
          . Predictive models for all your financial information in configurable dashboards.
        </Paragraph>
      </Box>
      <Box>
        <Heading level={1}>
          <strong>User interface library</strong>
        </Heading>
        <Paragraph size='large'>
          <Anchor
            label='Grommet v2'
            href='https://v2.grommet.io/'
            target='_blank'
          />. The most advanced open source UX framework for enterprise applications.
        </Paragraph>
      </Box>
      <Box>
        <Heading level={1}>
          <strong>Pricing REST and socket API</strong>
        </Heading>
        <Paragraph size='large'>
          <Anchor
            label='CryptoCompare'
            href='https://www.cryptocompare.com/api/'
            target='_blank'
          />
          . Interactive platform where you can discuss the latest
          Crypto trends and monitor all markets streaming in real time.
        </Paragraph>
      </Box>
      <Box>
        <Heading level={1}>
          <strong>Market exchanges API library</strong>
        </Heading>
        <Paragraph size='large'>
          <Anchor
            label='CCXT – CryptoCurrency eXchange Trading Library'
            href='https://github.com/ccxt/ccxt/wiki'
            target='_blank'
          />
          . JavaScript / Python / PHP cryptocurrency trading library with support
          for more than 90 bitcoin/altcoin exchanges.
        </Paragraph>
      </Box>
      <Box>
        <Heading level={1}>
          <strong>Market Cap API</strong>
        </Heading>
        <Paragraph size='large'>
          <Anchor
            label='CoinMarketCap'
            href=' https://coinmarketcap.com/api/'
            target='_blank'
          />
          . Cryptocurrency Market Capitalizations.
        </Paragraph>
      </Box>
      <Box margin={{ vertical: 'small' }} >
        <Heading level={1}>
          <strong>Advanced charting</strong>
        </Heading>
        <Paragraph size='large'>
          <Anchor
            label='Highcharts'
            href='http://www.highcharts.com'
            target='_blank'
          />
          . JavaScript charting library based on SVG,
          with fallbacks to VML and canvas for old browsers.
        </Paragraph>
      </Box>
    </Box>
  </App>
));
