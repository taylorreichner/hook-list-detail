export const getArnold = async (page) => {
 const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=3&page=${page}`);
   const req = await res.json()

    return req;
}

export const getArnoldById = async (id) => {
  const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`)
  const req = await res.json()
  console.log("hejhe", req)
  return req;
}