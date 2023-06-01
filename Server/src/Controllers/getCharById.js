//////////////////////////////////////////////////////////////////
// const KEY = 'df25acae57c8.d39db91b2d150641b500';
// const URL = 'https://be-a-rym.up.railway.app/api/character';
/////////////////////////////////////////////////////////////////
const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";
/////////////////////////////////////////
const getCharById = async (req, res) => {
  try {
    /////////////////////////////////////
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`)
    /////////////////////////////////////
    if (data.name) { 
      const character = {
        id: data.id,
        name: data.name,
        species: data.species,
        origin: data.origin,
        image: data.image,
        gender: data.gender,
        status: data.status,
      };
        return res.status(200).json(character);
    }
   } catch (error) {
      return error.message.includes('Not Found')
        ? error.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)
  }
};
//////////////////////////////////////////////
module.exports = getCharById;
//////////////////////////////////////////////