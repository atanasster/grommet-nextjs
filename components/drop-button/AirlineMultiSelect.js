import { Anchor, Box, Button, DropButton, Heading, Text } from 'grommet';
import { FormAdd, FormClose } from 'grommet-icons';

import MultiSelect from './MultiSelect';
import airlines from './airlines';

export default class AirlineMultiSelect extends React.Component {
  state = {
    selected: [],
    open: false,
    available: airlines,
  }

  filter = query => (
    this.setState({
      available: this.get(undefined, query),
      open: true,
    })
  );

  close = () => this.setState(
    { open: false, available: this.get() }
  );

  get = (selected = this.state.selected, query) => {
    let all = [...airlines];
    if (query) {
      all = all.filter(
        airline => airline.toLowerCase().match(query.toLowerCase())
      );
    }
    if (selected.length) {
      all = all.filter(value => selected.indexOf(value) === -1);
    }
    return all;
  }

  select = (airline) => {
    const newSelected = [...this.state.selected];
    newSelected.push(airline);
    this.setState(
      {
        open: false,
        selected: newSelected,
        available: this.get(newSelected),
      }
    );
  }

  remove = (index) => {
    const newSelected = [...this.state.selected];
    newSelected.splice(index, 1);
    this.setState(
      {
        open: false,
        selected: newSelected,
        available: this.get(newSelected),
      }
    );
  }

  reset = (event) => {
    event.preventDefault();
    this.setState(
      {
        selected: [],
        available: this.get([]),
      }
    );
  }

  render() {
    const {
      available,
      open,
      selected,
    } = this.state;
    let itemNodes;
    if (selected.length) {
      itemNodes = (
        <Box pad={{ vertical: 'small' }}>
          {selected.map((airline, index) => (
            <Box align='center' key={airline} direction='row' justify='between' pad={{ vertical: 'xsmall' }}>
              <Text margin={{ right: 'small' }}>{airline}</Text>
              <Button
                a11yTitle={`Delete ${airline}`}
                plain={true}
                onClick={() => this.remove(index)}
              >
                <Box align='center'>
                  <FormClose />
                </Box>
              </Button>
            </Box>
          ))}
          <Box align='start' margin={{ vertical: 'small' }}>
            <Anchor href='#' onClick={this.reset}>
              Clear Airlines
            </Anchor>
          </Box>
        </Box>
      );
    }
    return (
      <Box basis='small'>
        <DropButton
          a11yTitle='Open Airlines drop'
          open={open}
          onClose={this.close}
          control={
            <Box direction='row' justify='between'>
              <Heading level={4} margin='none'><strong>Airlines</strong></Heading>
              <FormAdd color='brand' />
            </Box>
          }
        >
          <MultiSelect
            basis='small'
            category='Airline'
            onSearch={this.filter}
            onClose={this.close}
            items={available}
            onSelect={this.select}
          />
        </DropButton>
        {itemNodes}
      </Box>
    );
  }
}
