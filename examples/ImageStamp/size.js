export const size = `const Demo = () => (
  <Box gap='small'>
   {['small', 'medium', 'large', 'xlarge'].map(size => (
     <ImageStamp
       src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
       key={size.toString()}
       size={size}
     />))
   }
  </Box>
);

render(<Demo />);  
`;
