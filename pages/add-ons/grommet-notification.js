import { Box } from 'grommet';
import { Grommet, CircleQuestion } from 'grommet-icons';
import { GrommetNotification } from '../../components/grommet/grommet-notification/index';
import doc from '../../components/grommet/grommet-notification/doc';
import Doc from '../../components/Doc';

const desc = doc(GrommetNotification).toJSON();
console.log(doc(GrommetNotification), desc);
export default class NotificationDoc extends React.Component {
  render() {
    const onClose = () => alert('Close clicked');
    return (
      <Doc
        name='Grommet Notification'
        desc={desc}
        example={
          <Box gap='large'>
            <Box direction='row'>
              <GrommetNotification
                border={{ side: 'all', color: 'brand', size: 'medium' }}
                message='Message heading'
                state='state label'
                timestamp={new Date()}
                strong={true}
                percentComplete={30}
                status='ok'
                onClose={onClose}
              />
            </Box>
          </Box>
        }
        examples={{
          a11yTitle: (
            <GrommetNotification
              a11yTitle='Close notification'
              onClose={onClose}
            />
          ),
          status: (
            <GrommetNotification
              message='Message heading'
              status='info'
              onClose={onClose}
            />
          ),
          state: (
            <GrommetNotification
              message='Message heading'
              state='state note'
              status='warning'
              size='small'
              onClose={onClose}
            />
          ),
          strong: (
            <GrommetNotification
              message='Bold message'
              strong={true}
              status='error'
              size='small'
              onClose={onClose}
            />
          ),
          icon: (
            <GrommetNotification
              message='Custom icon'
              icon={<Grommet />}
              size='small'
              onClose={onClose}
            />
          ),
          closer: (
            <GrommetNotification
              status='disabled'
              message='Custom closer'
              closer={<CircleQuestion />}
              size='small'
              onClose={onClose}
            />
          ),
          percentComplete: (
            <GrommetNotification
              status='info'
              message='Task percentage'
              percentComplete={80}
              size='small'
              onClose={onClose}
            />
          ),
          timestamp: (
            <GrommetNotification
              message='Time stamp'
              timestamp={new Date()}
              size='small'
              onClose={onClose}
            />
          ),
          locale: (
            <GrommetNotification
              message='Locale de-DE'
              timestamp={new Date()}
              locale='de-DE'
              size='small'
              onClose={onClose}
            />
          ),
          size: (
            <GrommetNotification
              message='Large'
              size='large'
              onClose={onClose}
            />
          ),
          reverse: (
            <GrommetNotification
              message='reversed'
              size='small'
              reverse={true}
              onClose={onClose}
            />
          ),

        }}
      />
    );
  }
}
