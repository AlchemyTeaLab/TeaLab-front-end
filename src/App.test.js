import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';

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

        const signInButton = screen.getByRole('button', { name: /sign in/i});
        userEvent.click(signInButton);

    
    })
    
})


