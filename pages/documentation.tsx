import React from 'react';
import Doc from '../components/documentation/Doc';

interface DocumentationProps {
  query: {
    component: string,
    library: string,
  }
};

class Documentation extends React.Component<DocumentationProps> {
  static async getInitialProps({ query }) {
    return { query }
  }
  render() {
    const { query: {component, library }} = this.props;
    console.log(this.props);
    return (
      <Doc
        name={component as string}
        library={library as string}
      />
    );
  }
}

export default Documentation;
