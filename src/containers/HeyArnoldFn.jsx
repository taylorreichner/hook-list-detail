import React from 'react';
import CharacterList from '../components/characterList';
import { useCharacters } from '../hooks/heyArnoldHook';


const HeyArnold = () => {
   const {loading, characters, page, setPage} = useCharacters()
    
    if (loading) return <h1>Loading...</h1>

    return (
        <>
        <div>
        <button onClick={() => {
        if(page === 1) return;
        else setPage((prevPage) => prevPage - 1);
      }}>Prev</button>
      <button onClick={() => {
        if(page === 50) return;
        setPage((prevPage) => prevPage + 1);
      }}>Next</button>

            <h2>YOOOOOO</h2>

            <CharacterList characters={characters}/>
           
        </div>


        </>
    )

}

export default HeyArnold;