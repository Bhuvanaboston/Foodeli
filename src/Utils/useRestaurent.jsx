import { useEffect, useState } from 'react';
import { SWIGGY_URL } from './constants';

const useRestaurent = () => {
  const [restList, setRestList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestList(restaurants);
    setFilteredRestList(restaurants); // Initializing filtered list with the full list
  };

  return { restList, filteredRestList, setFilteredRestList }; // Return the setter here
};

export default useRestaurent;
