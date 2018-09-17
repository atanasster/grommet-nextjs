import React from 'react';
import { Box } from 'grommet';
import { Grommet, CircleQuestion } from 'grommet-icons';
import { Notification } from 'grommet-controls';
import doc from 'grommet-controls/components/Notification/doc';
import Doc from '../../components/Doc';

const desc = doc(Notification).toJSON();

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
              <Notification
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
            <Notification
              a11yTitle='Close notification'
              onClose={onClose}
            />
          ),
          status: (
            <Notification
              message='Message heading'
              status='info'
              onClose={onClose}
            />
          ),
          state: (
            <Notification
              message='Message heading'
              state='state note'
              status='warning'
              size='small'
              onClose={onClose}
            />
          ),
          strong: (
            <Notification
              message='Bold message'
              strong={true}
              status='error'
              size='small'
              onClose={onClose}
            />
          ),
          icon: (
            <Notification
              message='Custom icon'
              icon={<Grommet />}
              size='small'
              onClose={onClose}
            />
          ),
          closer: (
            <Notification
              status='disabled'
              message='Custom closer'
              closer={<CircleQuestion />}
              size='small'
              onClose={onClose}
            />
          ),
          percentComplete: (
            <Notification
              status='info'
              message='Task percentage'
              percentComplete={80}
              size='small'
              onClose={onClose}
            />
          ),
          timestamp: (
            <Notification
              message='Time stamp'
              timestamp={new Date()}
              size='small'
              onClose={onClose}
            />
          ),
          locale: (
            <Notification
              message='Locale de-DE'
              timestamp={new Date()}
              locale='de-DE'
              size='small'
              onClose={onClose}
            />
          ),
          size: (
            <Notification
              message='Large'
              size='large'
              onClose={onClose}
            />
          ),
          reverse: (
            <Notification
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
