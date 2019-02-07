/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from 'grommet';
import { ResponsiveContext } from 'grommet/contexts';
import { Card } from 'grommet-controls';
import { Code, Document } from 'grommet-icons';
import RoutedButton from '../components/RoutedButton';
import Section from './Section';
import Example from './Example';

const ComponentsGroup = ({ examples, group }) => (
  <Section name={group}>
    <ResponsiveContext.Consumer>
      {size => examples.filter(example => (example.category === group)).sort().map(item => (
        <Card background='brand' key={`${group}_${item.name}`} basis={size !== 'small' ? 'medium' : undefined} margin='xsmall'>
          <Card.CardTitle>
            <RoutedButton route='documentation' params={{ library: item.package, component: item.name }}>
              <Heading margin='none' level={3}>
                {item.name}
              </Heading>
            </RoutedButton>
          </Card.CardTitle>
          <Card.CardContent flex={false} basis='220px' align='center' justify='center'>
            <Example>
              {item.examples._starter}
            </Example>
          </Card.CardContent>
          <Card.CardActions>
            <Box direction='row' justify='between' fill='horizontal'>
              <RoutedButton
                route='documentation'
                params={{ library: item.package, component: item.name }}
              >
                <Box direction='row' gap='xsmall' pad='xsmall'>
                  <Document />
                            Docs
                </Box>
              </RoutedButton>
              <RoutedButton
                route='examples'
                params={{ library: item.package, group: item.name, example: '_starter' }}
              >
                <Box direction='row' gap='xsmall' pad='xsmall'>
                  <Code />
                    Code
                </Box>
              </RoutedButton>
            </Box>
          </Card.CardActions>
        </Card>
           ))
        }
    </ResponsiveContext.Consumer>
  </Section>
);

ComponentsGroup.propTypes = {
  group: PropTypes.string.isRequired,
  examples: PropTypes.array.isRequired,
};

export default ComponentsGroup;
