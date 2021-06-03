import React from 'react';
import Character from '../components/character';
import { useCharacter } from '../hooks/detailHook';

const DetailPage = ({ match }) => {

	const [loading, character] = useCharacter(match.params.id);

	return (
	<div>
		<h1>Detail page</h1>
		{loading
			? <p>Loading...</p>
			: <Character {...character}
				/>
		}
	</div>
)};

export default DetailPage;