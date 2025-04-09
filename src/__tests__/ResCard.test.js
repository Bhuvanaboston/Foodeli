import { render, screen } from '@testing-library/react';
import ResCard, { withAggregatedDiscount } from '../ResCard'; // Adjust the path as needed
import '@testing-library/jest-dom';
import mockdata from '../Mocks/ResCardMockData.json';
//<ResCard resData={card} />;

test('should render the restaurant name', () => {
  render(<ResCard resData={mockdata.resData} />);

  // Get the name by its exact text
  const name = screen.getByText("Sangeetha's Desi Mane - Virugambakkam");

  // Check if the name is in the document
  expect(name).toBeInTheDocument();
});

// Wrap ResCard with the HOC to get the enhanced component
const PromotedResCard = withAggregatedDiscount(ResCard);

test('should render the promoted label and restaurant name', () => {
  render(<PromotedResCard resData={mockdata.resData} />);

  // Check if the "Promoted" label is present
  const promotedLabel = screen.getByText(/Promoted/i);
  expect(promotedLabel).toBeInTheDocument();

  // Check if the restaurant name is rendered correctly
  const name = screen.getByText("Sangeetha's Desi Mane - Virugambakkam");
  expect(name).toBeInTheDocument();
});

test('should render ResCard content inside the HOC', () => {
  render(<PromotedResCard resData={mockdata.resData} />);

  // Check that the restaurant name, rating, and other details are rendered
  const name = screen.getByText("Sangeetha's Desi Mane - Virugambakkam");
  const rating = screen.getByText(/4.7/i); // or whatever your avgRating is
  const costForTwo = screen.getByText(/₹300 for two/i);

  expect(name).toBeInTheDocument();
  expect(rating).toBeInTheDocument();
  expect(costForTwo).toBeInTheDocument();
});
