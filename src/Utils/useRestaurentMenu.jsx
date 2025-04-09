import { useEffect, useState } from 'react';
import { RESMENU_URL } from './constants';

const useRestaurentMenu = (resId) => {
  const [restData, setRestData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESMENU_URL + resId);
    const json = await data.json();
    setRestData(json.data);
  };

  return restData;
};

export default useRestaurentMenu;
