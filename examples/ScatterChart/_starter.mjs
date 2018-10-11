// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <ScatterChart
    data={{
      labels:["January","February","March","April","May","June","July"],
      datasets: [
        {
          label: "Dataset 1",
          data: [
            {"x":-74,"y":60},
            {"x":-42,"y":-96},
            {"x":-67,"y":-19},
            {"x":26,"y":77},
            {"x":64,"y":-61},
            {"x":-58,"y":-71},
            {"x":99,"y":-47}
          ],
        },
        {
          label: "Dataset 2",
          data: [
            {"x":-8,"y":36},
            {"x":-84,"y":-30},
            {"x":71,"y":-86},
            {"x":-91,"y":68},
            {"x":89,"y":-59},
            {"x":-73,"y":-20},
            {"x":32,"y":17}
          ],
        }
      ],
    }}
  />
);

render(<Demo />);  
`;
