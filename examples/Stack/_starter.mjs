// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <Stack anchor='center'>
    <Box
      border={{ color: 'brand', size: 'large' }}
      align='center'
      justify='center'
      pad='large'
      round='medium'
    >
      <Paragraph>
        {\`You know, sometimes in life it seems like there's no way out. Like
        a sheep trapped in a maze designed by wolves.\`}
      </Paragraph>
    </Box>
    <Box
      background={{ color: 'white', opacity: 'medium' }}
      pad='medium'
      round='medium'
    >
      <Text size='large'><strong>Hey!</strong></Text>
    </Box>
  </Stack>
);

render(<Demo />);  
`;
