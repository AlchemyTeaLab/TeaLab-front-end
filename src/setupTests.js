import fetch from 'cross-fetch';
global.fetch = fetch;

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { mockSignUpData, mockSignInData, mockUserData } from './fixtures/mockAuthData';

const server = setupServer(
    rest.post(`${process.env.API_URL}/api/v1/users`, (req, res, ctx) => res(ctx.json(mockSignUpData)) ),
    rest.post(`${process.env.API_URL}/api/v1/users/session`, (req, res, ctx) => res(ctx.json(mockSignInData))),
    rest.get(`${process.env.API_URL}/api/v1/users/me`, (req, res,ctx) => ctx.json(mockUserData))

);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());