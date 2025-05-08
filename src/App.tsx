import AuthLayout from '@layout/AuthLayout';
import CsLayout from '@layout/CsLayout';
import MainLayout from '@layout/MainLayout';
import AuthFindEmailPage from '@pages/auth/AuthFindEmailPage';
import AuthFindPasswordPage from '@pages/auth/AuthFindPasswordPage';
import AuthLoginPage from '@pages/auth/AuthLoginPage';
import AuthRegisterPage from '@pages/auth/AuthRegisterPage';
import CsInfoListPage from '@pages/cs/CsInfoListPage';
import CsInquirementPage from '@pages/cs/CsInquirementPage';
import CsQuestionsPage from '@pages/cs/CsQuestionsPage';
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
      <Route path="/customerService" element={<CsLayout />}>
        <Route path="supportBusinesses" element={<CsInfoListPage />} />
        <Route path="questions" element={<CsQuestionsPage />} />
        <Route path="inquire" element={<CsInquirementPage />} />
      </Route>
      <Route path="*" element={<>Page Not Found</>} />
    </Routes>
  );
};

export default App;
