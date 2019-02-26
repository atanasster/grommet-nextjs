import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, ResponsiveContext } from 'grommet';
import { Card } from 'grommet-controls';
import { Code, Document } from 'grommet-icons';
import RoutedButton from '../app/RoutedButton';
import Example from '../documentation/Example';

const Component = ({ component, example }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Card background='brand' basis={size !== 'small' ? 'medium' : undefined} margin='xsmall'>
        <Card.CardTitle>
          <RoutedButton route='documentation' params={{ library: component.package, component: component.name }}>
            <Heading margin='none' level={3}>
              {component.name}
            </Heading>
          </RoutedButton>
        </Card.CardTitle>
        <Card.CardContent flex={false} basis='220px' align='center' justify='center'>
          <Example>
            {component.examples[example]}
          </Example>
        </Card.CardContent>
        <Card.CardActions>
          <Box direction='row' justify='between' fill='horizontal'>
            <RoutedButton
              route='documentation'
              params={{ library: component.package, component: component.name }}
            >
              <Box direction='row' gap='xsmall' pad='xsmall'>
                <Document />
                            Docs
              </Box>
            </RoutedButton>
            <RoutedButton
              route='examples'
              params={{ library: component.package, group: component.name, example: '_starter' }}
            >
              <Box direction='row' gap='xsmall' pad='xsmall'>
                <Code />
                    Code
              </Box>
            </RoutedButton>
          </Box>
        </Card.CardActions>
      </Card>
      )}
  </ResponsiveContext.Consumer>
);

Component.defaultProps = {
  example: '_starter',
};

Component.propTypes = {
  example: PropTypes.string,
  component: PropTypes.object.isRequired,
};

export default Component;
