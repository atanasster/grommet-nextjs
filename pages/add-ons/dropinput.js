import { Box, Calendar } from 'grommet';
import { Calendar as CalendarIcon, Add, Subtract } from 'grommet-icons';
import { DropInput } from '../../components/grommet/DropInput/index';
import doc from '../../components/grommet/DropInput/doc';
import Doc from '../../components/Doc';
import { smallDate } from '../../components/grommet/utils/moment';

const desc = doc(DropInput).toJSON();

export default class DropInputDoc extends React.Component {
  state = {
    date: smallDate(new Date()),
  };

  render() {
    const { phone, date, number } = this.state;
    return (
      <Box>
        <Doc
          name='MaskedInput'
          desc={desc}
          example={
            <Box direction='row'>
              <Box basis='medium' gap='small'>
                <DropInput
                  dropContent={(
                    <Box pad='small'>
                      <Calendar size='small' date={date} onSelect={isoDate => this.setState({ date: smallDate(new Date(isoDate)) })} />
                    </Box>
                  )}
                  value={date}
                  onChange={({ target: { value } }) => this.setState({ phone: value })}
                />
              </Box>
            </Box>
          }
          examples={{
            a11yTitle: (
              <DropInput
                a11yTitle='Birthdy date'
                value={number}
                onChange={({ target: { value } }) => this.setState({ number: value })}
              />

            ),
            disabled: (
              <DropInput
                disabled={true}
                dropContent={(
                  <Box pad='small'>
                    <Calendar size='small' date={date} onSelect={isoDate => this.setState({ date: smallDate(new Date(isoDate)) })} />
                  </Box>
                )}
                value={date}
                onChange={({ target: { value } }) => this.setState({ date: value })}
              />
            ),
            dropContent: (
              <DropInput
                a11yDropTitle='Open calendar'
                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                dropContent={(
                  <Box pad='small'>
                    <Calendar size='small' date={date} onSelect={isoDate => this.setState({ date: smallDate(new Date(isoDate)) })} />
                  </Box>
                )}
                value={date}
                onChange={({ target: { value } }) => this.setState({ phone: value })}
              />
            ),
            dropIcon: (
              <DropInput
                dropIcon={<CalendarIcon />}
                dropContent={(
                  <Box pad='small'>
                    <Calendar size='small' date={date} onSelect={isoDate => this.setState({ date: smallDate(new Date(isoDate)) })} />
                  </Box>
                )}
                value={date}
                onChange={({ target: { value } }) => this.setState({ phone: value })}
              />
            ),
            widgets: (
              <DropInput
                value={number}
                onChange={({ target: { value } }) => this.setState({ number: parseFloat(value) })}
                widgets={[
                  { icon: <Add />, onClick: () => this.setState({ number: number + 1 }) },
                  { icon: <Subtract />, onClick: () => this.setState({ number: number - 1 }) },
                ]}
              />

            ),
            plain: (
              <DropInput
                plain={true}
                value={phone}
                onChange={({ target: { value } }) => this.setState({ phone: value })}
              />
            ),
            focusIndicator: (
              <DropInput
                plain={true}
                focusIndicator={true}
                value={phone}
                onChange={({ target: { value } }) => this.setState({ phone: value })}
              />
            ),
            placeholder: (
              <DropInput
                placeholder='Enter phone...'
              />
            ),
            name: (
              <DropInput
                id='date-id'
                name='date-name'
              />
            ),
          }}
        />
      </Box>
    );
  }
}
