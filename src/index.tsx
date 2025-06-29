import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import store from './store';
import { Provider } from 'react-redux';
import { authDecryptTokenThunk } from '@store/auth';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// Before init rendering
const localToken =
  sessionStorage.getItem('token') || localStorage.getItem('token');
try {
  if (localToken)
    await store.dispatch(authDecryptTokenThunk(JSON.parse(localToken)));
} catch (e) {
  console.log(e);
}

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </Provider>,
  // </React.StrictMode>,
);
