import Layout from '@components/common/Layout';
import MainPage from '@pages/MainPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default App;
