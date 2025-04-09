import { useEffect, useState } from 'react';

const useOnlinestatus = () => {
  const [Onlinestatus, setOnlinestatus] = useState(true);
  useEffect(() => {
    window.addEventListener('offline', (event) => {
      console.log('You are NOT connected to the network.');
      setOnlinestatus(false);
    });
    window.addEventListener('online', (event) => {
      console.log('You are NOW connected to the network.');
      setOnlinestatus(true);
    });
  }, []);

  return Onlinestatus;
};

export default useOnlinestatus;
