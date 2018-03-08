import { Box, Select } from 'grommet';
import docSelect from 'grommet/components/Select/doc';
import { GrommetSelect } from '../../components/grommet/grommet-multiselect/index';
import doc from '../../components/grommet/grommet-multiselect/doc';

import Doc from '../../components/Doc';
import { TagsSelect } from '../../components/grommet/grommet-tags/index';

const desc = doc(GrommetSelect).toJSON();
const descSelect = docSelect(Select).toJSON();

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
          name='Grommet Select'
          desc={desc}
          footer={false}
          example={
            <Box direction='row'>
              <Box basis='medium' gap='small'>

                <GrommetSelect
                  options={objectOptions}
                  value={selectedObj}
                  multiple={true}
                  label={({ value }) => (value.reduce((c, item) => (`${c ? `${c}, ` : ''}${item.label}`), null))}
                  placeholder='Add sizes'
                  onChange={({ option }) => this.setState({ selectedObj: option })}
                >{ item => (
                  <Box key={`option_${item.id}`} pad='small'>
                    {`${item.id}. ${item.label}`}
                  </Box>
                  )}
                </GrommetSelect>
              </Box>
            </Box>
          }
          examples={{
            label: (
              <Box direction='row' flex={true}>
                <Box basis='medium'>
                  <GrommetSelect
                    options={stringOptions}
                    value={selected}
                    label={TagsSelect()}
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
