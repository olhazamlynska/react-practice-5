import { HomePage } from 'pages/HomePage';
import { UsersPage } from 'pages/UsersPage';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Route>
    </Routes>
  );
};
