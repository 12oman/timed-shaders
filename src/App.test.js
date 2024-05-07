import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

// write a test that checks if the test work
test('true is true', () => {
  expect(true).toBe(true);
}
);

// expect the app not to throw

test('renders without crashing', () => {
  render(<App />);
} 
);