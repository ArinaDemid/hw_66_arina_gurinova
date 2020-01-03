import React, { Component, Fragment } from 'react';
import Backdrop from '../components/UI/Backdrop/Backdrop';
import './withLoader.css';

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
      // document.body.classList.add('custom-loader');
      return request;
    }, error => {
      // document.body.classList.remove('custom-loader');
      this.setState({loading: false});
      throw error;
    });

    this.state.interceptorId = axios.interceptors.response.use(response => {
      this.setState({loading: false});
      // document.body.classList.remove('custom-loader');
      return response;
    }, error => {
      // document.body.classList.remove('custom-loader');
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
          <div className='description'>All Subscription</div>
          <WrappedComponent {...this.props} />
          <Backdrop show={this.state.loading} />
        </Fragment>
      );
    }
  }
};

export default withLoader;