import React from 'react';
import login from './login';
import { render, fireEvent } from '@testing-library/react-native';

describe('login', () => {

  test('form values should be populated with change in input', () => 
  {
    const { getPlaceholdertext } = render (<login />);

    const email = getPlaceholdertext('Enter email id');

    fireEvent.changeText(email, 'abc@example.com');

    expect(email.props.value).toBe('abc@example.com');
  });

  test('Login testing', () => {

    console.log = jest.fn(); 

    const { getByText, getPlaceholdertext } = render(<login/>);

    const email = getPlaceholdertext('Enter email id');
    const password = getPlaceholdertext('Enter respective password');
    const button = getByText('LogIn');

    fireEvent.changeText(email, 'xyz@example.com');
    fireEvent.changeText(password, 'password@123');
    fireEvent.press(button);

    expect(console.log).toHaveBeenCalledWith('EmailId:', 'xyz@example.com');
    expect(console.log).toHaveBeenCalledWith('Password:', 'password@123');
  });
});
