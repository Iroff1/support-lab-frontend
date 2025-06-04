import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import store from './store';
import { Provider } from 'react-redux';
import { authActions } from '@store/auth';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const localAuth = localStorage.getItem('auth');
if (localAuth) store.dispatch(authActions.refreshAuth(JSON.parse(localAuth)));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
