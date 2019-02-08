import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Image, Markdown, Box, Paragraph } from 'grommet';
import RoutedAnchor from './RoutedAnchor';

const LargeParagraph = styled(Paragraph)`
  max-width: 632px;
`;

const MarkdownImage = styled(Image)`
  max-width: 100%;
`;

const Code = styled(Box)`
  font-family: monospace; 
`;

export default withTheme(({ theme, ...rest }) => (
  <Markdown
    components={{
      p: { component: LargeParagraph },
      img: { component: MarkdownImage },
      a: { component: RoutedAnchor },
      code: { component: Code, props: { background: theme.dark ? 'dark-1' : 'light-2' } },
    }}
    {...rest}
  />
));
