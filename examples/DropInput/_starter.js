// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <DropInput
    placeholder='annual sales'
    dropContent={(
      <Box pad='small' align='center' gap='small'>
        <Heading margin='none' level={3}>Monthly sales</Heading>
        <Chart
          aria-label='Chart example'
          bounds={[[0, 7], [0, 100]]}
          size={{ width: 'medium', height: 'small' }}
          round={true}
          values={[
            { value: [7, 90], label: 'ninety' },
            { value: [6, 80], label: 'eighty' },
            { value: [5, 60], label: 'sixty' },
            { value: [4, 70], label: 'seventy' },
            { value: [3, 60], label: 'sixty' },
            { value: [2, 40], label: 'forty' },
            { value: [1, 30], label: 'thirty' },
            { value: [0, 10], label: 'ten' },
          ]}
        />
      </Box>)
    }
  />
);     

render(<Demo />);  
`;
