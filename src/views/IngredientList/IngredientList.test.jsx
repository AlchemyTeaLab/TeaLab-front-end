import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import AuthProvider from '../../context/AuthProvider';
import TeaProvider from '../../context/TeaProvider';
import IngredientList from './IngredientList';


const ingredients = [
    {
        commonName: 'Oolong Tea',
        description: 'Oolong tea is a traditional Chinese tea made from the semi-oxidized leaves of the Camellia sinensis plant. It is picked later in the season than green tea. A cup of brewed oolong tea contains small amounts of calcium, magnesium, and potassium. It also contains about 38 mg of caffeine. Rich in amino acid, Oolong tea improves relaxation and cognitive performance.',
        healthBenefits: (3)['Reduce stress and anxiety', 'Improve brain activity', 'Support heart health'],
        id: '1',
        image: null,
        scientificName: 'Camellia sinensis',
        type: 'Base'
    },
    {
        commonName: 'Chamomile',
        description: 'Chamomile is a pretty, elegant, and fragrant herb that belongs in the Asteraceae plant family. It is used for therapeutic purposes, especially popular among people who are looking to unwind before bed.',
        healthBenefits: (3) ['Support calm', 'Support healthier sleep habits', 'Improve digestive health'],
        id: '11',
        image: null,
        scientificName: 'Asteraceae',
        type: 'Flavor',
    },
    {
        commonName: 'Antioxidant',
        description: 'Antioxidants are mostly found in plant foods. They are natural molecules that help neutralize harmful free radicals in our bodies.',
        healthBenefits: (2) ['Support heart health', 'Reduce the risk of cancer'],
        id: '19',
        image: null,
        scientificName: '',
        type: 'Boost'
    }
];

const server = setupServer(
    rest.get(`${process.env.API_URL}/api/v1/ingredients`, (req, res, ctx) => res(ctx.json(ingredients)))
);

describe('IngredientList view', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it('renders ingredients', async () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <TeaProvider>
                        <IngredientList />
                    </TeaProvider>
                </AuthProvider>
            </MemoryRouter>
        );

        waitFor(() => {
            const base = screen.getByText('Oolong Tea', { exact: false });
            expect(base).toBeInTheDocument();

            const checkbox = screen.getByLabelText('checkbox');
            userEvent.click(checkbox);

            expect(checkbox).toBeChecked();
        });
    });
});