import { useEffect, useState } from 'react';
import {getArnold} from '../services/heyArnoldApi';

export const useArnoldHook = () => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getArnold()
            .then(setCharacters)
            .finally(setTimeout(() => setLoading(false), 500));
    }, []);

    

    return {loading, characters};
}