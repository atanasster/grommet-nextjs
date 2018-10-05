export const size = `const Demo = () => (
  <Box>
    {['small', 'medium', 'large', 'xlarge'].map(size => (
      <Paragraph key={size} size={size} margin='none'>
        A paragraph of size {size}
      </Paragraph>
    ))}
  </Box>
);

render(<Demo />);
`;
