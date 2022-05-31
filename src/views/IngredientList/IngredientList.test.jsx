import { screen, render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import IngredientList from './IngredientList';

const server = setupServer(
    rest.get(`${process.env.API_URL}/rest/v1/ingredients`, (req, res, ctx) => res(ctx.json([ingredients])))
);

describe('IngredientList view', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it('Checks an ingredients upon click', async () => {
        render(
            <MemoryRouter>
                <IngredientList />
            </MemoryRouter>
        );


    });
});