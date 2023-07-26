import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Signup from '../Signup';

describe('Signup Component', () => {
  it('renders the signup form', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    // Test the presence of form elements
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const addressInput = screen.getByLabelText('Home Address');
    const cnicInput = screen.getByLabelText('CNIC');
    const signupButton = screen.getByText('Sign Up');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(cnicInput).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();
  });

  it('calls the signUpHandler function when the form is submitted', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    // Mock user input
    const name = 'John Doe';
    const email = 'test@example.com';
    const password = 'testpassword';
    const address = '123, Street, Lorem Ipsum';
    // Simulate file input (you may want to improve this part depending on your actual implementation)
    const cnic = new File([''], 'cnic.png', { type: 'image/png' });

    // Get form elements and populate the inputs
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const addressInput = screen.getByLabelText('Home Address');
    const cnicInput = screen.getByLabelText('CNIC');
    const signupButton = screen.getByText('Sign Up');

    fireEvent.change(nameInput, { target: { value: name } });
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.change(addressInput, { target: { value: address } });
    fireEvent.change(cnicInput, { target: { files: [cnic] } });

    // Submit the form
    fireEvent.click(signupButton);

    // Now, you can add assertions based on your logic inside signUpHandler function
    // For example, check if the "User registered successfully." alert appears after successful signup
    // expect(screen.getByText('User registered successfully.')).toBeInTheDocument();
  });
});