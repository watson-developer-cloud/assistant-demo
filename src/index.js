import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './scss/main.scss';

// enables hot module replacement in development
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));
