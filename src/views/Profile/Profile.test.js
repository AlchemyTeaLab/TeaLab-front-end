import { render, screen, waitFor, within, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AuthProvider from '../../context/AuthProvider';
import App from '../../App';
import TeaProvider from '../../context/TeaProvider';

import { mockSignInData, mockSignUpData } from '../../fixtures/mockAuthData';
import IngredientList from '../IngredientList/IngredientList';

const user = { username: 'Test', email: 'test@email.com', password: 'supersecret' };

const server = setupServer(
    rest.post(`${process.env.API_URL}/api/v1/users`, (req, res, ctx) => res(ctx.json(mockSignUpData)) )
);

describe('<App />', () => {
    it('user should be able to add and edit a recipe in their profile', async () => {
        render(
            <MemoryRouter initialEntries={['/login']} initialIndex={0}>
                <AuthProvider>
                    <TeaProvider>
                        <App />
                        
                    </TeaProvider>
                </AuthProvider>
            </MemoryRouter>
        );
        
        waitFor(() => {

            const home = screen.getByRole('link', {
                name: /home/i
              });
            userEvent.click(home);
            const main = screen.getByRole('main');
            const container = within(main).getByRole('list');
            userEvent.click(container);

            const checkbox = within(main).getByRole('checkbox', {
                name: /add oolong tea to your recipe!/i
              })
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
            userEvent.type(note, 'test note');
            const save = screen.getByRole('button', {
                name: /save changes/i
              });
            userEvent.click(save);

            const testNote = screen.getByText(/test note/i);
            expect(testNote).toBeInTheDocument();

        });
    });
});
