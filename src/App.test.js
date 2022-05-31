import { render, screen, waitForElementToBeRemoved, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import App from './App';
import TeaProvider from './context/TeaProvider';

describe('<App />', () => {
    it('signs in a user', async () => {
        render(
            <MemoryRouter initialEntries={['/login']} initialIndex={0}>
                <AuthProvider>
                    <TeaProvider>
                        <App />
                    </TeaProvider>
                </AuthProvider>
            </MemoryRouter>
        );

        const loading = screen.getByText(/loading/i)
        await waitForElementToBeRemoved(loading);

        const emailInput = screen.getByRole('textbox');
        userEvent.type(emailInput, 'test@test.com');

        const passInput = screen.getByPlaceholderText(/password/i);
        userEvent.type(passInput, '123456');
        const form = screen.getByRole('form', {
            name: /sign in or sign up to continue/i
          });
        
        const signInButton = within(form).getByRole('button', {
            name: /sign in/i
          });

        userEvent.click(signInButton);
    });

    it('sign up a user', async () => {
        render(
            <MemoryRouter initialEntries={['/login']} initialIndex={0}>
                <AuthProvider>
                    <TeaProvider>
                        <App />
                    </TeaProvider>
                </AuthProvider>
            </MemoryRouter>
        );
        const loading = screen.getByText(/Loading/i)
    
        await waitForElementToBeRemoved(loading);

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


