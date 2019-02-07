import React from 'react';
import { Box } from 'grommet';
import Page from '../components/Page';
import ExtMarkdown from '../components/ExtMarkdown';
import LayoutsGroup from '../components/LayoutsGroup';

export default () => (
  <Page
    title='Page layouts'
  >
    <Box>
      <ExtMarkdown>
        {`
##grommmet-controls
a package of react components built on top of grommet, designed to fill some gaps for developing enterprise-type applications with grommet
`}
      </ExtMarkdown>
    </Box>
    <Box>
      <LayoutsGroup
        group='Pages'
        examples={[]}
      />
      <LayoutsGroup
        group='Cards'
        examples={[
          {
            name: 'Card',
            code:
`
const VerticalPost = ({
  image, title, authorName, authorImage, authorDescription, path, excerpt, icons = [],
}) => (
  <Card>
    <RoutedAnchor path={path} style={{ maxWidth: '100%' }}>
      <Box>
        <Box basis='small' flex={false}>
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
          name={authorName}
          description={authorDescription}
        />
        {icons.map((icon, idx) => (
          <IconButton {...icon} />
        ))}
      </Box>
    </Card.CardContent>
  </Card>
);

const Demo = () => (
  <VerticalPost
    image='//v2.grommet.io/assets/IMG_4245.jpg'
    title='John Wick'
    path='https://www.imdb.com/title/tt2911666/'
    excerpt={\`
Legendary assassin retired from his violent career after marrying the love of his life.
Her sudden death leaves John in deep mourning and when sadistic mobster Iosef Tarasov and his thugs
steal John's prized car and kill the puppy that was a last gift from his wife,
John unleashes the remorseless killing machine within and seeks vengeance.
              \`}
    authorName='John Doe'
    authorImage='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
    authorDescription='15 min. ago'
    icons={[]}
  />
);

render(<Demo />);
`,
          },
        ]}
      />
      <LayoutsGroup
        group='Forms'
        examples={[]}
      />
      <LayoutsGroup
        group='Charts'
        examples={[]}
      />
    </Box>
  </Page>
);
