import { Box } from 'grommet';
import { DateInput } from 'grommet-controls';
import doc from 'grommet-controls/components/DateInput/doc';
import { smallDate } from 'grommet-controls/utils/moment';
import Doc from '../../components/Doc';


const desc = doc(DateInput).toJSON();

export default class DateInputDoc extends React.Component {
  state = {
    date: smallDate(new Date()), dateAuto: smallDate(new Date()), dateISO: undefined,
  };

  render() {
    const { date, dateAuto, dateISO } = this.state;
    const today = new Date();
    const yesterday = (new Date()).setDate(today.getDate() - 1);
    return (
      <Box>
        <Doc
          name='DateInput'
          desc={desc}
          example={
            <Box direction='row'>
              <Box basis='medium' gap='small'>
                <DateInput
                  value={date}
                  onChange={({ target: { value } }) => this.setState({ date: value })}
                />
              </Box>
            </Box>
          }
          examples={{
            autocorrect: (
              <DateInput
                autocorrect={true}
                value={dateAuto}
                onChange={({ target: { value } }) => this.setState({ dateAuto: value })}
              />
            ),
            disabled: (
              <DateInput
                disabled={true}
                value={date}
                onChange={({ target: { value } }) => this.setState({ date: value })}
              />
            ),
            bounds: (
              <DateInput
                value={date}
                bounds={[
                  smallDate(new Date(new Date().getFullYear(), 0, 1)),
                  smallDate(new Date(new Date().getFullYear(), 11, 31)),
                ]}
                onChange={({ target: { value } }) => this.setState({ date: value })}
              />
            ),
            disabledDates: (
              <DateInput
                value={date}
                disabledDates={[
                  smallDate(yesterday),
                  smallDate(today),
                ]}
                onChange={({ target: { value } }) => this.setState({ date: value })}
              />
            ),
            firstDayOfWeek: (
              <DateInput
                value={date}
                firstDayOfWeek={1}
                onChange={({ target: { value } }) => this.setState({ date: value })}
              />
            ),
            locale: (
              <DateInput
                value={date}
                locale='de-DE'
                onChange={({ target: { value } }) => this.setState({ date: value })}
              />
            ),
            size: (
              <DateInput
                size='medium'
                value={date}
                onChange={({ target: { value } }) => this.setState({ date: value })}
              />
            ),
            value: (
              <DateInput
                value={dateISO || ''}
                onChange={({ target: { value } }) => this.setState({ dateISO: value })}
              />
            ),
          }}
        />
      </Box>
    );
  }
}
