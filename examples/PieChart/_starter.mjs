// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <PieChart
    data={rndDatasets(1)}
    options={{
      legend: {
        display: false,
      },
      themedData: true,
    }}
  />
);

render(<Demo />);  
`;
