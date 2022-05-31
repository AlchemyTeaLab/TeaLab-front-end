import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import App from './App';

describe('<App />', () => {
    it('signs in a user', async () => {
        render(
            <MemoryRouter initialEntries={['/login']} initialIndex={0}>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </MemoryRouter>
        );

        const emailInput = screen.getByRole('textbox');
        userEvent.type(emailInput, 'test@test.com');

        const passInput = screen.getByPlaceholderText(/password/i);
        userEvent.type(passInput, '123456');

        const signInButton = screen.getByRole('button', { name: /sign in/i });
        userEvent.click(signInButton);
    });

    it('sign up a user', async () => {
        render(
            <MemoryRouter initialEntries={['/login']} initialIndex={0}>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </MemoryRouter>
        );

        const toggleSignIn = screen.getByLabelText(/toggle sign in for existing users/i);

        const toggleSignUp = screen.getByLabelText(/toggle sign up for new users/i);

        userEvent.click(toggleSignUp);

        const usernameInput = screen.getByPlaceholderText(/username/i);
        userEvent.type(usernameInput, 'test user');

        const emailInput = screen.getByPlaceholderText(/email/i);
        userEvent.type(emailInput, 'test@test.com');

        const passInput = screen.getByPlaceholderText(/password/i);
        userEvent.type(passInput, '123456');

        const signUpButton = screen.getByRole('button', { name: /sign up/i });
        userEvent.click(signUpButton);
    });  
});


