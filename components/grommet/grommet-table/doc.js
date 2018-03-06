import { describe, PropTypes } from 'react-desc';
import getAvailableAtGitHub from '../utils/doc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .availableAt(getAvailableAtGitHub({ url: 'https://github.com/atanasster/grommet-nextjs' }))
    .description('A Grommet 2 table component with pagination, filtering, footer, child rows and grouping. Derived from https://github.com/react-tools/react-table. ')
    .usage(`
    $ npm install grommet-table 
    import { GrommetTable } from 'grommet-table';
    <GrommetTable columns={...} data={...} />
`);

  DocumentedElement.propTypes = {
    decorations: PropTypes.shape({
      table: PropTypes.object.description('Table styling, all **`<Box />`** properties are valid.'),
      header: PropTypes.object.description('Header cell styling, all **`<Box />`** properties are valid'),
      headerGroup: PropTypes.object.description('Grouped columns header styling, all **`<Box />`** properties are valid.'),
      filter: PropTypes.object.description('Filter row styling, all **`<Box />`** properties are valid.'),
      filterInput: PropTypes.object.description('Filter input control styling, all **`<TextInput />`** properties are valid.'),
      body: PropTypes.object.description('Body styling, all **`<Box />`** properties are valid.'),
      row: PropTypes.object.description('Row of data styling, all **`<Box />`** properties are valid.'),
      rowOdd: PropTypes.object.description('Odd row for striped styling, all **`<Box />`** properties are valid.'),
      rowEven: PropTypes.object.description('Even row for striped styling, all **`<Box />`** properties are valid.'),
      cell: PropTypes.object.description('Cell of data styling, all **`<Box />`** properties are valid.'),
      footer: PropTypes.object.description('Footer row styling, all **`<Box />`** properties are valid.'),
      pagination: PropTypes.object.description('Pagination box styling, all **`<Box />`** properties are valid.'),
      expander: PropTypes.object.description('Expander button styling, all **`<Button />`** properties are valid, as well as icons OpenIcon and CloseIcon.'),
    }).description(`Visual styling of the various Grommet Table elements. Where applicable, those settings can be overriden at the column level. Example:
\`\`\`
  <Table
    decorations={{
      table: { elevation: 'large', border: 'all' },
      headerGroup: {
       background: 'brand', border: 'horizontal', size: 'large', align: 'center',
      },
      header: { border: 'all', align: 'center' },
      filter: { background: 'light-2', border: 'all' },
      filterInput: { size: 'small', placeholder: 'Filter...' },
      body: { animation: { type: 'fadeIn', duration: 2000, size: 'large' } },
      rowOdd: {
        background: { color: 'light-1', opacity: 'medium' },
      },
      footer: { background: 'light-1' },
      pagination: { pad: { top: 'medium' } },
      expander: { CloseIcon: <Subtract color='brand' />, OpenIcon: <Add color='brand' /> },
    }}
...
  </Table>
\`\`\`       
    `),
    columns: PropTypes.arrayOf(PropTypes.shape({
      Cell: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.func,
      ]).description('Used to render a standard cell, defaults to the accessed value.'),
      Header: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.func,
      ]).description('Used to render the header of a column or column group.'),
      Footer: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.func,
      ]),
      Aggregated: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.func,
      ]),
      Pivot: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.func,
      ]),
      PivotValue: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.func,
      ]),
      Expander: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.func,
      ]),
      Filter: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

      // All Columns
      sortable: PropTypes.bool, // use table default
      resizable: PropTypes.bool, // use table default
      filterable: PropTypes.bool, // use table default
      show: PropTypes.bool,
      minWidth: PropTypes.number,

      // Cells only
      getProps: PropTypes.func,

      // Pivot only
      aggregate: PropTypes.func,

      // Headers only
      getHeaderProps: PropTypes.func,

      // Footers only
      getFooterProps: PropTypes.object,
      filterMethod: PropTypes.func,
      filterAll: PropTypes.bool,
      sortMethod: PropTypes.func,
    })).isRequired.description('Array of column descriptors.'),
    data: PropTypes.array.description('Array of data objects.').isRequired,
    defaultPageSize: PropTypes.number.description('Default page size (default 20).'),
    filterable: PropTypes.bool.description('Wheter it should display a filtering row.'),
    pageSizeOptions: PropTypes.arrayOf(PropTypes.number.description('Page size')).description('Array of available page size options ([5, 10, 20, 25, 50, 100]).'),
    sortable: PropTypes.bool.description('Wheter the table headers will allow sorting of the of the data.'),
  };

  return DocumentedElement;
};
