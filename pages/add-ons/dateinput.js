import { Box } from 'grommet';
import { DateInput } from '../../components/grommet/DateInput/index';
import doc from '../../components/grommet/DateInput/doc';
import Doc from '../../components/Doc';
import { smallDate } from '../../components/grommet/utils/moment';

const desc = doc(DateInput).toJSON();

export default class DateInputDoc extends React.Component {
  state = {
    date: new Date(), dateAuto: new Date(), dateISO: smallDate(new Date()),
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
            disabled: (
              <DateInput
                value={date}
                disabled={[
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
                size='large'
                value={date}
                onChange={({ target: { value } }) => this.setState({ date: value })}
              />
            ),
            value: (
              <DateInput
                value={dateISO}
                onChange={({ target: { value } }) => this.setState({ dateISO: value })}
              />
            ),
          }}
        />
      </Box>
    );
  }
}
