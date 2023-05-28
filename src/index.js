import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; // BrowserRouter is now Router
import App from './App';
import store from './app/store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename="/netflix-clone">
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);
