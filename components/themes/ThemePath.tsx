import React from 'react';
import { Heading, Anchor } from 'grommet';
import { base } from 'grommet/themes';
import { getProp } from './utils';
import ThemeSource from './ThemeSource';

interface ThemePathProps {
  path: string,
}
const ThemePath: React.FC<ThemePathProps> = ({ path }) => {
  const [open, setOpen] = React.useState();
  let layer;
  if (open) {
    const obj = getProp(base, path);
    layer = (
      <ThemeSource
        title='Value in base theme'
        theme={obj}
        onClose={() => setOpen(false)}
      />
    );
  }

  return (
    <React.Fragment>
      <Heading level={3} margin='none'>
        {path ? (
          <Anchor
            label={`${path.replace(/-/g, '.')}`}
            onClick={() => setOpen(true)}
          />
        ) : (
          'no current selection...'
        )}
      </Heading>
      {layer}
    </React.Fragment>
  );
};

export default ThemePath;
