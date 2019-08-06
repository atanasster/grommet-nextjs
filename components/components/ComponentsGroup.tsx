import React from 'react';
// eslint-disable-next-line no-unused-vars
import Component, { ComponentInterface } from './Component';
import Section from '../app/Section';

interface ComponentsGroupProps {
  group: string,
  examples: ComponentInterface[],
}

const ComponentsGroup: React.FC<ComponentsGroupProps> = ({ examples, group }) => (
  <Section name={group}>
    {examples.filter(example => (example.category === group)).sort().map(item => (
      <Component key={`${item.package}_${item.name}`} component={item} />
    ))}
  </Section>
);


export default ComponentsGroup;
