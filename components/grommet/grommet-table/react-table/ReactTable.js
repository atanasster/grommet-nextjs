/* eslint-disable no-nested-ternary,no-shadow,no-param-reassign,
prefer-destructuring,no-mixed-operators */
import React, { Component } from 'react';
import _ from './utils';
import defaultProps from './defaultProps';

export default class ReactTable extends Component {
  static defaultProps = defaultProps;
  constructor(props) {
    super();
    this.state = {
      page: 0,
      pageSize: props.defaultPageSize,
      sorted: props.defaultSorted,
      expanded: props.defaultExpanded,
      filtered: props.defaultFiltered,
      resized: props.defaultResized,
      currentlyResizing: false,
      skipNextSort: false,
    };
  }

  getResolvedState = (props, state) => {
    const resolvedState = {
      ..._.compactObject(this.state),
      ..._.compactObject(this.props),
      ..._.compactObject(state),
      ..._.compactObject(props),
    };
    return resolvedState;
  }

  componentWillMount() {
    this.setStateWithData(this.getDataModel(this.getResolvedState()));
  }

  componentDidMount() {
    this.fireFetchData();
  }

  componentWillReceiveProps(nextProps, nextState) {
    const oldState = this.getResolvedState();
    const newState = this.getResolvedState(nextProps, nextState);

    // Do a deep compare of new and old `defaultOption` and
    // if they are different reset `option = defaultOption`
    const defaultableOptions = ['sorted', 'filtered', 'resized', 'expanded'];
    defaultableOptions.forEach((x) => {
      const defaultName = `default${x.charAt(0).toUpperCase() + x.slice(1)}`;
      if (
        JSON.stringify(oldState[defaultName]) !==
          JSON.stringify(newState[defaultName])
      ) {
        newState[x] = newState[defaultName];
      }
    });

    // If they change these table options, we need to reset defaults
    // or else we could get into a state where the user has changed the UI
    // and then disabled the ability to change it back.
    // e.g. If `filterable` has changed, set `filtered = defaultFiltered`
    const resettableOptions = ['sortable', 'filterable', 'resizable'];
    resettableOptions.forEach((x) => {
      if (oldState[x] !== newState[x]) {
        const baseName = x.replace('able', '');
        const optionName = `${baseName}ed`;
        const defaultName = `default${optionName.charAt(0).toUpperCase() +
            optionName.slice(1)}`;
        newState[optionName] = newState[defaultName];
      }
    });

    // Props that trigger a data update
    if (
      oldState.data !== newState.data ||
        oldState.columns !== newState.columns ||
        oldState.pivotBy !== newState.pivotBy ||
        oldState.sorted !== newState.sorted ||
        oldState.filtered !== newState.filtered
    ) {
      this.setStateWithData(this.getDataModel(newState));
    }
  }

  setStateWithData(newState, cb) {
    const oldState = this.getResolvedState();
    const newResolvedState = this.getResolvedState({}, newState);
    const { freezeWhenExpanded } = newResolvedState;

    // Default to unfrozen state
    newResolvedState.frozen = false;

    // If freezeWhenExpanded is set, check for frozen conditions
    if (freezeWhenExpanded) {
      // if any rows are expanded, freeze the existing data and sorting
      const keys = Object.keys(newResolvedState.expanded);
      for (let i = 0; i < keys.length; i += 1) {
        if (newResolvedState.expanded[keys[i]]) {
          newResolvedState.frozen = true;
          break;
        }
      }
    }

    // If the data isn't frozen and either the data or
    // sorting model has changed, update the data
    if (
      (oldState.frozen && !newResolvedState.frozen) ||
        oldState.sorted !== newResolvedState.sorted ||
        oldState.filtered !== newResolvedState.filtered ||
        oldState.showFilters !== newResolvedState.showFilters ||
        (!newResolvedState.frozen &&
          oldState.resolvedData !== newResolvedState.resolvedData)
    ) {
      // Handle collapseOnsortedChange & collapseOnDataChange
      if (
        (oldState.sorted !== newResolvedState.sorted &&
            this.props.collapseOnSortingChange) ||
          oldState.filtered !== newResolvedState.filtered ||
          oldState.showFilters !== newResolvedState.showFilters ||
          (oldState.sortedData &&
            !newResolvedState.frozen &&
            oldState.resolvedData !== newResolvedState.resolvedData &&
            this.props.collapseOnDataChange)
      ) {
        newResolvedState.expanded = {};
      }

      Object.assign(newResolvedState, this.getSortedData(newResolvedState));
    }

    // Set page to 0 if filters change
    if (oldState.filtered !== newResolvedState.filtered) {
      newResolvedState.page = 0;
    }

    // Calculate pageSize all the time
    if (newResolvedState.sortedData) {
      newResolvedState.pages = newResolvedState.manual
        ? newResolvedState.pages
        : Math.ceil(
          newResolvedState.sortedData.length / newResolvedState.pageSize,
        );
      newResolvedState.page = Math.max(
        newResolvedState.page >= newResolvedState.pages
          ? newResolvedState.pages - 1
          : newResolvedState.page,
        0,
      );
    }

    return this.setState(newResolvedState, () => {
      if (cb) { cb(); }
      if (
        oldState.page !== newResolvedState.page ||
          oldState.pageSize !== newResolvedState.pageSize ||
          oldState.sorted !== newResolvedState.sorted ||
          oldState.filtered !== newResolvedState.filtered
      ) {
        this.fireFetchData();
      }
    });
  }

  getDataModel = (newState) => {
    const {
      columns,
      pivotBy = [],
      data,
      pivotIDKey,
      pivotValKey,
      subRowsKey,
      aggregatedKey,
      nestingLevelKey,
      originalKey,
      indexKey,
      groupedByPivotKey,
      SubComponent,
    } = newState;

    // Determine Header Groups
    let hasHeaderGroups = false;
    columns.forEach((column) => {
      if (column.columns) {
        hasHeaderGroups = true;
      }
    });

    let columnsWithExpander = [...columns];

    let expanderColumn = columns.find(
      col =>
        col.expander ||
          (col.columns && col.columns.some(col2 => col2.expander)),
    );
    // The actual expander might be in the columns field of a group column
    if (expanderColumn && !expanderColumn.expander) {
      expanderColumn = expanderColumn.columns.find(col => col.expander);
    }

    // If we have SubComponent's we need to make sure we have an expander column
    if (SubComponent && !expanderColumn) {
      expanderColumn = { expander: true };
      columnsWithExpander = [expanderColumn, ...columnsWithExpander];
    }

    const makeDecoratedColumn = (column, parentColumn) => {
      let dcol;
      if (column.expander) {
        dcol = {
          ...this.props.column,
          ...this.props.expanderDefaults,
          ...column,
        };
      } else {
        dcol = {
          ...this.props.column,
          ...column,
        };
      }

      // Ensure minWidth is not greater than maxWidth if set
      if (dcol.maxWidth < dcol.minWidth) {
        dcol.minWidth = dcol.maxWidth;
      }

      if (parentColumn) {
        dcol.parentColumn = parentColumn;
      }

      // First check for string accessor
      if (typeof dcol.accessor === 'string') {
        dcol.id = dcol.id || dcol.accessor;
        const accessorString = dcol.accessor;
        dcol.accessor = row => _.get(row, accessorString);
        return dcol;
      }

      // Fall back to functional accessor (but require an ID)
      if (dcol.accessor && !dcol.id) {
        console.warn(dcol);
        throw new Error(
          'A column id is required if using a non-string accessor for column above.',
        );
      }

      // Fall back to an undefined accessor
      if (!dcol.accessor) {
        dcol.accessor = () => undefined;
      }

      return dcol;
    };

    const allDecoratedColumns = [];

    // Decorate the columns
    const decorateAndAddToAll = (column, parentColumn) => {
      const decoratedColumn = makeDecoratedColumn(column, parentColumn);
      allDecoratedColumns.push(decoratedColumn);
      return decoratedColumn;
    };

    const decoratedColumns = columnsWithExpander.map((column) => {
      if (column.columns) {
        return {
          ...column,
          columns: column.columns.map(d => decorateAndAddToAll(d, column)),
        };
      }
      return decorateAndAddToAll(column);
    });

    // Build the visible columns, headers and flat column list
    let visibleColumns = decoratedColumns.slice();
    let allVisibleColumns = [];

    visibleColumns = visibleColumns.map((column) => {
      if (column.columns) {
        const visibleSubColumns = column.columns.filter(d => (
          pivotBy.indexOf(d.id) > -1
            ? false
            : _.getFirstDefined(d.show, true)
        ));
        return {
          ...column,
          columns: visibleSubColumns,
        };
      }
      return column;
    });

    visibleColumns = visibleColumns.filter(column => (
      column.columns
        ? column.columns.length
        : pivotBy.indexOf(column.id) > -1
          ? false
          : _.getFirstDefined(column.show, true)
    ));

    // Find any custom pivot location
    const pivotIndex = visibleColumns.findIndex(col => col.pivot);

    // Handle Pivot Columns
    if (pivotBy.length) {
      // Retrieve the pivot columns in the correct pivot order
      const pivotColumns = [];
      pivotBy.forEach((pivotID) => {
        const found = allDecoratedColumns.find(d => d.id === pivotID);
        if (found) {
          pivotColumns.push(found);
        }
      });

      const PivotParentColumn = pivotColumns.reduce(
        (prev, current) =>
          prev && prev === current.parentColumn && current.parentColumn,
        pivotColumns[0].parentColumn,
      );

      let PivotGroupHeader = hasHeaderGroups && PivotParentColumn.Header;
      PivotGroupHeader = PivotGroupHeader || (() => <strong>Pivoted</strong>);

      let pivotColumnGroup = {
        Header: PivotGroupHeader,
        columns: pivotColumns.map(col => ({
          ...this.props.pivotDefaults,
          ...col,
          pivoted: true,
        })),
      };

      // Place the pivotColumns back into the visibleColumns
      if (pivotIndex >= 0) {
        pivotColumnGroup = {
          ...visibleColumns[pivotIndex],
          ...pivotColumnGroup,
        };
        visibleColumns.splice(pivotIndex, 1, pivotColumnGroup);
      } else {
        visibleColumns.unshift(pivotColumnGroup);
      }
    }

    // Build Header Groups
    const headerGroups = [];
    let currentSpan = [];

    // A convenience function to add a header and reset the currentSpan
    const addHeader = (columns, column) => {
      headerGroups.push({
        ...this.props.column,
        ...column,
        columns,
      });
      currentSpan = [];
    };

    // Build flast list of allVisibleColumns and HeaderGroups
    visibleColumns.forEach((column) => {
      if (column.columns) {
        allVisibleColumns = allVisibleColumns.concat(column.columns);
        if (currentSpan.length > 0) {
          addHeader(currentSpan);
        }
        addHeader(column.columns, column);
        return;
      }
      allVisibleColumns.push(column);
      currentSpan.push(column);
    });
    if (hasHeaderGroups && currentSpan.length > 0) {
      addHeader(currentSpan);
    }

    // Access the data
    const accessRow = (d, i, level = 0) => {
      const row = {
        [originalKey]: d,
        [indexKey]: i,
        [subRowsKey]: d[subRowsKey],
        [nestingLevelKey]: level,
      };
      allDecoratedColumns.forEach((column) => {
        if (column.expander) return;
        row[column.id] = column.accessor(d);
      });
      if (row[subRowsKey]) {
        row[subRowsKey] = row[subRowsKey].map((d, i) =>
          accessRow(d, i, level + 1));
      }
      return row;
    };
    let resolvedData = data.map((d, i) => accessRow(d, i));

    const aggregatingColumns = allVisibleColumns.filter(
      d => !d.expander && d.aggregate,
    );

    // If pivoting, recursively group the data
    const aggregate = (rows) => {
      const aggregationValues = {};
      aggregatingColumns.forEach((column) => {
        const values = rows.map(d => d[column.id]);
        aggregationValues[column.id] = column.aggregate(values, rows);
      });
      return aggregationValues;
    };
    if (pivotBy.length) {
      const groupRecursively = (rows, keys, i = 0) => {
        // This is the last level, just return the rows
        if (i === keys.length) {
          return rows;
        }
        // Group the rows together for this level
        let groupedRows = Object.entries(
          _.groupBy(rows, keys[i]),
        ).map(([key, value]) => ({
          [pivotIDKey]: keys[i],
          [pivotValKey]: key,
          [keys[i]]: key,
          [subRowsKey]: value,
          [nestingLevelKey]: i,
          [groupedByPivotKey]: true,
        }));
        // Recurse into the subRows
        groupedRows = groupedRows.map((rowGroup) => {
          const subRows = groupRecursively(rowGroup[subRowsKey], keys, i + 1);
          return {
            ...rowGroup,
            [subRowsKey]: subRows,
            [aggregatedKey]: true,
            ...aggregate(subRows),
          };
        });
        return groupedRows;
      };
      resolvedData = groupRecursively(resolvedData, pivotBy);
    }

    return {
      ...newState,
      resolvedData,
      allVisibleColumns,
      headerGroups,
      allDecoratedColumns,
      hasHeaderGroups,
    };
  }

  getSortedData = (resolvedState) => {
    const {
      manual,
      sorted,
      filtered,
      defaultFilterMethod,
      resolvedData,
      allVisibleColumns,
      allDecoratedColumns,
    } = resolvedState;

    const sortMethodsByColumnID = {};

    allDecoratedColumns.filter(col => col.sortMethod).forEach((col) => {
      sortMethodsByColumnID[col.id] = col.sortMethod;
    });

    // Resolve the data from either manual data or sorted data
    return {
      sortedData: manual
        ? resolvedData
        : this.sortData(
          this.filterData(
            resolvedData,
            filtered,
            defaultFilterMethod,
            allVisibleColumns,
          ),
          sorted,
          sortMethodsByColumnID,
        ),
    };
  };

  fireFetchData = () => {
    this.props.onFetchData(this.getResolvedState(), this);
  };


  getStateOrProp = key => _.getFirstDefined(this.state[key], this.props[key]);

  filterData= (data, filtered, defaultFilterMethod, allVisibleColumns) => {
    let filteredData = data;
    if (filtered.length) {
      filteredData = filtered.reduce((filteredSoFar, nextFilter) => {
        const column = allVisibleColumns.find(x => x.id === nextFilter.id);

        // Don't filter hidden columns or columns that have had their filters disabled
        if (!column || column.filterable === false) {
          return filteredSoFar;
        }

        const filterMethod = column.filterMethod || defaultFilterMethod;

        // If 'filterAll' is set to true, pass the entire dataset to the filter method
        if (column.filterAll) {
          return filterMethod(nextFilter, filteredSoFar, column);
        }
        return filteredSoFar.filter(row => (
          filterMethod(nextFilter, row, column)
        ));
      }, filteredData);

      // Apply the filter to the subrows if we are pivoting, and then
      // filter any rows without subcolumns because it would be strange to show
      filteredData = filteredData
        .map((row) => {
          if (!row[this.props.subRowsKey]) {
            return row;
          }
          return {
            ...row,
            [this.props.subRowsKey]: this.filterData(
              row[this.props.subRowsKey],
              filtered,
              defaultFilterMethod,
              allVisibleColumns,
            ),
          };
        })
        .filter((row) => {
          if (!row[this.props.subRowsKey]) {
            return true;
          }
          return row[this.props.subRowsKey].length > 0;
        });
    }

    return filteredData;
  };

  sortData = (data, sorted, sortMethodsByColumnID = {}) => {
    if (!sorted.length) {
      return data;
    }

    const sortedData = (this.props.orderByMethod || _.orderBy)(
      data,
      sorted.map((sort) => {
        // Support custom sorting methods for each column
        if (sortMethodsByColumnID[sort.id]) {
          return (a, b) => (
            sortMethodsByColumnID[sort.id](a[sort.id], b[sort.id], sort.desc)
          );
        }
        return (a, b) => (
          this.props.defaultSortMethod(a[sort.id], b[sort.id], sort.desc)
        );
      }),
      sorted.map(d => !d.desc),
      this.props.indexKey,
    );

    sortedData.forEach((row) => {
      if (!row[this.props.subRowsKey]) {
        return;
      }
      row[this.props.subRowsKey] = this.sortData(
        row[this.props.subRowsKey],
        sorted,
        sortMethodsByColumnID,
      );
    });

    return sortedData;
  };

  getMinRows = () => _.getFirstDefined(
    this.props.minRows,
    this.getStateOrProp('pageSize'),
  );

  // User actions
  onPageChange = (page) => {
    const { onPageChange, collapseOnPageChange } = this.props;

    const newState = { page };
    if (collapseOnPageChange) {
      newState.expanded = {};
    }
    this.setStateWithData(newState, () => (
      onPageChange && onPageChange(page)
    ));
  }

  onPageSizeChange = (newPageSize) => {
    const { onPageSizeChange } = this.props;
    const { pageSize, page } = this.getResolvedState();

    // Normalize the page to display
    const currentRow = pageSize * page;
    const newPage = Math.floor(currentRow / newPageSize);

    this.setStateWithData(
      {
        pageSize: newPageSize,
        page: newPage,
      },
      () => (
        onPageSizeChange && onPageSizeChange(newPageSize, newPage)
      ),
    );
  };

  sortColumn = (column, additive) => {
    const { sorted, skipNextSort, defaultSortDesc } = this.getResolvedState();

    const firstSortDirection = Object.prototype.hasOwnProperty.call(column, 'defaultSortDesc')
      ? column.defaultSortDesc
      : defaultSortDesc;
    const secondSortDirection = !firstSortDirection;

    // we can't stop event propagation from the column resize move handlers
    // attached to the document because of react's synthetic events
    // so we have to prevent the sort function from actually sorting
    // if we click on the column resize element within a header.
    if (skipNextSort) {
      this.setStateWithData({
        skipNextSort: false,
      });
      return;
    }

    const { onSortedChange } = this.props;

    let newSorted = _.clone(sorted || []).map((d) => {
      d.desc = _.isSortingDesc(d);
      return d;
    });
    if (!_.isArray(column)) {
      // Single-Sort
      const existingIndex = newSorted.findIndex(d => d.id === column.id);
      if (existingIndex > -1) {
        const existing = newSorted[existingIndex];
        if (existing.desc === secondSortDirection) {
          if (additive) {
            newSorted.splice(existingIndex, 1);
          } else {
            existing.desc = firstSortDirection;
            newSorted = [existing];
          }
        } else {
          existing.desc = secondSortDirection;
          if (!additive) {
            newSorted = [existing];
          }
        }
      } else if (additive) {
        newSorted.push({
          id: column.id,
          desc: firstSortDirection,
        });
      } else {
        newSorted = [
          {
            id: column.id,
            desc: firstSortDirection,
          },
        ];
      }
    } else {
      // Multi-Sort
      const existingIndex = newSorted.findIndex(d => d.id === column[0].id);
      // Existing Sorted Column
      if (existingIndex > -1) {
        const existing = newSorted[existingIndex];
        if (existing.desc === secondSortDirection) {
          if (additive) {
            newSorted.splice(existingIndex, column.length);
          } else {
            column.forEach((d, i) => {
              newSorted[existingIndex + i].desc = firstSortDirection;
            });
          }
        } else {
          column.forEach((d, i) => {
            newSorted[existingIndex + i].desc = secondSortDirection;
          });
        }
        if (!additive) {
          newSorted = newSorted.slice(existingIndex, column.length);
        }
        // New Sort Column
      } else if (additive) {
        newSorted = newSorted.concat(
          column.map(d => ({
            id: d.id,
            desc: firstSortDirection,
          })),
        );
      } else {
        newSorted = column.map(d => ({
          id: d.id,
          desc: firstSortDirection,
        }));
      }
    }

    this.setStateWithData(
      {
        page:
            (!sorted.length && newSorted.length) || !additive
              ? 0
              : this.state.page,
        sorted: newSorted,
      },
      () => (
        onSortedChange && onSortedChange(newSorted, column, additive)
      ),
    );
  };

  filterColumn = (column, value) => {
    const { filtered } = this.getResolvedState();
    const { onFilteredChange } = this.props;

    // Remove old filter first if it exists
    const newFiltering = (filtered || []).filter(x => (
      x.id !== column.id
    ));

    if (value !== '') {
      newFiltering.push({
        id: column.id,
        value,
      });
    }

    this.setStateWithData(
      {
        filtered: newFiltering,
      },
      () => (
        onFilteredChange && onFilteredChange(newFiltering, column, value)
      ),
    );
  };

  resizeColumnStart = (event, column, isTouch) => {
    event.stopPropagation();
    const parentWidth = event.target.parentElement.getBoundingClientRect()
      .width;

    let pageX;
    if (isTouch) {
      pageX = event.changedTouches[0].pageX;
    } else {
      pageX = event.pageX;
    }

    this.trapEvents = true;
    this.setStateWithData(
      {
        currentlyResizing: {
          id: column.id,
          startX: pageX,
          parentWidth,
        },
      },
      () => {
        if (isTouch) {
          document.addEventListener('touchmove', this.resizeColumnMoving);
          document.addEventListener('touchcancel', this.resizeColumnEnd);
          document.addEventListener('touchend', this.resizeColumnEnd);
        } else {
          document.addEventListener('mousemove', this.resizeColumnMoving);
          document.addEventListener('mouseup', this.resizeColumnEnd);
          document.addEventListener('mouseleave', this.resizeColumnEnd);
        }
      },
    );
  };

  resizeColumnMoving = (event) => {
    event.stopPropagation();
    const { onResizedChange } = this.props;
    const { resized, currentlyResizing } = this.getResolvedState();

    // Delete old value
    const newResized = resized.filter(x => x.id !== currentlyResizing.id);

    let pageX;

    if (event.type === 'touchmove') {
      pageX = event.changedTouches[0].pageX;
    } else if (event.type === 'mousemove') {
      pageX = event.pageX;
    }

    // Set the min size to 10 to account for margin and border or else the
    // group headers don't line up correctly
    const newWidth = Math.max(
      currentlyResizing.parentWidth + pageX - currentlyResizing.startX,
      11,
    );

    newResized.push({
      id: currentlyResizing.id,
      value: newWidth,
    });

    this.setStateWithData(
      {
        resized: newResized,
      },
      () => (
        onResizedChange && onResizedChange(newResized, event)
      ),
    );
  };

  resizeColumnEnd = (event) => {
    event.stopPropagation();
    const isTouch = event.type === 'touchend' || event.type === 'touchcancel';

    if (isTouch) {
      document.removeEventListener('touchmove', this.resizeColumnMoving);
      document.removeEventListener('touchcancel', this.resizeColumnEnd);
      document.removeEventListener('touchend', this.resizeColumnEnd);
    }

    // If its a touch event clear the mouse one's as well because sometimes
    // the mouseDown event gets called as well, but the mouseUp event doesn't
    document.removeEventListener('mousemove', this.resizeColumnMoving);
    document.removeEventListener('mouseup', this.resizeColumnEnd);
    document.removeEventListener('mouseleave', this.resizeColumnEnd);

    // The touch events don't propagate up to the sorting's onMouseDown event so
    // no need to prevent it from happening or else the first click after a touch
    // event resize will not sort the column.
    if (!isTouch) {
      this.setStateWithData({
        skipNextSort: true,
        currentlyResizing: false,
      });
    }
  };

  render() {
    const resolvedState = this.getResolvedState();
    const {
      children,
      getProps,
      getTableProps,
      getTheadGroupProps,
      getTheadGroupTrProps,
      getTheadProps,
      getTheadTrProps,
      getTheadThProps,
      getTheadFilterProps,
      getTheadFilterTrProps,
      getTheadFilterThProps,
      getFilterInputProps,
      getTbodyProps,
      getTrGroupProps,
      getTrProps,
      getTdProps,
      getExpanderProps,
      getTfootProps,
      getTfootTrProps,
      getTfootTdProps,
      getPaginationProps,
      getLoadingProps,
      getNoDataProps,
      getResizerProps,
      showPagination,
      showPaginationTop,
      showPaginationBottom,
      manual,
      loadingText,
      noDataText,
      sortable,
      multiSort,
      resizable,
      filterable,
      // Pivoting State
      pivotIDKey,
      pivotValKey,
      pivotBy,
      subRowsKey,
      aggregatedKey,
      originalKey,
      indexKey,
      groupedByPivotKey,
      expanderTdDefaultProps,
      // State
      loading,
      pageSize,
      page,
      sorted,
      filtered,
      resized,
      expanded,
      pages,
      onExpandedChange,
      // Components
      TableComponent,
      TheadComponent,
      TbodyComponent,
      TrGroupComponent,
      TrComponent,
      ThComponent,
      TdComponent,
      CellTextComponent,
      TfootComponent,
      PaginationComponent,
      LoadingComponent,
      SubComponent,
      NoDataComponent,
      ResizerComponent,
      ExpanderComponent,
      PivotValueComponent,
      PivotComponent,
      AggregatedComponent,
      FilterComponent,
      PadRowComponent,
      // Data model
      resolvedData,
      allVisibleColumns,
      headerGroups,
      hasHeaderGroups,
      // Sorted Data
      sortedData,
    } = resolvedState;

    // Pagination
    const startRow = pageSize * page;
    const endRow = startRow + pageSize;
    let pageRows = manual ? resolvedData : sortedData.slice(startRow, endRow);
    const minRows = this.getMinRows();
    const padRows = _.range(Math.max(minRows - pageRows.length, 0));

    const hasColumnFooter = allVisibleColumns.some(d => d.Footer);
    const hasFilters = filterable || allVisibleColumns.some(d => d.filterable);

    const recurseRowsViewIndex = (rows, path = [], index = -1) => ([
      rows.map((row, i) => {
        index += 1;
        const rowWithViewIndex = {
          ...row,
          viewIndex: index,
        };
        const newPath = path.concat([i]);
        if (rowWithViewIndex[subRowsKey] && _.get(expanded, newPath)) {
          [rowWithViewIndex[subRowsKey], index] = recurseRowsViewIndex(
            rowWithViewIndex[subRowsKey],
            newPath,
            index,
          );
        }
        return rowWithViewIndex;
      }),
      index,
    ]);
    [pageRows] = recurseRowsViewIndex(pageRows);

    const canPrevious = page > 0;
    const canNext = page + 1 < pages;

    const rowMinWidth = _.sum(
      allVisibleColumns.map((d) => {
        const resizedColumn = resized.find(x => x.id === d.id) || {};
        return _.getFirstDefined(resizedColumn.value, d.width, d.minWidth);
      }),
    );

    let rowIndex = -1;

    const finalState = {
      ...resolvedState,
      startRow,
      endRow,
      pageRows,
      minRows,
      padRows,
      hasColumnFooter,
      canPrevious,
      canNext,
      rowMinWidth,
    };

    const rootProps = getProps(finalState, undefined, undefined, this);
    const tableProps = getTableProps(finalState, undefined, undefined, this);
    const tBodyProps = getTbodyProps(finalState, undefined, undefined, this);
    const loadingProps = getLoadingProps(finalState, undefined, undefined, this);
    const noDataProps = getNoDataProps(finalState, undefined, undefined, this);

    // Visual Components

    const makeHeaderGroup = (column, i) => {
      const resizedValue = col =>
        (resized.find(x => x.id === col.id) || {}).value;
      const flex = _.sum(
        column.columns.map(
          col => (col.width || resizedValue(col) ? 0 : col.minWidth),
        ),
      );
      const width = _.sum(
        column.columns.map(col =>
          _.getFirstDefined(resizedValue(col), col.width, col.minWidth)),
      );
      const maxWidth = _.sum(
        column.columns.map(col =>
          _.getFirstDefined(resizedValue(col), col.width, col.maxWidth)),
      );

      const theadGroupThProps = getTheadGroupProps(finalState, undefined, column, this);
      const columnHeaderProps = column.getHeaderProps(finalState, undefined, column, this);

      const rest = {
        ...theadGroupThProps,
        ...columnHeaderProps,
        CellTextComponent,
      };
      const flexStyles = {
        flex: `${flex} 0 auto`,
        width: _.asPx(width),
        maxWidth: _.asPx(maxWidth),
      };

      return (
        <ThComponent
          key={`${i}-${column.id}`}
          style={flexStyles}
          {...rest}
        >
          {_.normalizeComponent(column.Header, {
            data: sortedData,
            column,
          })}
        </ThComponent>
      );
    };

    const makeHeaderGroups = () => {
      const theadGroupProps = getTheadGroupProps(finalState, undefined, undefined, this);
      const theadGroupTrProps = getTheadGroupTrProps(finalState, undefined, undefined, this);
      return (
        <TheadComponent
          style={{ minWidth: `${rowMinWidth}px` }}
          {...theadGroupProps}
        >
          <TrComponent
            {...theadGroupTrProps}
          >
            {headerGroups.map(makeHeaderGroup)}
          </TrComponent>
        </TheadComponent>
      );
    };

    const makeHeader = (column, i) => {
      const resizedCol = resized.find(x => x.id === column.id) || {};
      const sort = sorted.find(d => d.id === column.id);
      const show =
        typeof column.show === 'function' ? column.show() : column.show;
      const width = _.getFirstDefined(
        resizedCol.value,
        column.width,
        column.minWidth,
      );
      const maxWidth = _.getFirstDefined(
        resizedCol.value,
        column.width,
        column.maxWidth,
      );
      const theadThProps = getTheadThProps(finalState, undefined, column, this);
      const columnHeaderProps = column.getHeaderProps(finalState, undefined, column, this);

      const rest = {
        ...theadThProps,
        ...columnHeaderProps,
        CellTextComponent,
      };

      const isResizable = _.getFirstDefined(column.resizable, resizable, false);
      const resizer = isResizable
        ? (<ResizerComponent
          onMouseDown={e => this.resizeColumnStart(e, column, false)}
          onTouchStart={e => this.resizeColumnStart(e, column, true)}
          {...getResizerProps('finalState', undefined, column, this)}
        />)
        : null;

      const isSortable = _.getFirstDefined(column.sortable, sortable, false);

      return (
        <ThComponent
          key={`${i}-${column.id}`}
          sort={sort && (sort.desc ? '-sort-desc' : '-sort-asc')}
          resizable={isResizable}
          sortable={isSortable}
          hidden={!show}
          pivot={pivotBy && pivotBy.slice(0, -1).includes(column.id)}

          style={{
            flex: `${width} 0 auto`,
            width: _.asPx(width),
            maxWidth: _.asPx(maxWidth),
          }}
          toggleSort={(e) => {
            if (isSortable) this.sortColumn(column, multiSort ? e.shiftKey : false);
          }}
          {...rest}
        >
          {_.normalizeComponent(column.Header, {
            data: sortedData,
            column,
          })}
          {resizer}
        </ThComponent>
      );
    };

    const makeHeaders = () => {
      const theadProps = getTheadProps(finalState, undefined, undefined, this);
      const theadTrProps = getTheadTrProps(finalState, undefined, undefined, this);
      return (
        <TheadComponent
          header={true}
          style={{
            minWidth: `${rowMinWidth}px`,
          }}
          {...theadProps}
        >
          <TrComponent
            {...theadTrProps}
          >
            {allVisibleColumns.map(makeHeader)}
          </TrComponent>
        </TheadComponent>
      );
    };

    const makeFilter = (column, i) => {
      const resizedCol = resized.find(x => x.id === column.id) || {};
      const width = _.getFirstDefined(
        resizedCol.value,
        column.width,
        column.minWidth,
      );
      const maxWidth = _.getFirstDefined(
        resizedCol.value,
        column.width,
        column.maxWidth,
      );
      const theadFilterThProps = getTheadFilterThProps(finalState, undefined, column, this);
      const filterInputProps = getFilterInputProps(finalState, undefined, column, this);
      const columnHeaderProps = column.getFilterProps(finalState, undefined, column, this);

      const rest = {
        ...theadFilterThProps,
        ...columnHeaderProps,
        CellTextComponent,
      };

      const filter = filtered.find(filter => filter.id === column.id);

      const ResolvedFilterComponent = column.Filter || FilterComponent;

      const isFilterable = _.getFirstDefined(
        column.filterable,
        filterable,
        false,
      );

      return (
        <ThComponent
          key={`${i}-${column.id}`}
          style={{
            flex: `${width} 0 auto`,
            width: _.asPx(width),
            maxWidth: _.asPx(maxWidth),
          }}
          {...rest}
        >
          {isFilterable
            ? _.normalizeComponent(
              ResolvedFilterComponent,
              {
                ...filterInputProps,
                column,
                filter,
                onChange: value => this.filterColumn(column, value),

              },
              undefined,
            )
            : null}
        </ThComponent>
      );
    };

    const makeFilters = () => {
      const theadFilterProps = getTheadFilterProps(finalState, undefined, undefined, this);
      const theadFilterTrProps = getTheadFilterTrProps(finalState, undefined, undefined, this);
      return (
        <TheadComponent
          filters={true}
          style={{
            minWidth: `${rowMinWidth}px`,
          }}
          {...theadFilterProps}
        >
          <TrComponent
            {...theadFilterTrProps}
          >
            {allVisibleColumns.map(makeFilter)}
          </TrComponent>
        </TheadComponent>
      );
    };

    const makePageRow = (row, i, path = []) => {
      const rowInfo = {
        original: row[originalKey],
        row,
        index: row[indexKey],
        viewIndex: rowIndex += 1,
        pageSize,
        page,
        level: path.length,
        nestingPath: path.concat([i]),
        aggregated: row[aggregatedKey],
        groupedByPivot: row[groupedByPivotKey],
        subRows: row[subRowsKey],
      };

      const isExpanded = _.get(expanded, rowInfo.nestingPath);
      const trGroupProps = getTrGroupProps(finalState, rowInfo, undefined, this);
      const expanderProps = getExpanderProps(finalState);
      const trProps = getTrProps(row.viewIndex % 2, finalState, rowInfo, undefined, this);
      return (
        <TrGroupComponent key={rowInfo.nestingPath.join('_')} {...trGroupProps}>
          <TrComponent
            {...trProps}
          >
            {allVisibleColumns.map((column, i2) => {
              let defaultTdProps = {};
              const resizedCol = resized.find(x => x.id === column.id) || {};
              const show =
                typeof column.show === 'function' ? column.show() : column.show;
              const width = _.getFirstDefined(
                resizedCol.value,
                column.width,
                column.minWidth,
              );
              const maxWidth = _.getFirstDefined(
                resizedCol.value,
                column.width,
                column.maxWidth,
              );
              const tdProps = getTdProps(finalState, rowInfo, column, this);
              const columnProps = column.getProps(finalState, rowInfo, column, this);

              const cellInfo = {
                ...rowInfo,
                isExpanded,
                column: { ...column },
                value: rowInfo.row[column.id],
                pivoted: column.pivoted,
                expander: column.expander,
                resized,
                show,
                width,
                maxWidth,
                tdProps,
                columnProps,
              };

              let value = cellInfo.value;

              let useOnExpanderClick;
              let isBranch;
              let isPreview;

              const onExpanderClick = (e) => {
                let newExpanded = _.clone(expanded);
                if (isExpanded) {
                  newExpanded = _.set(newExpanded, cellInfo.nestingPath, false);
                } else {
                  newExpanded = _.set(newExpanded, cellInfo.nestingPath, {});
                }

                return this.setStateWithData(
                  {
                    expanded: newExpanded,
                  },
                  () => (
                    onExpandedChange &&
                      onExpandedChange(newExpanded, cellInfo.nestingPath, e)
                  ),
                );
              };

              // Default to a standard cell
              if (column.Cell) {
                value = _.normalizeComponent(
                  column.Cell,
                  cellInfo,
                  value,
                );
              }
              const cellProps = { ...tdProps, ...columnProps };
              let resolvedCell = <CellTextComponent value={value} {...cellProps} />;

              // Resolve Renderers
              const ResolvedAggregatedComponent =
                column.Aggregated ||
                (!column.aggregate ? AggregatedComponent : column.Cell);
              const ResolvedExpanderComponent =
                column.Expander || ExpanderComponent;
              const ResolvedPivotValueComponent =
                column.PivotValue || PivotValueComponent;
              const DefaultResolvedPivotComponent =
                PivotComponent ||
                (props => (
                  <div>
                    <ResolvedExpanderComponent {...{ ...props, expanderProps }} />
                    <ResolvedPivotValueComponent {...props} />
                  </div>
                ));
              const ResolvedPivotComponent =
                column.Pivot || DefaultResolvedPivotComponent;

              // Is this cell expandable?
              if (cellInfo.pivoted || cellInfo.expander) {
                // Make it expandable by defualt
                cellInfo.expandable = true;
                useOnExpanderClick = true;
                // If pivoted, has no subRows, and does not have a subComponent,
                // do not make expandable
                if (cellInfo.pivoted && !cellInfo.subRows && !SubComponent) {
                  cellInfo.expandable = false;
                }
              }

              if (cellInfo.pivoted) {
                // Is this column a branch?
                isBranch =
                  rowInfo.row[pivotIDKey] === column.id && cellInfo.subRows;
                // Should this column be blank?
                isPreview =
                  pivotBy.indexOf(column.id) >
                    pivotBy.indexOf(rowInfo.row[pivotIDKey]) && cellInfo.subRows;
                // Pivot Cell Render Override
                if (isBranch) {
                  // isPivot
                  resolvedCell = _.normalizeComponent(
                    ResolvedPivotComponent,
                    {
                      ...cellInfo,
                      value: row[pivotValKey],
                    },
                    row[pivotValKey],
                  );
                } else if (isPreview) {
                  // Show the pivot preview
                  resolvedCell = _.normalizeComponent(
                    ResolvedAggregatedComponent,
                    cellInfo,
                    value,
                  );
                } else {
                  resolvedCell = null;
                }
              } else if (cellInfo.aggregated) {
                resolvedCell = _.normalizeComponent(
                  ResolvedAggregatedComponent,
                  cellInfo,
                  value,
                );
              }

              if (cellInfo.expander) {
                defaultTdProps = expanderTdDefaultProps;
                resolvedCell = _.normalizeComponent(
                  ResolvedExpanderComponent,
                  { ...cellInfo, expanderProps },
                  row[pivotValKey],
                );
                if (pivotBy) {
                  if (cellInfo.groupedByPivot) {
                    resolvedCell = null;
                  }
                  if (!cellInfo.subRows && !SubComponent) {
                    resolvedCell = null;
                  }
                }
              }

              const resolvedOnExpanderClick = useOnExpanderClick
                ? onExpanderClick
                : () => {};

              // If there are multiple onClick events, make sure they don't
              // override eachother. This should maybe be expanded to handle all
              // function attributes
              const interactionProps = {
                onClick: resolvedOnExpanderClick,
              };

              if (tdProps.onClick) {
                interactionProps.onClick = (e) => {
                  tdProps.onClick(e, () => resolvedOnExpanderClick(e));
                };
              }

              if (columnProps.onClick) {
                interactionProps.onClick = (e) => {
                  columnProps.onClick(e, () => resolvedOnExpanderClick(e));
                };
              }

              // Return the cell
              return (
                <TdComponent
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${i2}-${column.id}`}
                  hidden={!show}
                  style={{
                    flex: `${width} 0 auto`,
                    width: _.asPx(width),
                    maxWidth: _.asPx(maxWidth),
                  }}
                  {...tdProps}
                  {...columnProps}
                  {...interactionProps}
                  {...defaultTdProps}
                >
                  {resolvedCell}
                </TdComponent>
              );
            })}
          </TrComponent>
          {rowInfo.subRows &&
            isExpanded &&
            rowInfo.subRows.map((d, i) =>
              makePageRow(d, i, rowInfo.nestingPath))}
          {SubComponent &&
            !rowInfo.subRows &&
            isExpanded &&
            SubComponent(rowInfo)}
        </TrGroupComponent>
      );
    };

    const makePadColumn = (column, i) => {
      const resizedCol = resized.find(x => x.id === column.id) || {};
      const show =
        typeof column.show === 'function' ? column.show() : column.show;
      const width = _.getFirstDefined(
        resizedCol.value,
        column.width,
        column.minWidth,
      );
      const flex = width;
      const maxWidth = _.getFirstDefined(
        resizedCol.value,
        column.width,
        column.maxWidth,
      );
      const tdProps = getTdProps(finalState, undefined, column, this);
      return (
        <TdComponent
          key={`${i}-${column.id}`}
          hidden={!show}
          style={{
            flex: `${flex} 0 auto`,
            width: _.asPx(width),
            maxWidth: _.asPx(maxWidth),
          }}
          {...tdProps}
        >
          {_.normalizeComponent(PadRowComponent)}
        </TdComponent>
      );
    };

    const makePadRow = (row, i) => {
      const trGroupProps = getTrGroupProps(
        finalState,
        undefined,
        undefined,
        this,
      );
      const trProps = getTrProps(row.viewIndex % 2, finalState, undefined, undefined, this);
      return (
        <TrGroupComponent key={i} {...trGroupProps}>
          <TrComponent
            padrow={true}
            even={(pageRows.length + i) % 2}
            {...trProps}
          >
            {allVisibleColumns.map(makePadColumn)}
          </TrComponent>
        </TrGroupComponent>
      );
    };

    const makeColumnFooter = (column, i) => {
      const resizedCol = resized.find(x => x.id === column.id) || {};
      const show =
        typeof column.show === 'function' ? column.show() : column.show;
      const width = _.getFirstDefined(
        resizedCol.value,
        column.width,
        column.minWidth,
      );
      const maxWidth = _.getFirstDefined(
        resizedCol.value,
        column.width,
        column.maxWidth,
      );
      const tFootTdProps = getTfootTdProps(finalState, undefined, undefined, this);
      const columnProps = column.getProps(finalState, undefined, column, this);
      const columnFooterProps = column.getFooterProps(finalState, undefined, column, this);


      return (
        <TdComponent
          key={`${i}-${column.id}`}
          hidden={!show}
          style={{
            flex: `${width} 0 auto`,
            width: _.asPx(width),
            maxWidth: _.asPx(maxWidth),
          }}
          {...columnProps}
          {...tFootTdProps}
          {...columnFooterProps}
        >
          {_.normalizeComponent(column.Footer, {
            data: sortedData,
            column,
          })}
        </TdComponent>
      );
    };

    const makeColumnFooters = () => {
      const tFootProps = getTfootProps(finalState, undefined, undefined, this);
      const tFootTrProps = getTfootTrProps(finalState, undefined, undefined, this);
      return (
        <TfootComponent
          style={{
            minWidth: `${rowMinWidth}px`,
          }}
          {...tFootProps}
        >
          <TrComponent
            {...tFootTrProps}
          >
            {allVisibleColumns.map(makeColumnFooter)}
          </TrComponent>
        </TfootComponent>
      );
    };

    const makePagination = () => {
      const paginationProps = getPaginationProps(finalState, undefined, undefined, this);
      return (
        <PaginationComponent
          {...resolvedState}
          pages={pages}
          canPrevious={canPrevious}
          canNext={canNext}
          onPageChange={this.onPageChange}
          onPageSizeChange={this.onPageSizeChange}
          {...paginationProps}
        />
      );
    };

    const makeTable = () => {
      const pagination = makePagination();
      return (
        <div {...rootProps} >
          {showPagination && showPaginationTop ? (
            <div>
              {pagination}
            </div>)
            : null}
          <TableComponent
            {...tableProps}
          >
            {hasHeaderGroups ? makeHeaderGroups() : null}
            {makeHeaders()}
            {hasFilters ? makeFilters() : null}
            <TbodyComponent
              style={{
                minWidth: `${rowMinWidth}px`,
              }}
              {...tBodyProps}
            >
              {pageRows.map((d, i) => makePageRow(d, i))}
              {padRows.map(makePadRow)}
            </TbodyComponent>
            {hasColumnFooter ? makeColumnFooters() : null}
          </TableComponent>
          {showPagination && showPaginationBottom ? (
            <div>
              {pagination}
            </div>)
            : null}
          {!pageRows.length &&
            <NoDataComponent {...noDataProps}>
              {_.normalizeComponent(noDataText)}
            </NoDataComponent>}
          <LoadingComponent
            loading={loading}
            loadingText={loadingText}
            {...loadingProps}
          />
        </div>
      );
    };

    // childProps are optionally passed to a function-as-a-child
    return children ? children(finalState, makeTable, this) : makeTable();
  }
}
