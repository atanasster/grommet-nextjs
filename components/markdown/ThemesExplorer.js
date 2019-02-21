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
      const newPath = `${path}_${item}`;
      return {
        id: newPath,
        label: item,
        items: itemsTree(items[item], newPath),
        children: items[item],
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
  <Card pad='medium' {...rest} >
    <Card.CardTitle>
      <Heading level={2} margin='none'>
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
  const [selected, setSelected] = React.useState([]);
  return (
    <Box direction='row-responsive' gap='large'>
      <Box basis='medium' overflow='auto' background='light-1'>
        <VerticalMenu
          items={items}
          onSelect={(item => setSelected(item.children))}
        />
      </Box>
      <Box flex={true}>
        <Grid columns='medium' gap='small'>
          {Array.isArray(selected) && selected.map(component => (
            <ThemeComponent key={component.component} {...component} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

ThemesExplorer.propTypes = {
  themes: PropTypes.object.isRequired,
};

export default ThemesExplorer;
