import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <footer className="fixed bottom-0 left-[50%] translate-x-[-50%] w-full border-t text-center">
      <p className="text-sm text-gray-500">Airbnb clone © 2023 - ReactJS</p>
    </footer>
  </>
);

export default Layout;
