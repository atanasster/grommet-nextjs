import React from 'react';
import { Box } from 'grommet';
import { Colors, materialColors, uiColors, basicColors } from 'grommet-controls';
import doc from 'grommet-controls/components/Colors/doc';
import Doc from '../../components/Doc';

const blue = {
  '50': '#e3f2fd', '100': '#bbdefb', '200': '#90caf9', '300': '#64b5f6', '400': '#42a5f5', '500': '#2196f3', '600': '#1e88e5', '700': '#1976d2', '800': '#1565c0', '900': '#0d47a1', 'a100': '#82b1ff', 'a200': '#448aff', 'a400': '#2979ff', 'a700': '#2962ff',
};
const cyan = {
  '50': '#e0f7fa',
  '100': '#b2ebf2',
  '200': '#80deea',
  '300': '#4dd0e1',
  '400': '#26c6da',
  '500': '#00bcd4',
  '600': '#00acc1',
  '700': '#0097a7',
  '800': '#00838f',
  '900': '#006064',
  'a100': '#84ffff',
  'a200': '#18ffff',
  'a400': '#00e5ff',
  'a700': '#00b8d4',
};

const deepOrange = {
  '50': '#fbe9e7',
  '100': '#ffccbc',
  '200': '#ffab91',
  '300': '#ff8a65',
  '400': '#ff7043',
  '500': '#ff5722',
  '600': '#f4511e',
  '700': '#e64a19',
  '800': '#d84315',
  '900': '#bf360c',
  'a100': '#ff9e80',
  'a200': '#ff6e40',
  'a400': '#ff3d00',
  'a700': '#dd2c00',
};
const brown = {
  '50': '#efebe9',
  '100': '#d7ccc8',
  '200': '#bcaaa4',
  '300': '#a1887f',
  '400': '#8d6e63',
  '500': '#795548',
  '600': '#6d4c41',
  '700': '#5d4037',
  '800': '#4e342e',
  '900': '#3e2723',
};
const blueGrey = {
  '50': '#eceff1',
  '100': '#cfd8dc',
  '200': '#b0bec5',
  '300': '#90a4ae',
  '400': '#78909c',
  '500': '#607d8b',
  '600': '#546e7a',
  '700': '#455a64',
  '800': '#37474f',
  '900': '#263238',
};

const desc = doc(Colors).toJSON();

export default class ColorsDoc extends React.Component {
  render() {
    return (
      <Doc
        name='Colors'
        desc={desc}
        example={
          <Box direction='row'>
            <Box basis='medium'>
              <Colors
                size='small'
                onSelect={(option) => { alert(JSON.stringify(option)); }}
                colors={materialColors}
              />
            </Box>
          </Box>
        }
        examples={{
          colors: (
            <Colors
              size='small'
              defaultColor='#ff0000'
              colors={uiColors}
            />
          ),
          onSelect: (
            <Colors
              size='small'
              colors={basicColors}
              onSelect={(option) => { alert(JSON.stringify(option)); }}
            />
          ),
          size: (
            <Box gap='small'>
              <Colors
                size='small'
                colors={{
                  blue, blueGrey, brown, cyan, deepOrange,
                }}
              />
              <Colors
                size='medium'
                columns={5}
                colors={{
                  blue, blueGrey, brown, cyan, deepOrange,
                }}
              />
              <Colors
                size='large'
                columns={3}
                colors={{
                  blue, blueGrey, brown, cyan, deepOrange,
                }}
              />
            </Box>
          ),
          columns: (
            <Colors
              size='small'
              columns={5}
              colors={{
                blue, blueGrey, brown, cyan, deepOrange,
              }}
            />
          ),
          wrap: (
            <Colors
              size='small'
              columns={5}
              wrap={true}
              colors={{
                blue, blueGrey, brown, cyan, deepOrange,
              }}
            />
          ),
        }}
      />
    );
  }
}
