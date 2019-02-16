import React from 'react';
import { Box, Heading, Image, Anchor } from 'grommet';
import { Code, Github } from 'grommet-icons';
import { Card } from 'grommet-controls';
import RoutedButton from '../RoutedButton';

export default ({ name, group, ...rest }) => (
  <Card
    background='brand'
    key={`${group}_${name}`}
    margin='xsmall'
    {...rest}
  >
    <Card.CardTitle>
      <RoutedButton route='template' params={{ folder: group, file: name }}>
        <Heading margin='none' level={3}>
          {name}
        </Heading>
      </RoutedButton>
    </Card.CardTitle>
    <Card.CardContent>
      <Image
        fit='cover'
        src={`/static/img/templates/${group}/${name}.jpg`}
      />
    </Card.CardContent>
    <Card.CardActions>
      <Box direction='row' justify='between' fill='horizontal'>
        <RoutedButton
          route='template'
          params={{ folder: group, file: name }}
        >
          <Box direction='row' gap='xsmall' pad='xsmall'>
            <Code />
            View
          </Box>
        </RoutedButton>
        <Anchor
          target='_blank'
          href={`https://github.com/atanasster/grommet-nextjs/blob/master/docs/templates/${group}/${name}.js`}
          icon={<Github />}
        />

      </Box>
    </Card.CardActions>
  </Card>
);

