import { LinkDown, LinkUp } from 'grommet-icons';
import { Box } from 'grommet';
import { StyledThComponent } from '../StyledTable';

export default ({
  toggleSort, sort, resizable, children, pivot, hidden, sortable, CellTextComponent, ...props
}) => {
  const sortAsc = sort === '-sort-asc';
  const sortDesc = sort === '-sort-desc';
  const { style, ...rest } = props;
  const childRendered = <CellTextComponent {...rest} value={children} />;
  let content;
  if (sortAsc || sortDesc) {
    const Sort = sortAsc ? LinkUp : LinkDown;
    content = (
      <Box direction='row' gap='xsmall'>
        {childRendered}
        <Sort />
      </Box>
    );
  } else {
    content = childRendered;
  }

  const boxProps = { ...{ pad: 'xsmall' }, ...rest };
  return (

    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <StyledThComponent
      onClick={e => (toggleSort && toggleSort(e))}
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
