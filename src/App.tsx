import Layout from '@components/common/Layout';
import AuthLoginPage from '@pages/auth/AuthLoginPage';
import AuthRegisterPage from '@pages/auth/AuthRegisterPage';
import MainPage from '@pages/MainPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
      <Route path="/auth">
        <Route index element={<AuthLoginPage />} />
        <Route path="register" element={<AuthRegisterPage />} />
      </Route>
    </Routes>
  );
};

export default App;
