// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <RadarChart
    data={rndDatasets(2, { opacity: 0.2 }, true)}
    options={{
      scale: {
        ticks: {
          beginAtZero: true,
        },
      },
    }}
  />
);

render(<Demo />);  
`;
