import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../Login';

describe('Login Component', () => {
  it('renders the login form', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    // Test the presence of form elements
    const emailInput = screen.getByLabelText('Email address *');
    const passwordInput = screen.getByLabelText('Password *');
    const loginButton = screen.getByText('Login');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('calls the loginhandler function when the form is submitted', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    // Mock user input
    const email = 'test@example.com';
    const password = 'testpassword';

    // Get form elements and populate the inputs
    const emailInput = screen.getByLabelText('Email address *');
    const passwordInput = screen.getByLabelText('Password *');
    const loginButton = screen.getByText('Login');

    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });

    // Submit the form
    fireEvent.click(loginButton);

    // Now, you can add assertions based on your logic inside loginhandler function
    // For example, check if the "user logged in successfully" message appears after successful login
    // expect(screen.getByText('user logged in successfully.')).toBeInTheDocument();
  });
});