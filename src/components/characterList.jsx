import React from 'react';
import PropTypes from 'prop-types';
import Character from  './character'

const CharacterList = ({characters}) => {
    
    const characterItems = characters.map(character => (
        <li key={character._id}>
          <Character {...character}/>
        </li>
    ))

   return (

   <ul aria-label="character"> 
        {characterItems}
   </ul>
   )};

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired
        })
    ).isRequired
}

export default CharacterList;