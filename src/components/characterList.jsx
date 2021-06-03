import React from 'react';
import PropTypes from 'prop-types';
import Character from  './character'
import { useArnoldHook } from '../hooks/heyArnoldHook';

const CharacterList = () => {
    
    const {characters, loading} = useArnoldHook();

    const characterItems = characters.map(character => (
        <li key={character._id}>
          <Character {...character}/>
        </li>
    ))

    if (loading) return <h1>LOADING!!!</h1>

   return (

   <ul aria-label="character"> 
        {characterItems}
   </ul>
   )};


export default CharacterList;