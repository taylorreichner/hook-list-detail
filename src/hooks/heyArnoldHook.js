import { useEffect, useState } from 'react';
import { getArnold } from '../services/heyArnoldApi';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getArnold(page)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [page]);

  return { loading, characters, page, setPage};
};