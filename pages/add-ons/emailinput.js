import { Box } from 'grommet';
import { EmailInput } from 'grommet-controls';
import doc from 'grommet-controls/components/EmailInput/doc';
import Doc from '../../components/Doc';

const desc = doc(EmailInput).toJSON();

export default class EmailInputDoc extends React.Component {
  state = { email: 'john.smith@gmail.co.uk' };
  render() {
    const { email } = this.state;
    return (
      <Doc
        name='EmailInput'
        desc={desc}
        example={
          <Box direction='row'>
            <Box basis='medium'>
              <EmailInput
                value={email}
                onChange={({ target: { value } }) => this.setState({ email: value })}
                defaultValue='john.smith@gmail.co.uk'
              />
            </Box>
          </Box>
        }
        examples={{
        }}
      />
    );
  }
}
