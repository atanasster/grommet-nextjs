// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <LineChart
    data={{
      labels: ["January","February","March","April","May","June","July"],
      datasets: [
        {
          label: "Dataset 1",
          data: [-40,92,-44,-75,-65,-89,78],
          fill: false,
        },
        {
          label: "Dataset 2", 
          data: [-78,-21,-43,70,11,-91,-63],
          fill: false,
        }
      ]
    }}
  />
);

render(<Demo />);  
`;
