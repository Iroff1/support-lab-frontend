import { Route, Routes } from 'react-router-dom';
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
import HeaderOnlyLayout from '@layout/HeaderOnlyLayout';
import UserModifyInfoPage from '@pages/user/UserModifyInfoPage';
import ProductListPage from '@pages/payment/PaymentMainPage';
import NotFound from '@components/common/NotFound';
import NotPublished from '@components/common/NotPublished';
import DocLayout from '@layout/DocLayout';
import DocumentInitPage from '@pages/doc/DocumentInitPage';
import DocumentReqPage from '@pages/doc/DocumentReqPage';

const App = () => {
  return (
    <Routes>
      {/* Main Page */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
      </Route>

      {/* Terms Page */}
      <Route path="/terms" element={<TermsLayout />}>
        <Route path=":typeOfTerms" element={<TermsOfUsePage />} />
      </Route>

      {/* Auth Page */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<AuthLoginPage />} />
        <Route path="termsOfUse" element={<AuthTermsOfUsePage />} />
        <Route path="register" element={<AuthRegisterPage />} />
        <Route path="find/email" element={<AuthFindEmailPage />} />
        <Route path="find/password" element={<AuthFindPasswordPage />} />
      </Route>

      {/* Customer Service Page */}
      <Route path="/customerService" element={<CustomerServiceLayout />}>
        <Route path="supportBusinesses" element={<CSInfoListPage />} />
        <Route path="questions" element={<CSQuestionsPage />} />
        <Route path="inquire" element={<CSInquirementPage />} />
      </Route>

      {/* User Service Page */}
      <Route path="/user" element={<HeaderOnlyLayout />}>
        <Route path="modifyInfo" element={<UserModifyInfoPage />} />
      </Route>

      {/* Document Service Page */}
      <Route path="/documents" element={<DocLayout />}>
        <Route index element={<DocumentInitPage />} />
        <Route path=":id" element={<DocumentInitPage />} />
        <Route path="required" element={<DocumentReqPage />} />
        <Route path="required/:id" element={<DocumentReqPage />} />
        <Route path="optional/:id" element={<NotPublished />} />
      </Route>

      {/* Payment Service Page */}
      <Route path="/products" element={<HeaderOnlyLayout />}>
        <Route index element={<ProductListPage />} />
      </Route>

      {/* Not Found Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
