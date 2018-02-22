import { Markdown } from 'grommet';
import doc from 'grommet/components/Markdown/doc';

import Doc from '../components/Doc';

const desc = doc(Markdown).toJSON();

const CONTENT = `
# Grommet **heart**s markdown
Favorite thing, [link](https://www.instagram.com/explore/tags/grommetux/)
`;

export default () => (
  <Doc
    name='Markdown'
    desc={desc}
    example={(
      <Markdown>
        {CONTENT}
      </Markdown>
    )}
  />
);
