import { createContext } from 'react';

const UserContext = createContext({
  loggedInUser: 'Defaut User',
});

export default UserContext;
