import { Box, Table, TableBody, TableCell, TableFooter, TableHeader, TableRow } from 'grommet';
import { doc } from 'grommet/components/Table/doc';
import { doc as docTableCell } from 'grommet/components/TableCell/doc';
import { doc as docTableRow } from 'grommet/components/TableRow/doc';
import { doc as docTableHeader } from 'grommet/components/TableHeader/doc';
import { doc as docTableFooter } from 'grommet/components/TableFooter/doc';
import { doc as docTableBody } from 'grommet/components/TableBody/doc';

import Doc from '../components/Doc';

const desc = doc(Table).toJSON();
const descTableCell = docTableCell(TableCell).toJSON();
const descTableRow = docTableRow(TableRow).toJSON();
const descTableHeader = docTableHeader(TableHeader).toJSON();
const descTableFooter = docTableFooter(TableFooter).toJSON();
const descTableBody = docTableBody(TableBody).toJSON();

export default () => (
  <Box>
    <Doc
      name='Table'
      desc={desc}
    />

    <Doc name='TableCell' nav={false} desc={descTableCell} />

    <Doc name='TableRow' nav={false} desc={descTableRow} />

    <Doc name='TableHeader' nav={false} desc={descTableHeader} />
    <Doc name='TableBody' nav={false} desc={descTableBody} />
    <Doc name='TableFooter' nav={false} desc={descTableFooter} />
  </Box>
);
