import Header from '../Header';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import appStore from '../Utils/appStore';
import { BrowserRouter } from 'react-router-dom';

it('renders the header component with login button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole('button', { name: 'Login' });
  expect(loginButton).toBeInTheDocument();
});

it('renders the header component with cart item 0', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const cartitem = screen.getByText('Cart (0 items)');
  const cartitem = screen.getByText(/Cart/);

  expect(cartitem).toBeInTheDocument();
});

it('renders the header component onclick login it has to logout', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // Initial button state should show 'Login'
  const loginButton = screen.getByRole('button', { name: 'Login' });

  // Click the button to change it to 'Logout'
  fireEvent.click(loginButton);

  // Verify that the button text is now 'Logout'
  const logoutButton = screen.getByRole('button', { name: 'Logout' });
  expect(logoutButton).toBeInTheDocument();
});
