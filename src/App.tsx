import AuthLayout from '@layout/AuthLayout';
import MainLayout from '@layout/MainLayout';
import AuthFindEmailPage from '@pages/auth/AuthFindEmailPage';
import AuthFindPasswordPage from '@pages/auth/AuthFindPasswordPage';
import AuthLoginPage from '@pages/auth/AuthLoginPage';
import AuthRegisterPage from '@pages/auth/AuthRegisterPage';
import MainPage from '@pages/MainPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<AuthLoginPage />} />
        <Route path="register" element={<AuthRegisterPage />} />
        <Route path="find/email" element={<AuthFindEmailPage />} />
        <Route path="find/password" element={<AuthFindPasswordPage />} />
      </Route>
      <Route path="*" element={<>Not Found</>} />
    </Routes>
  );
};

export default App;
