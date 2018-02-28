import { Github } from 'grommet-icons';

export default ({ url, badge }) => ({
  url,
  badge: badge || <Github size='large' />,
});
