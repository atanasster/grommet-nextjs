import { Box, Heading, WorldMap, Image } from 'grommet';
import App from '../../components/App';
import exchangesList from '../../server/models/exchanges';
import RoutedAnchor from '../../components/RoutedAnchor';
import SideLayer from '../../components/SideLayer';
import connect from '../../redux';
import allCountries from '../../utils/countries';
import Exchange from '../../components/crypto/Exchange';
import { GrommetTable } from '../../components/grommet-table/index';

const continents = [
  {
    name: 'Africa',
    color: 'accent-1',
    code: 'AF',
  },
  {
    name: 'Australia',
    color: 'accent-2',
    code: 'OC',
  },
  {
    name: 'Asia',
    color: 'neutral-1',
    code: 'AS',
  },
  {
    name: 'Europe',
    color: 'neutral-2',
    code: 'EU',
  },
  {
    name: 'North America',
    color: 'neutral-3',
    code: 'NA',
  },
  {
    name: 'South America',
    color: 'status-warning',
    code: 'SA',
  },
];

class Home extends React.Component {
  state = {
    worldContinent: undefined,
    worldExchanges: undefined,
    continentExchanges: undefined,
    continent: undefined,
  };
  static defaultProps = {
    countries: [],
  };
  static async getInitialProps() {
    const exchanges = exchangesList;
    console.log(exchangesList);
    const uniqueCountries = [...new Set(exchanges.reduce((arr, ex) =>
      ([...arr, ...ex.countries]), [])),
    ];
    return {
      exchanges,
      countries: Object.keys(allCountries).filter(c =>
        (uniqueCountries.indexOf(c)) !== -1).map(c => ({ ...allCountries[c], code: c })),
    };
  }

  exchangesByName(name) {
    const { exchanges: allExchanges, countries } = this.props;
    const continent = continents.find(c => (c.name === name));
    const exchanges = Object.keys(allExchanges).map(key => allExchanges[key]);
    const continentExchanges = [];
    countries.filter(c => (c.continent === continent.code))
      .forEach((c) => {
        exchanges.filter(e => e.countries.findIndex(ec => (ec === c.code)) !== -1).forEach((e) => {
          if (continentExchanges.findIndex(ex => ex.id === e.id) === -1) {
            continentExchanges.push(e);
          }
        });
      });
    return { continentExchanges, continent };
  }

  onContinentClick = (name) => {
    const exchanges = this.exchangesByName(name);
    exchanges.continentExchanges.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (b.name > a.name) {
        return -1;
      }
      return 0;
    });
    this.setState(exchanges);
  };

  onContinentHover = (hover, name) => {
    if (hover) {
      const exchanges = this.exchangesByName(name);
      this.setState({ worldContinent: name, worldExchanges: exchanges.continentExchanges.length });
    } else {
      this.setState({ worldContinent: undefined });
    }
  };

  render() {
    const {
      worldContinent, worldExchanges, continentExchanges, continent,
    } = this.state;
    const { responsive } = this.props;
    let layer;
    if (continentExchanges) {
      layer = (
        <SideLayer
          onClose={() => this.setState({ continentExchanges: undefined })}
          heading={continent.name}
        >
          <Box basis='large'>
            <GrommetTable
              defaultPageSize={50}
              data={continentExchanges}
              columns={[
                {
                  Cell: props => (
                    <RoutedAnchor path={`/crypto-grommet/exchanges/prices/${props.original.name}`}>
                      <Image src={props.original.logo} />
                    </RoutedAnchor>),
                }, {
                  accessor: 'name',
                  Cell: props => (
                    <RoutedAnchor path={`/crypto-grommet/exchanges/prices/${props.original.name}`}>
                      {props.original.name}
                    </RoutedAnchor>),
                }, {
                  Cell: props => (
                    <Box direction='row'>
                      <Exchange countries={props.original.countries} />
                    </Box>),
                },
              ]}
            />
          </Box>
        </SideLayer>
      );
    }
    const continentHover = worldContinent ? (
      `${worldExchanges} exchanges in ${worldContinent}, click to see more...`
    ) : null;
    return (
      <App title='crypto-grommet'>
        <Box align='center' style={{ height: responsive ? '430px' : undefined }}>
          <Heading level={1}>
            <strong>Exchanges by continent</strong>
          </Heading>
          <Box direction='row'>
            <WorldMap
              style={{ width: 'auto' }}
              continents={continents.map(c => (
                {
                  ...c,
                  onClick: this.onContinentClick,
                  onHover: hover => this.onContinentHover(hover, c.name),
                }))}
              selectColor='accent-2'
            />

          </Box>
          <Box align='end' basis='xsmall'>
            {continentHover}
          </Box>
          {layer}
        </Box>
        <Box pad='small' align='center' border='top'>
          <Heading level={1}>
            <strong>Prices</strong>
          </Heading>
        </Box>
      </App>
    );
  }
}

const mapStateToProps = state => ({
  aggregatedExchange: state.settings.aggregatedExchange,
  defaultExchange: state.settings.defaultExchange,
});

export default connect(mapStateToProps)(Home);
