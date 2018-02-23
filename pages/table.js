import { Box, Table, TableBody, TableCell, TableHeader, TableRow } from 'grommet';
import doc, { docTableCell } from 'grommet/components/Table/doc';

import Doc, { DocContent } from '../components/Doc';

const desc = doc(Table).toJSON();
const descTableCell = docTableCell(TableCell).toJSON();

export default () => (
  <Box>
    <Doc
      name='Table'
      desc={desc}
      example={(
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell scope='col' border='bottom'>Name</TableCell>
              <TableCell scope='col' border='bottom'>Flavor</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell scope='row'><strong>Eric</strong></TableCell>
              <TableCell>Coconut</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope='row'><strong>Chris</strong></TableCell>
              <TableCell>Watermelon</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
    />

    <DocContent name='TableCell' nav={false} desc={descTableCell} />
  </Box>
);
