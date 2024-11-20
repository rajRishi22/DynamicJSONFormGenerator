import { render, fireEvent, screen } from '@testing-library/react';
import JSONEditor from '../components/JSONEditor';

test('renders textarea for JSON input', () => {
  render(<JSONEditor onSchemaChange={jest.fn()} error={null} />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('shows error for invalid JSON', () => {
  const mockSchemaChange = jest.fn();
  render(<JSONEditor onSchemaChange={mockSchemaChange} error="Invalid JSON" />);
  fireEvent.change(screen.getByRole('textbox'), { target: { value: '{invalid}' } });
  expect(screen.getByText(/Invalid JSON/i)).toBeInTheDocument();
});
