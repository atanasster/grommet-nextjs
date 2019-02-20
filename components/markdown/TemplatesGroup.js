/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'grommet';
import Section from '../app/Section';
import TemplateCard from './TemplateCard';

const TemplatesGroup = ({ templates, group, limit }) => {
  const examples = templates[group];
  if (examples === undefined) {
    return null;
  }
  return (
    <Section name={group}>
      <Grid columns='medium' rows='medium' gap='small'>
        {examples.map(item => (
          <TemplateCard key={`template_${item.name}`} group={group} {...item} />
        )).slice(0, limit)
        }
      </Grid>
    </Section>
  );
};

TemplatesGroup.defaultProps = {
  limit: 20,
};

TemplatesGroup.propTypes = {
  group: PropTypes.string.isRequired,
  templates: PropTypes.object.isRequired,
  limit: PropTypes.number,
};

export default TemplatesGroup;
