import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Paragraph, Image, Anchor, Text } from 'grommet';
import { Github } from 'grommet-icons';
import { Card } from 'grommet-controls';
import RoutedAnchor from '../app/RoutedAnchor';

const withAnchor = (link, children) => (
  link ? <Anchor href={link} target='_blank'>{children}</Anchor> : children
);

const VerticalCard = ({
  image, title, authorName, authorLink, path, excerpt, github,
}) => (
  <Card>
    <RoutedAnchor path={path} style={{ maxWidth: '100%' }}>
      <Box background='light-1' pad='small' border={{ side: 'bottom' }}>
        <Box basis='small' flex={false}>
          <Image
            fit='cover'
            src={image}
          />
        </Box>
      </Box>
    </RoutedAnchor>
    <Card.CardContent align='center' justify='between'>
      <Box>
        <RoutedAnchor path={path}>
          <Heading level={3} margin='none' textAlign='center' truncate={true}>
            {title}
          </Heading>
        </RoutedAnchor>
        <Paragraph
          size='small'
          style={{
           display: '-webkit-box',
           WebkitLineClamp: '5',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
         }}
        >
          {excerpt}
        </Paragraph>
      </Box>
      <Box direction='row' justify='between' align='center' pad={{ vertical: 'small', horizontal: 'medium' }} fill='horizontal'>
        <Box>
          <Text size='small'>
            by
          </Text>
          {withAnchor(authorLink, (
            <Text weight='bold'>
              {authorName}
            </Text>
            ))}
        </Box>
        {withAnchor(github, <Github />)}
      </Box>
    </Card.CardContent>
  </Card>
);

VerticalCard.defaultProps = {
  image: undefined,
  path: undefined,
  excerpt: undefined,
  github: undefined,
  authorLink: undefined,
};
VerticalCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorLink: PropTypes.string,
  path: PropTypes.string,
  excerpt: PropTypes.string,
  github: PropTypes.string,
};
export default VerticalCard;
