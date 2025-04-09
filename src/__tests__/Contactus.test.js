import { render, screen } from '@testing-library/react';
import Contactus from '../Contactus'; // Adjust the path as needed
import '@testing-library/jest-dom';

test('should load contactus component', () => {
  render(<Contactus />);
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
});

test('should load button into the  component', () => {
  render(<Contactus />);
  const button = screen.getByText('Send Message');
  expect(button).toBeInTheDocument();
});
describe('should test component', () => {
  it('should render without crashing', () => {
    render(<Contactus />);
    const sample = screen.getByPlaceholderText('Email');
    expect(sample).toBeInTheDocument();
  });

  it('should render form', () => {
    render(<Contactus />);
    const inputs = screen.getAllByRole('textbox', {
      name: /name|email/i, // Matches labels
    });
    expect(inputs.length).toBe(2); // Only Name and Email
  });
});
