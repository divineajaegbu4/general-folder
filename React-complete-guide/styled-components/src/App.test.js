import { render, screen } from '@testing-library/react';
import App from './App';
import Test from './Components/Test';


test('renders 3 list items', () => {
  render(<Test />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(3);
});
