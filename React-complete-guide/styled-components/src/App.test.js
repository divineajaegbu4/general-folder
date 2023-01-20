import { render, screen } from '@testing-library/react';
import App from './App';
import Test from './Components/Testing/Test';


test('renders 3 list items', () => {
  render(<Test />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(3);
});

test('renders title', () => {
  render(<Test />);
  const title = screen.getByTestId("mytestid");
  expect(title).toBeInTheDocument();
});

test('sum should be 6', () => {
  render(<Test />);
  const sum = screen.getByTitle("sum");
  expect(sum.textContent).toBe("6");
});