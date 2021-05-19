import React, { useState, useEffect } from 'react';
import CharacterList from '../components/characterList';
import getArnold from '../services/heyArnoldApi';

const HeyArnold = () => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getArnold()
            .then(setCharacters)
            .finally(() => setLoading(false));
    }, []);
    
    if (loading) return <h1>Loading...</h1>

    return (
        <>
        <div>
            <h1>YOOOOOO</h1>
            <CharacterList characters={characters}/>
        </div>

        </>
    )

}

export default HeyArnold;