import { Box, Select } from 'grommet';
import docSelect from 'grommet/components/Select/doc';
import { MultiSelect } from '../components/grommet/grommet-multiselect';
import doc from '../components/grommet/grommet-multiselect/doc';

import Doc from '../components/Doc';
import { TagsSelect } from '../components/grommet/grommet-tags';

const desc = doc(MultiSelect).toJSON();
const descSelect = docSelect(Select).toJSON();

const stringOptions = ['small', 'medium', 'large', 'xlarge', 'huge'];


export default class SelectDoc extends React.Component {
  state = { selected: [stringOptions[0], stringOptions[2]] }

  render() {
    const { selected } = this.state;
    return (
      <Box>
        <Doc
          name='Grommet Select'
          desc={desc}
          footer={false}
          example={
            <Box direction='row'>
              <Box basis='medium' gap='small'>

                <MultiSelect
                  options={stringOptions}
                  value={selected}
                  multiple={true}
                  placeholder='Add sizes'
                  onChange={({ option }) => this.setState({ selected: option })}
                />
              </Box>
            </Box>
          }
          examples={{
            multiple: (
              <Box direction='row' flex={true}>
                <Box basis='medium'>
                  <MultiSelect
                    options={stringOptions}
                    value={selected}
                    label={TagsSelect}
                    multiple={true}
                    onChange={({ option }) => this.setState({ selected: option })}
                  />
                </Box>
              </Box>
            ),
          }}
        />
        <Doc name='Select' nav={false} desc={descSelect} />
      </Box>
    );
  }
}
