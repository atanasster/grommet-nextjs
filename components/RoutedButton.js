import Link from 'next/link';
import { Button } from 'grommet';

export default props => (
  <Link href={props.path}>
    <Button {...props} />
  </Link>
);
