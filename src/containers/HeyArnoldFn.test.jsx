import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockCharacterData from '../fixtures/mockCharacterData.json';
import HeyArnold from './HeyArnoldFn';


const server = setupServer(
  rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
    return res(ctx.json(mockCharacterData));
  })
);
describe('HeyArnold component testing', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('displays a loading screen', async () => {
    render(<HeyArnold />);
    screen.getByText('Loading...');
  });

  it('displays a list of characters', async () => {
    render(
      <MemoryRouter>
        <HeyArnold />
      </MemoryRouter>
    );

    const ul = await screen.findByRole('list', { name: 'character' });
    expect(ul).toMatchSnapshot();
  });
});