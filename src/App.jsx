import React, { lazy, Suspense, useState, useEffect } from 'react';
import './index.css';
import Header from './Header';
import Body from './Body';
import About from './About';
import Contactus from './Contactus';
import Error from './Error';
import RestaurentMenu from './RestaurentMenu';
import { Outlet } from 'react-router-dom';
import Shimmer from './Shimmer';
import UserContext from './Utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './Utils/appStore';
import Cart from './Cart';

const Grocery = lazy(() => import('./Grocery'));

const App = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const data = { name: 'Bhuvana' };
    setUserData(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: userData, setUserData }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </div>
    </Provider>
  );
};

export const appRouterConfig = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/about', element: <About /> },
      { path: '/contactus', element: <Contactus /> },
      { path: '/cart', element: <Cart /> },
      { path: '/restaurentmenu/:resId', element: <RestaurentMenu /> },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
];

export default App;
