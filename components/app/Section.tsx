import React from 'react';
import { Heading, Box } from 'grommet';
import RoutedAnchor from './RoutedAnchor';

interface SectionProps {
  name: string,
  link?: any,
}
const Section: React.FC<SectionProps> = ({ children, name, link }) => {
  let heading = name && (
    <Heading level={2} margin={{ top: 'none' }}>
        {name}
    </Heading>
  );
  if (link && heading) {
    heading = (
      <RoutedAnchor
        {...link}
      >
        {heading}
      </RoutedAnchor>
    );
  }
  return (
    <Box
      pad={{ vertical: 'medium' }}
    >
      {heading}
      <Box direction='row' wrap={true}>
        {children}
      </Box>
    </Box>
  );
};

export default Section;
