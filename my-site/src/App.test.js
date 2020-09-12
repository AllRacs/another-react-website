import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hello internet text', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/hello internet/i);
    expect(linkElement).toBeInTheDocument();
});
