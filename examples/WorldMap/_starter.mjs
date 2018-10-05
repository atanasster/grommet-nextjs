// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <WorldMap
    color='neutral-1'
    continents={[
      {
        name: 'Africa',
        color: 'accent-1',
        onClick: name => alert(name),
      },
    ]}
    onSelectPlace={(lat, lon) => alert(lat, lon)}
    places={[
      {
        name: 'Sydney',
        location: [-33.8830555556, 151.216666667],
        color: 'accent-2',
        onClick: name => alert(name),
      },
    ]}
    selectColor='accent-2'
  />
);

render(<Demo />);  
`;
