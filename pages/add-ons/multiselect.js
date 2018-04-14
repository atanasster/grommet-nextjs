import { Box, Select as GrommetSelect } from 'grommet';
import docSelect from 'grommet/components/Select/doc';
import { Select } from 'grommet-controls';
import { TagsSelect } from 'grommet-controls/components/Tags';
import doc from 'grommet-controls/components/Select/doc';

import Doc from '../../components/Doc';

const desc = doc(Select).toJSON();
const descSelect = docSelect(GrommetSelect).toJSON();

const stringOptions = ['small', 'medium', 'large', 'xlarge', 'huge'];
const objectOptions = [{ id: 1, label: 'small' }, { id: 2, label: 'medium' }, { id: 3, label: 'large' }, { id: 4, label: 'xlarge' }, { id: 5, label: 'huge' }];


export default class SelectDoc extends React.Component {
  state = {
    selected: [stringOptions[0], stringOptions[2]],
    selectedObj: [objectOptions[0], objectOptions[2]],
  };

  render() {
    const { selected, selectedObj } = this.state;
    return (
      <Box>
        <Doc
          name='Multiselect'
          desc={desc}
          footer={false}
          example={
            <Box direction='row'>
              <Box basis='medium' gap='small'>

                <Select
                  options={objectOptions}
                  multiple={true}
                  value={selectedObj}
                  placeholder='Add sizes'
                  onChange={({ value }) => this.setState({ selectedObj: value })}
                >{ item => (
                  <Box key={`option_${item.id}`} pad='small'>
                    {`${item.id}. ${item.label}`}
                  </Box>
                  )}
                </Select>
              </Box>
            </Box>
          }
          examples={{
            label: (
              <Box direction='row' flex={true}>
                <Box basis='medium'>
                  <Select
                    options={stringOptions}
                    selected={selected.map(str => stringOptions.indexOf(str))}
                    label={TagsSelect()}
                    multiple={true}
                    value={selected}
                    onChange={({ value }) => this.setState({ selected: value })}
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
