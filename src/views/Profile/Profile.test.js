import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AuthProvider from '../../context/AuthProvider';
import App from '../../App';
import TeaProvider from '../../context/TeaProvider';
import { server } from '../../setupTests';
import { mockSignInData, mockSignUpData } from '../../fixtures/mockAuthData';
import IngredientList from '../IngredientList/IngredientList';

const user = { username: 'Test', email: 'test@email.com', password: 'supersecret' };

describe('<App />', () => {
    it('renders a mocked user', async () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <TeaProvider>
                        <App />
                        <IngredientList />
                    </TeaProvider>
                </AuthProvider>
            </MemoryRouter>
        );

        

        expect(user.username).toEqual('Test');
        expect(user.email).toEqual('test@email.com');
        expect(user.password).toEqual('supersecret');

        waitFor(() => {
            const home = screen.getByText('Base');
        expect(home).toBeInTheDocument();
        });

        
    });
});