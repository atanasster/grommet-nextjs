import Link from 'next/link';
import { Anchor } from 'grommet';

export default ({ path, ...rest }) => (
  <Link href={path}>
    <Anchor {...rest} />
  </Link>
);
