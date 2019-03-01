import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DragSource } from '@devexpress/dx-react-core';

import { TableCell } from 'grommet';

import { ResizingControl } from './table-header-cell/resizing-control';

const StyledTableCell = styled(TableCell)`
`;

export class TableHeaderCell extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false,
    };
    this.cellRef = React.createRef();

    this.onDragStart = () => {
      this.setState({ dragging: true });
    };
    this.onDragEnd = () => {
      if (this.cellRef.current) {
        this.setState({ dragging: false });
      }
    };
  }

  render() {
    const {
      style, column, tableColumn,
      showGroupingControls, onGroup, groupingEnabled,
      draggingEnabled,
      resizingEnabled, onWidthChange, onWidthDraft, onWidthDraftCancel,
      classes, tableRow, className, children,
      // @deprecated
      showSortingControls, sortingDirection, sortingEnabled, onSort, before,
      ...restProps
    } = this.props;

    // eslint-disable-next-line no-unused-vars
    const { dragging } = this.state;
    // eslint-disable-next-line no-unused-vars
    const align = (tableColumn && tableColumn.align) || 'left';

    const cellLayout = (
      <StyledTableCell
        style={style}
        {...restProps}
      >
        <div>
          {children}
        </div>
        {resizingEnabled && (
          <ResizingControl
            onWidthChange={onWidthChange}
            onWidthDraft={onWidthDraft}
            onWidthDraftCancel={onWidthDraftCancel}
            resizeLastHandleClass={classes.resizeHandle}
            resizeHandleOpacityClass={classes.resizeHandleLine}
          />
        )}
      </StyledTableCell>
    );

    return draggingEnabled ? (
      <DragSource
        ref={this.cellRef}
        payload={[{ type: 'column', columnName: column.name }]}
        onStart={this.onDragStart}
        onEnd={this.onDragEnd}
      >
        {cellLayout}
      </DragSource>
    ) : cellLayout;
  }
}

TableHeaderCell.propTypes = {
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object,
  column: PropTypes.object,
  style: PropTypes.object,
  showSortingControls: PropTypes.bool,
  sortingEnabled: PropTypes.bool,
  sortingDirection: PropTypes.oneOf(['asc', 'desc', null]),
  onSort: PropTypes.func,
  showGroupingControls: PropTypes.bool,
  groupingEnabled: PropTypes.bool,
  onGroup: PropTypes.func,
  draggingEnabled: PropTypes.bool,
  resizingEnabled: PropTypes.bool,
  onWidthChange: PropTypes.func,
  onWidthDraft: PropTypes.func,
  onWidthDraftCancel: PropTypes.func,
  children: PropTypes.node,
  before: PropTypes.node,
};

TableHeaderCell.defaultProps = {
  column: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  style: null,
  showSortingControls: false,
  sortingDirection: undefined,
  sortingEnabled: false,
  onSort: undefined,
  showGroupingControls: false,
  groupingEnabled: false,
  onGroup: undefined,
  draggingEnabled: false,
  resizingEnabled: false,
  onWidthChange: undefined,
  onWidthDraft: undefined,
  onWidthDraftCancel: undefined,
  children: undefined,
  before: undefined,
};
