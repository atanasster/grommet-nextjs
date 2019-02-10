// import React from 'react';
// import { Box, RoutedAnchor, Heading, Paragraph, Image } from 'grommet';
// import { Favorite } from 'grommet-icons';
// import { Card, Avatar, IconButton } from 'grommet-controls';

const VerticalPost = ({
  image, title, authorName, authorImage, authorDescription, path, excerpt, icons = [],
}) => (
  <Card>
    <RoutedAnchor path={path}>
      <Box>
        <Box basis='small'>
          <Image
            fit='cover'
            src={image}
          />
        </Box>
      </Box>
    </RoutedAnchor>
    <Card.CardContent align='center'>
      <RoutedAnchor path={path}>
        <Heading level={3} margin='none'>
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
      <Box direction='row' justify='between' pad={{ vertical: 'small', horizontal: 'medium' }} fill='horizontal'>
        <Avatar
          image={authorImage}
          title={authorName}
          subTitle={authorDescription}
        />
        {icons.map((icon, idx) => (
          <IconButton key={`card_icon_${idx}`} {...icon} />
        ))}
      </Box>
    </Card.CardContent>
  </Card>
);

const Demo = () => (
  <Grid columns='medium' gap='small'>
    <VerticalPost
      image='https://picsum.photos/650/200/?image=50'
      title='John Wick'
      path='https://www.imdb.com/title/tt2911666/'
      excerpt={`
  Legendary assassin retired from his violent career after marrying the love of his life.
  Her sudden death leaves John in deep mourning and when sadistic mobster Iosef Tarasov and his thugs
  steal John's prized car and kill the puppy that was a last gift from his wife,
  John unleashes the remorseless killing machine within and seeks vengeance.
                `}
      authorName='John Doe'
      authorImage='https://picsum.photos/g/200/200?image=99'
      authorDescription='15 min. ago'
      icons={[{ icon: <Icons.Favorite/> }]}
    />
  </Grid>
);

render(<Demo />);
