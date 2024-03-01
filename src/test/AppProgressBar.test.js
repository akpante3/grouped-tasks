import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import AppProgreesBar from '../components/AppProgressBar';

afterEach(cleanup);

describe('AppProgreesBar Component', () => {
  test('renders with the provided value', () => {
    render(<AppProgreesBar value={50} />);

    const progressBarElement = screen.getByTestId('progress-bar-element');

    expect(progressBarElement).toBeInTheDocument();
  });
});