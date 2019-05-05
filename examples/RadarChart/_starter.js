// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <RadarChart
    data={{
      labels: ["January","February","March","April","May","June","July"],
      datasets: [
        {
          label: "Dataset 1",
          data: [94,94,97,92,96,91,99],
          opacity: 0.2,
        }
      ]
    }}
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
