import React from 'react';
import { Box, Heading, Image, Button } from 'grommet';
import { Edit, Add } from 'grommet-icons';
import { Card, ImageStamp } from 'grommet-controls';
import doc, { docCardActions, docCardTitle, docCardContent } from 'grommet-controls/components/Card/doc';
import Doc from '../../components/Doc';

const desc = doc(Card).toJSON();
const descCardActions = docCardActions(Card.CardActions).toJSON();
const descCardTitle = docCardTitle(Card.CardTitle).toJSON();
const descCardContent = docCardContent(Card.CardContent).toJSON();

const actions = [
  {
    label: 'Edit',
    icon: <Edit />,
    onClick: () => {},
  }, {
    label: 'New',
    icon: <Add />,
    onClick: () => {},
  },
];
export default () => (
  <Box>
    <Doc
      name='Card'
      desc={desc}
      footer={false}
      example={(
        <Box >
          <Card>
            <Card.CardTitle border='bottom'>
              <ImageStamp round='full' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' />
              <Heading level={3} margin='xsmall'>Info card</Heading>
            </Card.CardTitle>
            <Card.CardContent>
              <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
            </Card.CardContent>
            <Card.CardActions justify='center'>
              {actions.map((action, index) => (<Button key={`actions_${index}`} label={action.label} onClick={action.onClick} />))}
            </Card.CardActions>

          </Card>
        </Box>
      )}
      examples={{
        animation: (
          <Card animation={{ type: 'zoomIn', duration: 5000, size: 'xlarge' }} >
            <Card.CardTitle border='bottom'>
              Card
            </Card.CardTitle>
            <Card.CardContent>
              <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
            </Card.CardContent>
          </Card>
        ),
        background: (
          <Card background='accent-1' size={{ width: 'medium', height: 'small' }} >
            <Card.CardTitle border='bottom'>
              Card
            </Card.CardTitle>
            <Card.CardContent>
              Some content
            </Card.CardContent>
          </Card>
        ),
        border: (
          <Card border={{ color: 'brand', size: 'medium' }} size={{ width: 'medium', height: 'small' }}>
            <Card.CardTitle border='bottom'>
              Card
            </Card.CardTitle>
            <Card.CardContent>
              Card content
            </Card.CardContent>
          </Card>
        ),
        elevation: (
          <Card elevation='large' size={{ width: 'medium', height: 'small' }}>
            <Card.CardTitle border='bottom'>
              Card
            </Card.CardTitle>
            <Card.CardContent>
              Card content
            </Card.CardContent>
          </Card>
        ),
        gap: (
          <Card gap='medium' size={{ width: 'medium', height: 'small' }}>
            <Card.CardTitle border='bottom'>
              Card
            </Card.CardTitle>
            <Card.CardContent>
              Some content
            </Card.CardContent>
          </Card>
        ),
        pad: (
          <Card pad='medium' size={{ width: 'medium', height: 'small' }}>
            <Card.CardTitle border='bottom'>
              Card
            </Card.CardTitle>
            <Card.CardContent>
              Card content
            </Card.CardContent>
          </Card>
        ),
        round: (
          <Card round='medium' size={{ width: 'medium', height: 'small' }}>
            <Card.CardTitle border='bottom'>
              Card
            </Card.CardTitle>
            <Card.CardContent>
              Card content
            </Card.CardContent>
          </Card>
        ),

        size: (
          <Card size={{ height: 'medium', width: 'medium' }}>
            <Card.CardTitle border='bottom'>
              Card
            </Card.CardTitle>
            <Card.CardContent>
              <Image src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
            </Card.CardContent>
          </Card>
        ),
      }}
    />
    <Doc
      name='CardTitle'
      desc={descCardTitle}
      nav={false}
      footer={false}
      examples={{
        children: (
          <Card>
            <Box pad='small'>
              <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
            </Box>
            <Card.CardTitle>
              Card
            </Card.CardTitle>
          </Card>
        ),
      }}
    />
    <Doc
      name='CardContent'
      desc={descCardContent}
      nav={false}
      footer={false}
      examples={{
        children: (
          <Card>
            <Card.CardContent pad='small'>
              <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
            </Card.CardContent>
            <Card.CardTitle border='top'>
              Card
            </Card.CardTitle>
          </Card>
        ),
      }}
    />
    <Doc
      name='CardActions'
      desc={descCardActions}
      nav={false}
      examples={{
        children: (
          <Card>
            <Card.CardTitle>
              Card
            </Card.CardTitle>
            <Card.CardContent pad='small'>
              <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
            </Card.CardContent>
            <Card.CardActions justify='center'>
              {actions.map((action, index) => (<Button key={`actions_${index}`} label={action.label} onClick={action.onClick} />))}
            </Card.CardActions>

          </Card>
        ),
      }}
    />
  </Box>
);
