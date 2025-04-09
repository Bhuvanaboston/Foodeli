import Body from '../Body';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, json } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from '../Utils/appStore';
import mockdata from '../Mocks/BodyMockdata.json';
import { act } from 'react';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockdata);
    },
  });
});
it('renders the body component with search button ', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </BrowserRouter>
    );
  });

  const searchbtn = screen.getByRole('button', { name: 'Search' });
  const input = screen.getByTestId('search-input');
  fireEvent.change(input, { target: { value: 'subway' } });
  fireEvent.click(searchbtn);
  const cards = screen.getAllByTestId('resCard');
  expect(cards.length).toBe(1);
});

it('renders the body component with filter top rated restaurent ', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </BrowserRouter>
    );
  });
  const cardsbeforefilter = screen.getAllByTestId('resCard');
  expect(cardsbeforefilter.length).toBe(8);
  const topratedbtn = screen.getByTestId('toprated-btn');

  fireEvent.click(topratedbtn);
  const topcards = screen.getAllByTestId('resCard');
  console.log(topcards.length);
  expect(topcards.length).toBe(8);
});
