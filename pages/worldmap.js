import { Box, WorldMap } from 'grommet';
import { doc } from 'grommet/components/WorldMap/doc';

import Doc from '../components/Doc';

const desc = doc(WorldMap).toJSON();

class WorldMapDoc extends React.Component {
  render() {
    return (
      <Doc
        name='WorldMap'
        desc={desc}
        example={(
          <Box flex={true} justify='center' align='center'>
            <WorldMap
              color='neutral-1'
              continents={[
                {
                  name: 'Africa',
                  color: 'accent-1',
                  onClick: name => alert(name),
                },
              ]}
              onSelectPlaceX={(lat, lon) => alert(lat, lon)}
              places={[
                {
                  name: 'Sydney',
                  location: [-33.8830555556, 151.216666667],
                  color: 'accent-2',
                  onClick: name => alert(name),
                },
              ]}
              selectColor='accent-2'
            />
          </Box>
        )}
      />
    );
  }
}

export default WorldMapDoc;
