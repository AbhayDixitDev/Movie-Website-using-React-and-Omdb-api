import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="container my-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
