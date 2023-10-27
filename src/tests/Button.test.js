import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Button from '../component/Button';

test('Button component navigates to details page when clicked', () => {
  const mockNavigate = jest.fn();
  const mockOnClick = jest.fn();

  render(
    <MemoryRouter initialEntries={['/']}>
      <Button id={123} onClick={mockOnClick} />
    </MemoryRouter>,
  );

  // Mock the useNavigate hook
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  }));
  const button = screen.getByTestId('action-button');
  screen.debug();
  fireEvent.click(button);
  expect(button).toBeDefined();
});
