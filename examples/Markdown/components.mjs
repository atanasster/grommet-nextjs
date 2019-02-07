export const components = `
const CONTENT = \`
  # Out of Breath

  You know, sometimes in life it seems like there's no way out. Like
  a sheep trapped in a maze designed by wolves.

  [reference](#)

\\\`\\\`\\\`
import { Grommet } from 'grommet';
\\\`\\\`\\\`

  > i carry your heart with me

  ![alt text](//v2.grommet.io/assets/IMG_4245.jpg "Markdown Image")

  Markdown | Less | Pretty
  --- | --- | ---
  *Still* | \\\`renders\\\` | **nicely**
  1 | 2 | 3
\`;

// eslint-disable-next-line no-unused-vars,no-undef
const StyledPre = styled.pre\`
  background-color: #7d4cdb;
\`;

const Demo = () => (
  <Markdown components={{ pre: StyledPre }}>
    {CONTENT}
  </Markdown>
);

render(<Demo />);  
`;
