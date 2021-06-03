import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {data} from '../fixtures/mockCharacterData.json'
import ListPage from './ListPage';

const server = setupServer(
	rest.get('https://trek-dex.herokuapp.com/api/v1/characters', (req, res, ctx) => {
		return res(
			ctx.json(data)
		)
	})
);

describe('List page', () => {

	beforeAll(() => server.listen());
	afterAll(() => server.close());

  	it('renders list page', async () => {
	
		render(
		<MemoryRouter>
			<ListPage />
		</MemoryRouter>
		);

		screen.getByText('Loading...');
		
		return waitFor(() => {
			const charList = screen.getByRole('list', { name: 'characters' });
			expect(charList).not.toBeEmptyDOMElement();
			expect(charList).toMatchSnapshot();
		});
  });
});