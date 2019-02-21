/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import JSONPretty from 'react-json-pretty';
import { Box, Grid, Heading, Text, Markdown } from 'grommet';
import { VerticalMenu, Tag, Card } from 'grommet-controls';
import RoutedAnchor from '../app/RoutedAnchor';

const itemsTree = (items, path) => {
  if (typeof items === 'object' && !Array.isArray(items)) {
    return Object.keys(items).sort().map((item) => {
      const themePath = `${path}/${item}`;
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
const ThemesExplorer = ({ themes }) => {
  if (themes === undefined) {
    return null;
  }
  const [items] = React.useState(itemsTree(themes, ''));
  const [selection, setSelection] = React.useState({ selected: [], path: undefined });
  const { selected, path } = selection;
  return (
    <Box direction='row-responsive' gap='large'>
      <Box basis='medium' overflow='auto' background='light-1'>
        <VerticalMenu
          items={items}
          onSelect={item => setSelection({ selected: item.children, path: item.themePath })}
        />
      </Box>
      <Box pad='small' fill='horizontal'>
        <Box pad={{ vertical: 'small' }} border='bottom'>
          <Heading level={2} margin='none'>
            {selected.length > 0 ? (
              `${path} `
            ) : (
              'no current selection...'
            )}
          </Heading>
        </Box>
        <Box pad={{ vertical: 'small' }}>
          <Text size='large'>
            {selected.length ? `${selected.length} affected components` : ''}
          </Text>
        </Box>
        <Box pad={{ vertical: 'small' }}>
          {Array.isArray(selected) && selected.length > 0 && (
            <Grid columns='medium' gap='small'>
              {selected.map(component => (
                <ThemeComponent key={component.component} {...component} />
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    </Box>
  );
};

ThemesExplorer.propTypes = {
  themes: PropTypes.object.isRequired,
};

export default ThemesExplorer;
