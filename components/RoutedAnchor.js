import Link from 'next/link';
import { Anchor } from 'grommet';

export default props => (
  <Link href={props.path}>
    <Anchor {...props} />
  </Link>
);
