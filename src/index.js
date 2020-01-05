import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

ReactDOM.render(<ErrorBoundary><App /></ErrorBoundary>, document.getElementById('root'));

