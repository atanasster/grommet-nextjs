/*
import React from 'react';
import { Box, Heading, Text } from 'grommet';
import { ImageStamp, Card, IconButton } from 'grommet-controls';
*/

const SmallProfileCard = ({
  avatar, name, description, icons,
}) => (
  <Card>
    <Card.CardContent >
      <Box direction='row' gap='medium' align='center' pad={{ horizontal: 'small' }}>
        <ImageStamp
          src={avatar}
          size='large'
          round='full'
        />
        <Box pad='xsmall'>
          <Heading level={3} margin='none'>
            {name}
          </Heading>
          <Text size='small'>
            {description}
          </Text>
          <Box direction='row' gap='small' pad={{ vertical: 'xsmall' }}>
            {icons.map((icon, idx) => (
              <IconButton
                key={`small_profile_${name}_${idx}`}
                {...icon}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Card.CardContent>
  </Card>
);

const Demo = () => (
  <Grid columns='medium'>
    <SmallProfileCard
      avatar='https://picsum.photos/g/200/200?image=98'
      name='John Wick'
      description='Legendary assassin'
      icons={[
        { icon: <Icons.Twitter color='plain' />, href: 'https://twitter.com/grommetux' },
        { icon: <Icons.Facebook color='plain' />, href: 'https://twitter.com/grommetux' },
        { icon: <Icons.Linkedin color='plain' />, href: 'https://twitter.com/grommetux' },
        { icon: <Icons.GooglePlus color='plain' />, href: 'https://twitter.com/grommetux' },
      ]}
    />
  </Grid>
);

render(<Demo />);
