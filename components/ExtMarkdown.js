import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Image, Markdown, Box, Paragraph, Grid } from 'grommet';
import RoutedAnchor from './RoutedAnchor';
import Example from './Example';
import VerticalCard from './VerticalCard';
import TemplatesGroup from './TemplatesGroup';
import TemplateCard from './TemplateCard';

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
      example: { component: Example },
      grid: { component: Grid },
      card: { component: VerticalCard },
      templates: { component: TemplatesGroup, props: { templates: rest.templates } },
      template: { component: TemplateCard },
    }}
    {...rest}
  />
));
