import { Box, Calendar } from 'grommet';
import { Calendar as CalendarIcon, Add, Subtract } from 'grommet-icons';
import {
  MaskedInput, placeholderChars,
  createAutoCorrectedDatePipe, createNumberMask,
  alphabetic, digit,
} from 'grommet-controls';
import doc from 'grommet-controls/components/MaskedInput/doc';
import { smallDate } from 'grommet-controls/utils/moment';
import Doc from '../../components/Doc';


const desc = doc(MaskedInput).toJSON();

export default class MaskedInputDoc extends React.Component {
  state = {
    phone: '8024442131',
    number: 18933.85,
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
                <MaskedInput
                  mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                  value={phone}
                  onChange={({ target: { value } }) => this.setState({ phone: value })}
                />
              </Box>
            </Box>
          }
          examples={{
            a11yTitle: (
              <MaskedInput
                a11yTitle='Dollars'
                mask={createNumberMask()}
                value={number}
                onChange={({ target: { value } }) => this.setState({ number: value })}
              />

            ),
            disabled: (
              <MaskedInput
                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
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
              <MaskedInput
                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                dropContent={(
                  <Box pad='small'>
                    <Calendar size='small' date={date} onSelect={isoDate => this.setState({ date: smallDate(new Date(isoDate)) })} />
                  </Box>
                )}
                value={date}
                onChange={({ target: { value } }) => this.setState({ date: value })}
              />
            ),
            dropIcon: (
              <MaskedInput
                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                dropIcon={<CalendarIcon />}
                dropContent={(
                  <Box pad='small'>
                    <Calendar size='small' date={date} onSelect={isoDate => this.setState({ date: smallDate(new Date(isoDate)) })} />
                  </Box>
                )}
                value={date}
                onChange={({ target: { value } }) => this.setState({ date: value })}
              />
            ),
            widgets: (
              <MaskedInput
                mask={createNumberMask({ allowDecimal: true })}
                value={number}
                onChange={({ target: { value } }) => this.setState({ number: value })}
                widgets={[
                  { icon: <Add />, onClick: () => this.setState({ number: number + 1 }) },
                  { icon: <Subtract />, onClick: () => this.setState({ number: number - 1 }) },
                ]}
              />

            ),
            plain: (
              <MaskedInput
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                plain={true}
                value={phone}
                onChange={({ target: { value } }) => this.setState({ phone: value })}
              />
            ),
            focusIndicator: (
              <MaskedInput
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                plain={true}
                focusIndicator={true}
                value={phone}
                onChange={({ target: { value } }) => this.setState({ phone: value })}
              />
            ),
            mask: (
              <MaskedInput
                placeholder='US phone number with country code'
                mask={['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              />
            ),
            guide: (
              <MaskedInput
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                guide={false}
                value={phone}
                onChange={({ target: { value } }) => this.setState({ phone: value })}
              />
            ),
            pipe: (
              <MaskedInput
                mask={[alphabetic, digit, alphabetic, ' ', digit, alphabetic, digit]}
                pipe={conformedValue => ({ value: conformedValue.toUpperCase() })}
                placeholder='K1A 0B2'
                placeholderChar={placeholderChars.underscore}
              />
            ),
            placeholderChar: (
              <MaskedInput
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                placeholderChar={placeholderChars.underscore}
                value={phone}
                onChange={({ target: { value } }) => this.setState({ phone: value })}
              />

            ),
            keepCharPositions: (
              <MaskedInput
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                value={phone}
                onChange={({ target: { value } }) => this.setState({ phone: value })}
                keepCharPositions={true}
              />
            ),
            showMask: (
              <MaskedInput
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                showMask={true}
              />
            ),
            placeholder: (
              <MaskedInput
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                placeholder='Enter phone...'
              />
            ),
            name: (
              <MaskedInput
                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                pipe={createAutoCorrectedDatePipe()}
                placeholder='Please enter a date'
                keepCharPositions={true}
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
