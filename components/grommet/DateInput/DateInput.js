import React, { Component } from 'react';
import { Box, Calendar } from 'grommet';
import { Calendar as CalendarIcon } from 'grommet-icons';
import { MaskedInput, createAutoCorrectedDatePipe } from '../MaskedInput';
import { smallDate } from '../utils/moment';
import doc from './doc';

class DateInput extends Component {
  static defaultProps = {
    icon: <CalendarIcon />,
    size: 'small',
    a11yDropTitle: 'Open calendar',
  }
  constructor(props) {
    super(props);
    this.state = this.valueToState(props.value);
  }
  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    if (value !== this.props.value) {
      this.setState(this.valueToState(value));
    }
  }
  valueToState = (isoDate) => {
    const timeStamp = Date.parse(isoDate);
    if (!Number.isNaN(timeStamp)) {
      const date = new Date(timeStamp);
      return { value: smallDate(date) };
    }
    return { value: isoDate };
  }

  onSelect = (isoDate) => {
    const date = new Date(isoDate);
    const value = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    this.setState(this.valueToState(value));
  }

  render() {
    const {
      bounds, dates, disabledDates, autocorrect,
      firstDayOfWeek, locale, size, mask: userMask, ...rest
    } = this.props;
    const { value } = this.state;
    delete rest.value;
    let mask;
    if (userMask) {
      mask = { mask: userMask };
    } else if (autocorrect) {
      mask = {
        mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
        pipe: createAutoCorrectedDatePipe(),
        keepCharPositions: true,
      };
    } else {
      mask = { mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] };
    }
    return (
      <MaskedInput
        value={value}
        dropContent={(
          <Box pad='small'>
            <Calendar
              date={value}
              onSelect={this.onSelect}
              bounds={bounds}
              dates={dates}
              disabled={disabledDates}
              firstDayOfWeek={firstDayOfWeek}
              locale={locale}
              size={size}
            />
          </Box>
        )}
        {...{ ...rest, ...mask }}
      />
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  doc(DateInput);
}

export default DateInput;
