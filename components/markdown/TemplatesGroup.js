/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'grommet';
import Section from '../Section';
import TemplateCard from './TemplateCard';

const TemplatesGroup = ({ templates, group }) => {
  const examples = templates[group];
  if (examples === undefined) {
    return null;
  }
  return (
    <Section name={group}>
      <Grid columns='medium' rows='medium' gap='small'>
        {examples.map(item => (
          <TemplateCard key={`template_${item.name}`} group={group} {...item} />
        ))
        }
      </Grid>
    </Section>
  );
};

TemplatesGroup.propTypes = {
  group: PropTypes.string.isRequired,
  templates: PropTypes.object.isRequired,
};

export default TemplatesGroup;
