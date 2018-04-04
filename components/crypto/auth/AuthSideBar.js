import React, { Component } from 'react';
import SideLayer from '../../SideLayer';
import AuthForm from './AuthForm';

class AuthSideBar extends Component {
  state = { title: undefined }
  render() {
    const { onClose } = this.props;
    const { title } = this.state;
    return (
      <SideLayer onClose={onClose} heading={title} >
        <AuthForm onClose={onClose} onTitle={newTitle => this.setState({ title: newTitle })} />
      </SideLayer>
    );
  }
}

export default AuthSideBar;
