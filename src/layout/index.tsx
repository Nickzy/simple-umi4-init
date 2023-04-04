import { Outlet, useMatch } from 'umi';
import 'global/index.scss';
import styles from './index.scss';
// import Login from '@/pages/Login';
import Header from './Header';
import { useNavigate } from 'umi';

function Layout() {
  const match = useMatch('/login')
  const navigate = useNavigate();
  console.log('match', match);

  if (match?.pathname === '/login') {
    // return <Login />
    navigate('/login', { replace: true });
  }

  return (
    <div className={styles.layoutsWrap}>
      <Header />
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
