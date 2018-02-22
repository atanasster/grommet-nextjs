import { Anchor, Box, Button, DropButton, Heading, Text } from 'grommet';
import { FormAdd, FormClose } from 'grommet-icons';

import MultiSelect from './MultiSelect';

const labels = [
  { color: 'neutral-1', value: 'work in progress' },
  { color: 'status-ok', value: 'done' },
  { color: 'status-unknown', value: 'backlog' },
  { color: 'status-critical', value: 'bug' },
  { color: 'neutral-2', value: '2.0' },
  { color: 'neutral-3', value: 'legacy' },
];

export default class LabelMultiSelect extends React.Component {
  state = {
    animation: {},
    selected: [],
    open: false,
    available: labels,
  }

  close = () => this.setState(
    {
      open: false,
      available: labels.filter(value => this.state.selected.indexOf(value) === -1),
    }
  );

  select = (label) => {
    const newSelected = [...this.state.selected];
    newSelected.push(label);
    this.setState(
      {
        animation: {
          ...this.state.animation,
          [newSelected.length - 1]: {
            type: 'fadeIn',
            duration: 400,
          },
        },
        open: false,
        selected: newSelected,
        available: labels.filter(value => newSelected.indexOf(value) === -1),
      }
    );
  }

  remove = (index) => {
    const newSelected = [...this.state.selected];
    newSelected.splice(index, 1);
    this.setState(
      {
        animation: {
          ...this.state.animation,
          [index]: {
            type: 'fadeOut',
            duration: 200,
          },
        },
        open: false,
        available: labels.filter(value => newSelected.indexOf(value) === -1),
      }, () => {
      setTimeout(() => {
        this.setState({ selected: newSelected });
      }, 200);
    }
    );
  }

  reset = (event) => {
    event.preventDefault();
    this.setState(
      {
        animation: {
          ...this.state.animation,
          all: {
            type: 'fadeOut',
            duration: 200,
          },
        },
        available: labels,
      }, () => {
      setTimeout(() => {
        this.setState({
          animation: {
            ...this.state.animation,
            all: undefined,
          },
          selected: [],
        });
      }, 200);
    }
    );
  }

  render() {
    const {
      animation,
      available,
      open,
      selected,
    } = this.state;
    let itemNodes;
    if (selected.length) {
      itemNodes = (
        <Box animation={animation.all} pad={{ vertical: 'small' }}>
          {selected.map((label, index) => (
            <Box
              animation={animation[index]}
              key={label.value}
              direction='row'
              margin={{ vertical: 'xsmall' }}
            >
              <Box round='small' basis='3/4' background={label.color}>
                <Button
                  a11yTitle={`Delete ${label.value}`}
                  plain={true}
                  onClick={() => this.remove(index)}
                >
                  <Box
                    align='center'
                    justify='between'
                    direction='row'
                    pad='xsmall'
                  >
                    <Text textAlign='start' margin={{ horizontal: 'xsmall' }}>{label.value}</Text>
                    <FormClose />
                  </Box>
                </Button>
              </Box>
            </Box>
          ))}
          <Box align='start' margin={{ vertical: 'small' }}>
            <Anchor href='#' onClick={this.reset}>
              Clear Labels
            </Anchor>
          </Box>
        </Box>
      );
    }
    return (
      <Box basis='small'>
        <DropButton
          background='white'
          a11yTitle='Open Labels drop'
          open={open}
          onClose={this.close}
          control={
            <Box direction='row' justify='between'>
              <Heading level={4} margin='none'><strong>Labels</strong></Heading>
              <FormAdd color='brand' />
            </Box>
          }
        >
          <MultiSelect
            category='Label'
            onClose={this.close}
            items={available}
            onSelect={this.select}
          >
            {item => (
              <Box align='center' pad='small' direction='row'>
                <Box
                  margin={{ right: 'small' }}
                  background={item.color}
                  style={{ width: '12px', height: '12px' }}
                />
                <Text margin='none'>{item.value}</Text>
              </Box>
            )}
          </MultiSelect>
        </DropButton>
        {itemNodes}
      </Box>
    );
  }
}
