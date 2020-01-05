import React, { Component, Fragment } from 'react';
import Backdrop from '../components/UI/Backdrop/Backdrop';

const withLoader = (WrappedComponent, axios) => {
  return class WithError extends Component {

    constructor(props) {
      super(props);

      this.state = {
        error: null,
        loading: false
      };   

    axios.interceptors.request.use(request => {
      this.setState({loading: true});
      return request;
    }, error => {
      this.setState({loading: false});
      throw error;
    });

    this.state.interceptorId = axios.interceptors.response.use(response => {
      this.setState({loading: false});
      return response;
    }, error => {
      this.setState({loading: false});
      throw error;
    });
  }

  componentWillUnmount() {
    axios.interceptors.response.eject(this.state.interceptorId);
  }

    render() {
      return (
        <Fragment>
          <WrappedComponent {...this.props} />
          <Backdrop show={this.state.loading} />
        </Fragment>
      );
    }
  }
};

export default withLoader;