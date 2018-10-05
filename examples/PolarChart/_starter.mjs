// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <PolarChart
    data={rndDatasets(1, { opacity: 0.2 }, true)}
    options={{
      themedData: true,
      legend: {
        position: 'right',
      },
      scale: {
        ticks: {
          beginAtZero: true,
        },
        reverse: false,
      },
    }}
  />
);

render(<Demo />);  
`;
