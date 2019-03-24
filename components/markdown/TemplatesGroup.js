/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'grommet';
import Section from '../app/Section';
import TemplateCard from './TemplateCard';

const TemplatesGroup = ({
  templates, group, category, limit,
}) => {
  const examples = templates[group];
  if (examples === undefined) {
    return null;
  }
  const link = (group && !category) ? { route: 'templates', params: { category: group } } : undefined;
  return (
    <Section name={group || 'featured'} link={link}>
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
  group: undefined,
  category: undefined,
};

TemplatesGroup.propTypes = {
  group: PropTypes.string,
  category: PropTypes.string,
  templates: PropTypes.object.isRequired,
  limit: PropTypes.number,
};

export default TemplatesGroup;
