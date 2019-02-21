import React from 'react';
import PropTypes from 'prop-types';
import Component from './Component';
import Section from '../app/Section';

const ComponentsGroup = ({ examples, group }) => (
  <Section name={group}>
    {examples.filter(example => (example.category === group)).sort().map(item => (
      <Component key={`${item.package}_${item.name}`} component={item} />
    ))}
  </Section>
);

ComponentsGroup.propTypes = {
  group: PropTypes.string.isRequired,
  examples: PropTypes.array.isRequired,
};

export default ComponentsGroup;
