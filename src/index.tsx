import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import store from './store';
import { Provider } from 'react-redux';
import { authDecryptTokenThunk } from '@store/auth';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// Before init rendering
const localToken =
  sessionStorage.getItem('token') || localStorage.getItem('token');
try {
  if (localToken)
    await store.dispatch(authDecryptTokenThunk(JSON.parse(localToken)));
} catch (error) {
  console.log(error);
}

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>,
);
