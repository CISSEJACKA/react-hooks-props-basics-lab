import React from 'react';
import { render } from '@testing-library/react';
import App from '../App'.; // Adjust the path based on your project structure

test('renders hello world', () => {
  const { getByText } = render(<App />);
  const helloWorldElement = getByText(/hello, world/i);
  expect(helloWorldElement).toBeInTheDocument();
});

