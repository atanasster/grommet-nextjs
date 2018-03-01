import { LinkDown, LinkUp } from 'grommet-icons';
import { Box } from 'grommet';
import { StyledThComponent } from '../StyledTable';


export default ({
  toggleSort, sort, resizable, children, ...rest
}) => {
  const sortAsc = sort === '-sort-asc';
  const sortDesc = sort === '-sort-desc';
  let content;
  if (sortAsc || sortDesc) {
    const Sort = sortAsc ? LinkUp : LinkDown;
    content = (
      <Box direction='row' justify='start' fill='horizontal' gap='xsmall'>
        <span>{children}</span>
        <Sort />
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
      resizable={resizable}
      {...rest}
    >
      {content}
    </StyledThComponent>
  );
};
