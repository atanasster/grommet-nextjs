import React from 'react';
import { Box, Heading, Text, Paragraph } from 'grommet';
import Page from '../components/app/Page';

const lineText = 'It\'s 5 o\'clock somewhere';
const paragraphText = `
"It's Five O'Clock Somewhere" is a song performed by Alan Jackson and Jimmy Buffett, and written by Jim "Moose" Brown and Don Rollins.
`;

interface TypographyLineProps {
  label: string,
  element: React.ReactNode,
}
const TypographyLine: React.FC<TypographyLineProps> = ({ label, element }) => (
  <Box
    direction='row'
    align='center'
    border='bottom'
    pad={{
      vertical: 'small',
    }}
    gap='small'
  >
    <Box basis='small'>
      <Text>{label}</Text>
    </Box>
    {element}
  </Box>
);
export default class IconsPage extends React.Component {
  render() {
    return (
      <Page title='Typography'>
        <Box
          pad={{
            horizontal: 'large',
          }}
        >
          <TypographyLine label='Header level = 1' element={<Heading level={1}>{lineText}</Heading>} />
          <TypographyLine label='Header level = 2' element={<Heading level={2}>{lineText}</Heading>} />
          <TypographyLine label='Header level = 3' element={<Heading level={3}>{lineText}</Heading>} />
          <TypographyLine label='Header level = 4' element={<Heading level={4}>{lineText}</Heading>} />
          <TypographyLine label='Text size = xxlarge' element={<Text size='xxlarge'>{lineText}</Text>} />
          <TypographyLine label='Text size = xlarge' element={<Text size='xlarge'>{lineText}</Text>} />
          <TypographyLine label='Text size = large' element={<Text size='large'>{lineText}</Text>} />
          <TypographyLine label='Text size = medium' element={<Text size='medium'>{lineText}</Text>} />
          <TypographyLine label='Text size = small' element={<Text size='small'>{lineText}</Text>} />
          <TypographyLine label='Text size = xsmall' element={<Text size='xsmall'>{lineText}</Text>} />
          <TypographyLine label='Paragraph size = xlarge' element={<Paragraph size='xlarge'>{paragraphText}</Paragraph>} />
          <TypographyLine label='Paragraph size = large' element={<Paragraph size='large'>{paragraphText}</Paragraph>} />
          <TypographyLine label='Paragraph size = medium' element={<Paragraph size='medium'>{paragraphText}</Paragraph>} />
          <TypographyLine label='Paragraph size = small' element={<Paragraph size='small'>{paragraphText}</Paragraph>} />
        </Box>
      </Page>
    );
  }
}
