/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-fetch';
import Component from './Component';

interface ComponentsListProps {
  components: {
    name: string,
    package: string,
  }[],
}
const ComponentsList: React.FC<ComponentsListProps> = ({ components }) => {
  const [data, setData] = React.useState();
  const getData = async () => {
    const param = JSON.stringify(components);
    const res = await fetch(`/api/examples/list?array=${encodeURIComponent(param)}`);
    setData(await res.json());
  };
  React.useEffect(() => {
    getData();
  }, [JSON.stringify(components)]);
  return (
    <React.Fragment>
      {Array.isArray(data) && data.map(item => (
        <Component key={`${item.package}_${item.name}`} component={item} />
      ))}
    </React.Fragment>
  );
};


export default ComponentsList;
