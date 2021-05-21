import React from 'react';
import Character from '../components/character';
import { useDetails } from '../hooks/detailHook';


const DetailArnold = ({match}) => {
    const { loading, character } = useDetails(match);
 
    if(loading) return <h1>Loading...</h1>;
    return (
      <Character {...character}
      />
    );
  };




export default DetailArnold;
