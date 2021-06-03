import { useEffect, useState } from 'react';
import {getArnoldById} from '../services/heyArnoldApi';

export const useCharacter = (id) => {
	const [loading, setLoading] = useState(true);
	const [character, setCharacter] = useState({});

	useEffect(() => {
		getArnoldById(id)
			.then(result => setCharacter(result))
			.finally(() => setLoading(false));
	});

	return [loading, character];
}