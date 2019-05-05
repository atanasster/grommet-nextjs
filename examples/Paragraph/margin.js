export const margin = `const Demo = () => (
  <Box>
    {['none', 'small', 'medium', 'large'].map(margin => (
      <Paragraph key={margin} margin={margin}>
        A paragraph with margin {margin}
      </Paragraph>
    ))}
  </Box>
);

render(<Demo />);
`;
