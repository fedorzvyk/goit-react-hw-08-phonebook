import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import ContactsPage from '../pages/ContactsPage';
// import HomePage from '../pages/Home';
// import RegisterPage from '../pages/Register';
// import LoginPage from '../pages/Login';
import { Layout } from './Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
