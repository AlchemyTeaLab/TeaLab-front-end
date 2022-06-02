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

            const checkbox = screen.getByRole('checkbox', {
                name: /add oolong tea to your recipe!/i
              });
            userEvent.click(checkbox);

            const addBase = screen.getByRole('button', {
                name: /select a base to continue/i
              });
            userEvent.click(addBase);

            const flavor = screen.getByText('Flavor');
            expect(flavor).toBeInTheDocument();

            const checkbox2 = screen.getByRole('checkbox', {
                name: /add lemon to your recipe!/i
              });
            userEvent.click(checkbox2);

            const addFlavor = screen.getByRole('button', {
                name: /select a flavor to continue/i
              });
            userEvent.click(addFlavor);

            const boost = screen.getByText('Boost');
            expect(boost).toBeInTheDocument();

            const checkbox3 = screen.getByRole('checkbox', {
                name: /add protein to your recipe!/i
              });
            userEvent.click(checkbox3);

            const addBoost = screen.getByRole('button', {
                name: /brew you tea!/i
              });
            userEvent.click(addBoost);

            const profile = screen.getByText('Profile');
            expect(profile).toBeInTheDocument();

            const edit = screen.getByRole('button', {
                name: /edit/i
              });
            userEvent.click(edit);

            const note = screen.getByRole('textbox', {
                name: /edit field/i
              })
            userEvent.type('test note');
            const save = screen.getByRole('button', {
                name: /save changes/i
              });
            userEvent.click(save);

            const testNote = screen.getByText(/test note/i);
            expect(testNote).toBeInTheDocument();
            
        });

        
    });
});