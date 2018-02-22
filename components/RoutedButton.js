import Link from 'next/link';
import { Button } from 'grommet';

export default ({ path, ...rest }) => (
  <Link href={path}>
    <Button {...rest} />
  </Link>
);
