import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { SigninForm } from './signinform';
import App from '../../App';

describe('Signin form tests', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/login/signin']}>
        <Routes>
          <Route
            path="/login/signin"
            element={<SigninForm />}
          />
        </Routes>
      </MemoryRouter>
    );
  });

  it('Should render input fields', () => {
    const username_field = screen.getByPlaceholderText('Email or phone');
    const password_field = screen.getByPlaceholderText('Password');

    expect(username_field).toBeInTheDocument();
    expect(password_field).toBeInTheDocument();
  });

  it('take username from user', () => {
    const username_field = screen.getByPlaceholderText(
      'Email or phone'
    ) as HTMLInputElement;
    fireEvent.change(username_field, {
      target: { value: 'vimalramk99@gmail.com' },
    });

    expect(username_field.value).toBe('vimalramk99@gmail.com');
  });

  it('take password from user', () => {
    const password_field = screen.getByPlaceholderText(
      'Password'
    ) as HTMLInputElement;
    fireEvent.change(password_field, {
      target: { value: '1123413125' },
    });

    expect(password_field.value).toBe('1123413125');
  });
});
