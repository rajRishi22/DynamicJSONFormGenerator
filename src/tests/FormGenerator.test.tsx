import { render, fireEvent, screen } from '@testing-library/react';
import FormGenerator from '../components/FormGenerator';

const mockSchema = {
  formTitle: 'Test Form',
  fields: [
    { id: 'name', type: 'text', label: 'Name', required: true, placeholder: 'Enter your name' },
  ],
};

test('renders form fields correctly', () => {
  render(<FormGenerator schema={mockSchema} />);
  expect(screen.getByLabelText('Name')).toBeInTheDocument();
});

test('submits form successfully', () => {
  render(<FormGenerator schema={mockSchema} />);
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
  fireEvent.click(screen.getByText(/Submit/i));
  expect(console.log).toHaveBeenCalledWith({ name: 'John Doe' });
});
