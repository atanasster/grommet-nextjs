/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Grid } from 'grommet';
import Section from '../app/Section';
import TemplateCard from './TemplateCard';

interface TemplatesGroupProps {
  group: string,
  category: string,
  templates: object,
  limit?: number,
};

const TemplatesGroup: React.FC<TemplatesGroupProps> = ({
  templates, group, category, limit,
}) => {
  const examples = templates[group];
  if (examples === undefined) {
    return null;
  }
  const link = (group && !category) ? { route: 'templates', params: { category: group } } : undefined;
  return (
    <Section name={group ? group.replace(/_/g, '') : 'featured'} link={link}>
      <Grid columns='medium' rows='medium' gap='small' fill={true}>
        {examples.map(item => (
          <TemplateCard key={`template_${item.name}`} group={category || group} {...item} />
        )).slice(0, limit)
        }
      </Grid>
    </Section>
  );
};

TemplatesGroup.defaultProps = {
  limit: 20,
};


export default TemplatesGroup;
