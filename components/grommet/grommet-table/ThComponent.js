import { LinkDown, LinkUp } from 'grommet-icons';
import { Box } from 'grommet';
import { StyledThComponent } from './StyledTable';


export default ({
  toggleSort, className, children, ...rest
}) => {
  const sortAsc = className.indexOf('-sort-asc') !== -1;
  const sortDesc = className.indexOf('-sort-desc') !== -1;
  let content;
  if (sortAsc || sortDesc) {
    const Sort = sortAsc ? LinkUp : LinkDown;
    content = (
      <Box direction='row' align='center' justify='start' style={{ width: '100%' }}>
        <span>{children}</span>
        <Sort style={{ marginLeft: '5px' }} />
      </Box>
    );
  } else {
    content = children;
  }
  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <StyledThComponent
      onClick={e => (toggleSort && toggleSort(e))}
      role='columnheader'
      direction='row'
      pad='xsmall'
      className={className}
      {...rest}
    >
      {content}
    </StyledThComponent>
  );
};
