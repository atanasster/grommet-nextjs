import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Paragraph, Image, Anchor, Text } from 'grommet';
import { Github } from 'grommet-icons';
import { Card } from 'grommet-controls';
import RoutedAnchor from '../app/RoutedAnchor';

interface WithAnchorProps{
  link?: string,
}
const withAnchor = (link?: string, children?: React.ReactNode) : React.ReactNode => (
  link ? <Anchor href={link} target='_blank'>{children}</Anchor> : children
);

interface VerticalCardProps {
  image?: string,
  title: string,
  authorName: string,
  authorLink?: string,
  path?: string,
  excerpt?: string,
  github?: string,

}
const VerticalCard: React.FC<VerticalCardProps> = ({
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
           WebkitLineClamp: 5,
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

export default VerticalCard;
