export const round = `const Demo = () => (
  <Box gap='small'>
   {['xsmall', 'small', 'medium', 'large', 'full'].map(round => (
     <ImageStamp
       src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
       key={round.toString()}
       round={round}
     />))
   }
  </Box>
);

render(<Demo />);  
`;
