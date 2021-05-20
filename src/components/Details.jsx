import React, { useState, useEffect } from 'react';
import Character from '../components/character'
import { getArnoldById } from '../services/heyArnoldApi';

const DetailPage = ({ match }) => {
	const [loading, setLoading] = useState(false);
	const [characterDetail, setCharacter] = useState({});

	useEffect(() => {
		getArnoldById(match.params.id)
			.then(result => {
				setCharacter(result);
				setLoading(false);
			})

	}, []);
		console.log('HELLOO', characterDetail)
	return (
        <div>
		<h1>Detail page</h1>
		{loading
			? <p>Loading...</p>
			: <Character 
				name={characterDetail.name}
				image={characterDetail.image}
				/>
		}
	</div>
    )}

    export default DetailPage;