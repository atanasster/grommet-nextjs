import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Image, Markdown, Box, Paragraph, Grid } from 'grommet';
import RoutedAnchor from '../app/RoutedAnchor';
import Example from '../documentation/Example';
import VerticalCard from './VerticalCard';
import TemplatesGroup from './TemplatesGroup';
import ThemesExplorer from '../themes/ThemesExplorer';
import TemplateCard from './TemplateCard';
import FlexBox from './FlexBox';
import ThemesStatus from './ThemesStatus';

const MarkdownImage = styled(Image)`
  max-width: 100%;
`;


const GithubImage = ({ src, ...rest }) => {
  let rawSrc = src;
  if (rawSrc.includes('https://github.com')) {
    rawSrc = rawSrc.replace('https://github.com', 'https://raw.githubusercontent.com').replace('/blob', '');
  }
  return (
    <MarkdownImage src={rawSrc} {...rest} />
  );
};

const LargeParagraph = styled(Paragraph)`
  max-width: 632px;
`;


const Code = styled(Box)`
  font-family: monospace;
  display: table-cell;
  padding: 0 4px;
`;


const BoxRow = props => (<Box direction='row-responsive' wrap={true} {...props} />);

export default withTheme(({ children, theme, ...rest }) => (
  <Markdown
    components={{
      p: { component: LargeParagraph },
      img: { component: GithubImage },
      a: { component: RoutedAnchor },
      code: { component: Code, props: { flex: false, background: theme.dark ? 'dark-1' : 'light-2' } },
      example: { component: Example },
      grid: { component: Grid },
      card: { component: VerticalCard },
      templates: { component: TemplatesGroup, props: { templates: rest.templates } },
      template: { component: TemplateCard },
      flexbox: { component: FlexBox },
      themesstatus: { component: ThemesStatus },
      box: { component: BoxRow },
      themesexplorer: { component: ThemesExplorer, props: rest },
    }}
  >
    {children}
  </Markdown>
));
