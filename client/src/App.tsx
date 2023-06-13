import { Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import Login from './pages/Login';
import Layout from './Layout';
import HostHomes from './pages/HostHomes';
import Help from './pages/Help';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/login" element={<Login content='login'/>} />
          <Route path="/sign-up" element={<Login content='sign-in' />} />
          <Route path="/host/homes" element={<HostHomes />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
