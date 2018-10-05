// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <Grid
    rows={['xsmall', 'xsmall']}
    columns={['xsmall', 'flex', 'xsmall']}
    gap='small'
    areas={[
      { name: 'header', start: [0, 0], end: [2, 0] },
      { name: 'nav', start: [0, 1], end: [0, 1] },
      { name: 'main', start: [1, 1], end: [1, 1] },
      { name: 'side', start: [2, 1], end: [2, 1] },
    ]}
  >
    <Box gridArea='header' background='accent-1' />
    <Box gridArea='nav' background='accent-2' />
    <Box gridArea='main' background='accent-3' />
    <Box gridArea='side' background='accent-4' />
  </Grid>
);

render(<Demo />);  
`;
