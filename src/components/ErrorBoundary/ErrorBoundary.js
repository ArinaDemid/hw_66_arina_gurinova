import React, {Component} from 'react';
import axios from '../../axios-api';
import withLoader from '../../hoc/withLoader';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  };

  async postError(errorText) {
    await axios.post('/error.json', errorText);
  }

  componentDidCatch = (error, errorInfo) => {
    this.setState({hasError: true, errorMessage: errorInfo});

    const errorText = {
      errorText: errorInfo
    };
    this.postError(errorText);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something wrong happened!</div>;
    } else {
      return this.props.children;
    }
  }
}

export default withLoader(ErrorBoundary, axios);