// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <DoughnutChart
    data={{
      labels: ["January","February","March","April","May","June","July"],
      datasets: [
        {
          label: "Dataset 1",
          data:[-93,45,35,-33,8,88,-62],
        }
      ],
    }}
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
