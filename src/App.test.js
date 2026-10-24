import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the name in the hero', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Akshai\s*Srinivasan/);
});
