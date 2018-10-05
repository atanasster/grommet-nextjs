export const contain = `const Demo = () => (
  <Box gap='small'>
    {['width', 'height', undefined].map(contain => (
      <ImageStamp
        src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
        key={contain ? contain.toString() : 'contain'}
        contain={contain}
        size='large'
      />))
     }
  </Box>
);

render(<Demo />);  
`;
