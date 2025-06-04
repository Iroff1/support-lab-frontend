import AuthLayout from '@layout/AuthLayout';
import CustomerServiceLayout from '@layout/CustomerServiceLayout';
import MainLayout from '@layout/MainLayout';
import TermsLayout from '@layout/TermsLayout';
import AuthFindEmailPage from '@pages/auth/AuthFindEmailPage';
import AuthFindPasswordPage from '@pages/auth/AuthFindPasswordPage';
import AuthLoginPage from '@pages/auth/AuthLoginPage';
import AuthRegisterPage from '@pages/auth/AuthRegisterPage';
import AuthTermsOfUsePage from '@pages/auth/AuthTermsOfUsePage';
import CSInquirementPage from '@pages/cs/CSInquirementPage';
import CSQuestionsPage from '@pages/cs/CSQuestionsPage';
import CSInfoListPage from '@pages/cs/CSInfoListPage';
import MainPage from '@pages/MainPage';
import TermsOfUsePage from '@pages/TermsOfUsePage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
      <Route path="/terms" element={<TermsLayout />}>
        <Route path=":typeOfTerms" element={<TermsOfUsePage />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<AuthLoginPage />} />
        <Route path="termsOfUse" element={<AuthTermsOfUsePage />} />
        <Route path="register" element={<AuthRegisterPage />} />
        <Route path="find/email" element={<AuthFindEmailPage />} />
        <Route path="find/password" element={<AuthFindPasswordPage />} />
      </Route>
      <Route path="/customerService" element={<CustomerServiceLayout />}>
        <Route path="supportBusinesses" element={<CSInfoListPage />} />
        <Route path="questions" element={<CSQuestionsPage />} />
        <Route path="inquire" element={<CSInquirementPage />} />
      </Route>
      <Route path="*" element={<>Page Not Found</>} />
    </Routes>
  );
};

export default App;
