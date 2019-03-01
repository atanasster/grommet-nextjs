import * as React from 'react';
// base table filter row
import { TableFilterRow as TableFilterRowBase } from '@devexpress/dx-react-grid';
import { TableRow, TableCell, TextInput } from 'grommet';

const SearchInput = TextInput;

const defaultMessages = {
  filterPlaceholder: 'Filter...',
};

// custom plugin components
const TableFilterCell = ({
  filter,
  onFilter,
  children,
  column,
  tableRow,
  tableColumn,
  getMessage,
  filteringEnabled,
  ...restProps
}) => <TableCell {...restProps}>{children}</TableCell>;

const GrommetTableRow = ({
  children, row, tableRow, ...restProps
}) => (
  <TableRow {...restProps}>{children}</TableRow>
);

const Editor = ({
  value,
  disabled,
  getMessage,
  onChange,
  className,
  ...restProps
}) => (
  <SearchInput
    value={value || ''}
    onChange={event => onChange(event.target.value)}
    readOnly={disabled}
    placeHolder={getMessage('filterPlaceholder')}
    className='filter-editor'
    {...restProps}
  />
);

// custom table filter row plugin
export class TableFilterRow extends React.PureComponent {
  render() {
    const { messages, ...restProps } = this.props;

    return (
      <TableFilterRowBase
        cellComponent={TableFilterCell}
        rowComponent={GrommetTableRow}
        filterSelectorComponent={() => null}
        iconComponent={() => null}
        editorComponent={Editor}
        messages={{ ...defaultMessages, ...messages }}
        {...restProps}
      />
    );
  }
}
