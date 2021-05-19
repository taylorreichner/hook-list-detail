const getArnold = async () => {
 const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
   const req = await res.json()

    return req;
}

export default getArnold;