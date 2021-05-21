import { useEffect, useState } from 'react';
import { getArnoldById } from '../services/heyArnoldApi';


export const useDetails = (match) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);
  console.log('asdf', character)
  useEffect(() => {
    getArnoldById(match.params.id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, []);

  return { loading, character };
};