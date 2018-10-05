import React from 'react';
import { Box } from 'grommet';
import { Card } from 'grommet-controls';
import doc, { docCardActions, docCardTitle, docCardContent } from 'grommet-controls/components/Card/doc';
import Doc from '../../components/Doc';

const desc = doc(Card).toJSON();
const descCardActions = docCardActions(Card.CardActions).toJSON();
const descCardTitle = docCardTitle(Card.CardTitle).toJSON();
const descCardContent = docCardContent(Card.CardContent).toJSON();

export default () => (
  <Box>
    <Doc
      name='Card'
      desc={desc}
      footer={false}
    />
    <Doc
      name='CardTitle'
      desc={descCardTitle}
      nav={false}
      footer={false}
    />
    <Doc
      name='CardContent'
      desc={descCardContent}
      nav={false}
      footer={false}
    />
    <Doc
      name='CardActions'
      desc={descCardActions}
      nav={false}
    />
  </Box>
);
