import AuthLayout from '@layout/AuthLayout';
import CustomerServiceLayout from '@layout/CustomerServiceLayout';
import MainLayout from '@layout/MainLayout';
import AuthFindEmailPage from '@pages/auth/AuthFindEmailPage';
import AuthFindPasswordPage from '@pages/auth/AuthFindPasswordPage';
import AuthLoginPage from '@pages/auth/AuthLoginPage';
import AuthRegisterPage from '@pages/auth/AuthRegisterPage';
import AuthTermsOfUsePage from '@pages/auth/AuthTermsOfUsePage';
import CustomerServiceInquirementPage from '@pages/cs/CustomerServiceInquirementPage';
import CustomerServiceQuestionsPage from '@pages/cs/CustomerServiceQuestionsPage';
import CustomerServiceInfoListPage from '@pages/cs/CustormerServiceInfoListPage';
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
        <Route path="termsOfUse" element={<AuthTermsOfUsePage />} />
        <Route path="register" element={<AuthRegisterPage />} />
        <Route path="find/email" element={<AuthFindEmailPage />} />
        <Route path="find/password" element={<AuthFindPasswordPage />} />
      </Route>
      <Route path="/customerService" element={<CustomerServiceLayout />}>
        <Route
          path="supportBusinesses"
          element={<CustomerServiceInfoListPage />}
        />
        <Route path="questions" element={<CustomerServiceQuestionsPage />} />
        <Route path="inquire" element={<CustomerServiceInquirementPage />} />
      </Route>
      <Route path="*" element={<>Page Not Found</>} />
    </Routes>
  );
};

export default App;
