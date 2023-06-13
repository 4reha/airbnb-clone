import { useEffect } from 'react';

const HostHomes = () => {
  useEffect(() => {
    document.title = 'Host | Airbnb clone';
  }, []);
  return <div>HostHomes</div>;
};

export default HostHomes;
