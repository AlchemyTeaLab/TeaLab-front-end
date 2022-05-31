import { screen, render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import Auth from './Auth';

const server = setupServer(
    rest.get(`${process.env.API_URL}/rest/v1/users`, (req, res, ctx) => res(ctx.json([user])))
);
  
describe('Auth view', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it('Should sign up new user upon signup click'), async () => {
        render(
            <MemoryRouter>
                <Auth />
            </MemoryRouter>
        );

    }
});