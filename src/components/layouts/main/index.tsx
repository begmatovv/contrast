import { Outlet } from 'react-router-dom';
import MainLayoutFooter from './footer';
import MainLayoutHeader from './header';
import styles from './main.modules.scss';

function Main() {
  return (
    <div>
      <MainLayoutHeader />
      <Outlet />
      <MainLayoutFooter />
    </div>
  );
}

export default Main;
