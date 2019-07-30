import React from 'react';
import { Redirect } from 'react-router-dom';

const Auth = (WrappedComponent, user) => {
  return class withAuthorization extends React.Component {
    render() {
      if(user.token) {
        return <WrappedComponent {...this.props} />
      } else {
        return <Redirect to='/'/>
      }
    }
  }
}

export default Auth;
