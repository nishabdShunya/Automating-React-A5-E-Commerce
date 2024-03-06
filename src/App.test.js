import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders App component without errors', () => {
  // Render the component with MemoryRouter
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Check if the component rendered without throwing any errors
  expect(container).toBeDefined();
});
