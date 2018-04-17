import { LinkDown, LinkUp, Sort } from 'grommet-icons';
import { Box, Button } from 'grommet';
import { StyledThComponent } from '../StyledPagingTable';

export default ({
  toggleSort, sort, resizable, children, pivot, hidden,
  sortable, expander, CellTextComponent, ...props
}) => {
  if (!expander && Array.isArray(children) && children.length > 1 && !children[0] && !children[1]) {
    return null;
  }
  const { style, ...rest } = props;
  const childRendered = <CellTextComponent {...rest} value={children} />;
  let content;
  if (sortable) {
    const sortAsc = sort === '-sort-asc';
    const sortDesc = sort === '-sort-desc';
    let SortIcon = Sort;
    if (sortAsc || sortDesc) {
      SortIcon = sortAsc ? LinkUp : LinkDown;
    }
    content = (
      <Box direction='row' gap='xsmall'>
        {childRendered}
        <Button onClick={e => (toggleSort && toggleSort(e))}><SortIcon /></Button>
      </Box>
    );
  } else {
    content = childRendered;
  }

  const boxProps = { ...{ pad: 'xsmall' }, ...rest };
  return (

    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <StyledThComponent
      role='columnheader'
      direction='row'
      pivot={pivot}
      hidden={hidden}
      sortable={sortable}
      style={style}
      resizable={resizable}
    >
      <Box {...boxProps} fill={true}>
        {content}
      </Box>
    </StyledThComponent>
  );
};
