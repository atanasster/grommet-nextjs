import React from 'react';
import { graphql, compose } from 'react-apollo';
import { Box, WorldMap as GrommetWordMap, Image } from 'grommet';
import RoutedAnchor from '../RoutedAnchor';
import SideLayer from '../../SideLayer';
import allCountries from '../../../utils/countries';
import { ExchangeCountries } from './Exchange';
import { GrommetTable } from '../../grommet-table/index';
import { allExchangesQuery } from '../graphql/exchanges';

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

class WorldMap extends React.Component {
  state = {
    worldContinent: undefined,
    worldExchanges: undefined,
    continentExchanges: undefined,
    continent: undefined,
  };

  exchangesByName(name) {
    const { allExchanges } = this.props.data;
    const continent = continents.find(c => (c.name === name));
    if (allExchanges) {
      const exchanges = Object.keys(allExchanges).map(key => allExchanges[key]);
      const continentExchanges = [];
      if (!this.countries) {
        const uniqueCountries = [...new Set(exchanges.reduce((arr, ex) =>
          ([...arr, ...ex.countries]), [])),
        ];
        this.countries = Object.keys(allCountries).filter(c =>
          (uniqueCountries.indexOf(c)) !== -1).map(c => ({ ...allCountries[c], code: c }));
      }

      this.countries.filter(c => (c.continent === continent.code))
        .forEach((c) => {
          exchanges.filter(e => e.countries.findIndex(
            ec => (ec === c.code)
          ) !== -1).forEach((e) => {
            if (continentExchanges.findIndex(ex => ex.id === e.id) === -1) {
              continentExchanges.push(e);
            }
          });
        });
      return { continentExchanges, continent };
    }
    return null;
  }

  onContinentClick = (name) => {
    const exchanges = this.exchangesByName(name);
    if (exchanges) {
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
    }
  };

  onContinentHover = (hover, name) => {
    if (hover) {
      const exchanges = this.exchangesByName(name);
      if (exchanges) {
        this.setState({
          worldContinent: name,
          worldExchanges: exchanges.continentExchanges.length,
        });
      }
    } else {
      this.setState({ worldContinent: undefined });
    }
  };

  render() {
    const {
      worldContinent, worldExchanges, continentExchanges, continent,
    } = this.state;
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
                    <RoutedAnchor path={`/exchanges/prices/${props.original.name}`}>
                      <Image src={props.original.logo} />
                    </RoutedAnchor>),
                }, {
                  accessor: 'name',
                  Cell: props => (
                    <RoutedAnchor path={`/exchanges/prices/${props.original.name}`}>
                      {props.original.name}
                    </RoutedAnchor>),
                }, {
                  Cell: props => (
                    <Box direction='row'>
                      <ExchangeCountries countries={props.original.countries} />
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
      <Box>
        <Box direction='row'>
          <GrommetWordMap
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
    );
  }
}


export default compose(
  graphql(allExchangesQuery),
)(WorldMap);

