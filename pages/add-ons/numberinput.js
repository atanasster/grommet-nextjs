import { Box } from 'grommet';
import { AddCircle, SubtractCircle } from 'grommet-icons';
import { NumberInput } from '../../components/grommet/NumberInput/index';
import doc from '../../components/grommet/NumberInput/doc';
import Doc from '../../components/Doc';

const desc = doc(NumberInput).toJSON();

export default class NumberInputDoc extends React.Component {
  state = {
    largeNumber: 12000.34, floatNumber: 3.5, integerNumber: 5, misedSepValue: '1000,00',
  };

  render() {
    const {
      largeNumber, integerNumber, floatNumber, misedSepValue,
    } = this.state;
    return (
      <Box>
        <Doc
          name='NumberInput'
          desc={desc}
          example={
            <Box direction='row'>
              <Box basis='medium' gap='small'>
                <NumberInput
                  value={largeNumber}
                  onChange={({ target: { value } }) => this.setState({ largeNumber: value })}
                />
              </Box>
            </Box>
          }
          examples={{
            min: (
              <NumberInput
                value={integerNumber}
                min={5}
                onChange={({ target: { value } }) => this.setState({ integerNumber: value })}
              />

            ),
            max: (
              <NumberInput
                value={integerNumber}
                max={5}
                onChange={({ target: { value } }) => this.setState({ integerNumber: value })}
              />
            ),
            step: (
              <NumberInput
                value={floatNumber}
                step={0.5}
                onChange={({ target: { value } }) => this.setState({ floatNumber: value })}
              />
            ),
            disabled: (
              <NumberInput
                value={integerNumber}
                disabled={true}
                onChange={({ target: { value } }) => this.setState({ integerNumber: value })}
              />
            ),
            addIcon: (
              <NumberInput
                value={integerNumber}
                addIcon={<AddCircle />}
                subtractIcon={<SubtractCircle />}
                onChange={({ target: { value } }) => this.setState({ integerNumber: value })}
              />
            ),
            subtractIcon: (
              <NumberInput
                value={integerNumber}
                step={10}
                onChange={({ target: { value } }) => this.setState({ integerNumber: value })}
              />
            ),
            prefix: (
              <NumberInput
                value={integerNumber}
                min={5}
                prefix='$'
                suffix=' USD'
                onChange={({ target: { value } }) => this.setState({ integerNumber: value })}
              />
            ),
            suffix: (
              <NumberInput
                value={integerNumber}
                min={5}
                prefix='$'
                onChange={({ target: { value } }) => this.setState({ integerNumber: value })}
              />
            ),
            thousandsSeparatorSymbol: (
              <NumberInput
                value={misedSepValue}
                thousandsSeparatorSymbol='.'
                decimalSymbol=','
                updateToString={true}
                onChange={({ target: { value } }) => this.setState({ misedSepValue: value })}
              />
            ),
            allowDecimal: (
              <NumberInput
                value={largeNumber}
                allowDecimal={false}
                onChange={({ target: { value } }) => this.setState({ largeNumber: value })}
              />
            ),
            decimalSymbol: (
              <NumberInput
                value={misedSepValue}
                thousandsSeparatorSymbol=''
                decimalSymbol=','
                updateToString={true}
                onChange={({ target: { value } }) => this.setState({ misedSepValue: value })}
              />
            ),
            decimalLimit: (
              <NumberInput
                value={largeNumber}
                decimalLimit={1}
                onChange={({ target: { value } }) => this.setState({ largeNumber: value })}
              />
            ),
            integerLimit: (
              <NumberInput
                value={largeNumber}
                integerLimit={4}
                onChange={({ target: { value } }) => this.setState({ largeNumber: value })}
              />
            ),
            requireDecimal: (
              <NumberInput
                value={largeNumber}
                integerLimit={true}
                onChange={({ target: { value } }) => this.setState({ largeNumber: value })}
              />
            ),
            allowLeadingZeroes: (
              <NumberInput
                value={largeNumber}
                allowLeadingZeroes={true}
                onChange={({ target: { value } }) => this.setState({ largeNumber: value })}
              />
            ),
          }}
        />
      </Box>
    );
  }
}
