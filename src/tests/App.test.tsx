import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the JSON editor and form preview', () => {
  render(<App />);
  expect(screen.getByText(/Please provide a valid JSON schema/i)).toBeInTheDocument();
});
