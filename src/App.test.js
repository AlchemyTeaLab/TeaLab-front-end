import { render, screen, waitForElementToBeRemoved, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AuthProvider from './context/AuthProvider';
import App from './App';
import TeaProvider from './context/TeaProvider';
import { rest } from 'msw';
import { server } from './setupTests';
import { mockSignInData, mockSignUpData } from './fixtures/mockAuthData';

const user = { username: 'Test', email: 'test@email.com', password: 'supersecret' };

const server = setupServer(
    rest.post(`${process.env.API_URL}/api/v1/users`, (req, res, ctx) => res(ctx.json(user)))
);

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
        userEvent.type(usernameInput, 'test_user');
        
        const emailInput = screen.getByPlaceholderText(/email/i);
        userEvent.type(emailInput, 'test@test.com');
        
        const passInput = screen.getByPlaceholderText(/password/i);
        userEvent.type(passInput, '123456');
        
        const signUpButton = screen.getByRole('button', { name: /sign up/i });
        userEvent.click(signUpButton);
    });  
    
    it('renders a mocked user', async () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <TeaProvider>
                        <App />
                    </TeaProvider>
                </AuthProvider>
            </MemoryRouter>
        );

        expect(user.username).toEqual('Test');
        expect(user.email).toEqual('test@email.com');
        expect(user.password).toEqual('supersecret');
    });
});


