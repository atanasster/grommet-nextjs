import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DragSource } from '@devexpress/dx-react-core';
import { normalizeColor } from 'grommet/utils';
import { StyledTableCell } from './table-cell';


import { ResizingControl, ResizeHandle } from './table-header-cell/resizing-control';

const StyledHeaderCell = styled(StyledTableCell)`
    outline: none;
    position: relative;
    overflow: visible;
    padding-right: ${props => props.theme.global.edgeSize.xxsmall};
    padding-left: ${props => props.theme.global.edgeSize.xxsmall};
    &:first-child {
      padding-left: ${props => props.theme.global.edgeSize.xsmall};
    }
    &:nth-last-child(2) ${ResizeHandle} {
      width: ${props => props.theme.global.edgeSize.xxsmall};
      right: 1px;
    }
    ${props => props.noUserSelect && `
      user-select: none;
    `}
    ${props => props.isDraggable && `
      cursor: pointer;
    `}
    ${props => props.cellAlign === 'right' && `
       padding-left: ${props.theme.global.edgeSize.xxsmall};
       padding-right: ${props.theme.global.edgeSize.xxsmall};
       text-align: right;
    `}
    ${props => props.cellAlign === 'center' && `
      text-align: center;
    `}
    ${props => props.dimmed && `
      &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: ${normalizeColor('background', props.theme)};
        opacity: 0.7;
        pointer-events: none;
        z-index: 400;
      },
    `}
    ${props => props.noWrap && `
      white-space: nowrap;
    `}
`;

class TableHeaderCellBase extends React.PureComponent {
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
      column, tableColumn,
      showGroupingControls, onGroup, groupingEnabled,
      draggingEnabled,
      resizingEnabled, onWidthChange, onWidthDraft, onWidthDraftCancel,
      tableRow, children,
      // @deprecated
      showSortingControls, sortingDirection, sortingEnabled, onSort, before,
      ...restProps
    } = this.props;

    // eslint-disable-next-line no-unused-vars
    const { dragging } = this.state;
    // eslint-disable-next-line no-unused-vars
    const align = (tableColumn && tableColumn.align) || 'left';
    const cellLayout = (
      <StyledHeaderCell
        scope='col'
        noUserSelect={draggingEnabled}
        isDraggable={draggingEnabled}
        cellAlign={align}
        dimmed={dragging || (tableColumn && tableColumn.draft)}
        noWrap={!(tableColumn && tableColumn.wordWrapEnabled)}
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
          />
        )}
      </StyledHeaderCell>
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

TableHeaderCellBase.propTypes = {
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

TableHeaderCellBase.defaultProps = {
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

export const TableHeaderCell = TableHeaderCellBase;
