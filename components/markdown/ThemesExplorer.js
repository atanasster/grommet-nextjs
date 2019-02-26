/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import JSONPretty from 'react-json-pretty';
import { Grommet, Box, Grid, Heading, Text, Markdown, Button } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { base } from 'grommet/themes';
import { ResponsiveContext } from 'grommet/contexts';
import { VerticalMenu, Tag, Card } from 'grommet-controls';
import RoutedAnchor from '../app/RoutedAnchor';
import ThemePath from '../themes/ThemePath';
import ThemeEditor from '../themes/editors/ThemeEditor';
import ComponentsList from '../components/ComponentsList';
import { assignProp, getProp, getArrayProp } from '../themes/utils';
import ThemeSource from '../themes/ThemeSource';
import pushRoute from '../app/PushRoute';

const itemsTree = (items, path) => {
  if (typeof items === 'object' && !Array.isArray(items)) {
    return Object.keys(items).sort().map((item) => {
      const themePath = `${path}${path ? '-' : ''}${item}`;
      return {
        id: themePath,
        label: item,
        items: itemsTree(items[item], themePath),
        children: items[item],
        themePath,
        widget: (Array.isArray(items[item]) ? <Tag round='small' border='all' pad={{ horizontal: 'small' }} label={items[item].length} /> : undefined),
      };
    });
  }
  return undefined;
};

const Describe = ({ label, children }) => {
  let text;
  if (typeof children === 'string') {
    try {
      // eslint-disable-next-line no-eval
      const obj = eval(`(${children.trim()})`);

      if (typeof obj === 'object') {
        text = <JSONPretty json={obj} />;
      } else {
        text = (
          <Markdown>
            {children}
          </Markdown>
        );
      }
    } catch (e) {
      text = (
        <Markdown>
          {children}
        </Markdown>
      );
    }
  } else {
    text = <JSONPretty json={children} />;
  }
  return (
    <Box gap='xxsmall'>
      <Text weight='bold'>{`${label}:`}</Text>
      {text}
    </Box>
  );
};
const ThemeComponent = ({
  component, defaultValue, description, type, ...rest
}) => (
  <Card {...rest} >
    <Card.CardTitle>
      <Heading level={3} margin='none'>
        <RoutedAnchor route='documentation' params={{ library: 'grommet', component }}>
          {component}
        </RoutedAnchor>
      </Heading>
    </Card.CardTitle>
    <Card.CardContent gap='small' overflow='auto'>
      <Describe label='description'>
        {description}
      </Describe>
      <Describe label='type'>
        {type}
      </Describe>
      <Describe label='default'>
        {defaultValue}
      </Describe>

    </Card.CardContent>
  </Card>
);
const ThemesExplorer = ({ themeDocs, router: { query: { path } }, fonts }) => {
  if (themeDocs === undefined) {
    return null;
  }
  const [items] = React.useState(itemsTree(themeDocs, ''));
  let selected = [];
  const pathItem = path && getArrayProp(items, path);
  if (pathItem) {
    selected = pathItem.children;
  }
  const [theme, setTheme] = React.useState({});
  const onThemeChange = (newValue) => {
    const oldValue = getProp(deepMerge(base, theme), path);
    if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
      const newTheme = assignProp(theme, path, newValue);
      setTheme(newTheme);
    }
  };

  const [viewTheme, setViewTheme] = React.useState(false);
  let themeModal;
  if (viewTheme) {
    themeModal = <ThemeSource theme={theme} onClose={() => setViewTheme(false)} />;
  }

  const [viewDocs, setViewDocs] = React.useState(true);
  let view;
  if (viewDocs) {
    view = Array.isArray(selected) && selected.length > 0 && (
    <Grid columns='medium' gap='small'>
      {selected.map(component => (
        <ThemeComponent key={component.component} {...component} />
              ))}
    </Grid>
    );
  } else {
    view = (
      <Grommet theme={theme} style={{ background: 'transparent' }}>
        <Grid columns='medium' gap='small'>
          <ComponentsList
            components={selected.map(component => ({
              name: component.component,
              package: 'grommet',
            }))}
          />
        </Grid>
      </Grommet>
    );
  }


  return (
    <Box direction='row-responsive' gap='large' pad={{ vertical: 'medium' }} >
      <ResponsiveContext.Consumer>
        {size => (
          <Box basis={size !== 'small' && 'medium'} overflow='auto' background='light-1'>
            <VerticalMenu
              activeItem={{ id: path }}
              items={items}
              onSelect={(item) => {
                pushRoute({
                    route: 'theme_explorer',
                    params: { path: item.themePath },
                  });
              }}
            />
          </Box>
        )}
      </ResponsiveContext.Consumer>
      <Box pad='small' fill='horizontal'>
        <Box pad={{ vertical: 'small' }} border='bottom' direction='row-responsive' justify='between'>
          <Box direction='row' gap='small' >
            <Button label='docs' onClick={() => setViewDocs(true)} active={viewDocs} />
            <Button label='live' onClick={() => setViewDocs(false)} active={!viewDocs} />
          </Box>
          <Box direction='row'>
            <Button label='theme' onClick={() => setViewTheme(true)} />
            {themeModal}
          </Box>
        </Box>
        <Box pad={{ vertical: 'small' }} border='bottom' direction='row-responsive' justify='between' align='center'>
          <ThemePath path={path} />
          <Text size='large'>
            {selected.length ? `${selected.length} affected components` : ''}
          </Text>
        </Box>
        {path && (
          <Box pad={{ vertical: 'small' }} border='bottom' direction='row-responsive' justify='between' align='center'>
            <ThemeEditor path={path} onChange={onThemeChange} theme={theme} fonts={fonts} />
          </Box>
        )}
        <Box pad={{ vertical: 'small' }}>
          {view}
        </Box>
      </Box>
    </Box>
  );
};

ThemesExplorer.propTypes = {
  themeDocs: PropTypes.object.isRequired,
};


export default withRouter(ThemesExplorer);
