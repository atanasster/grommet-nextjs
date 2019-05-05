// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <Box align='center'>
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
  </Box>  
);

render(<Demo />);  
`;
