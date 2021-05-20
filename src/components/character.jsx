import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'; 

const Character = ({name, image, _id}) => { 
    return (
    <figure>
    <Link to={`/${_id}`}>    
        <img src={image} alt={name} />
        <figcaption>
            {name}
        </figcaption>
    </Link>
    </figure>
)}

Character.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Character;