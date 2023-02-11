import { UserMenu } from 'components/userMenu/userMenu';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from 'components/authNav/authNav';
import { useAuth } from 'hooks/useAuth';
// import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
