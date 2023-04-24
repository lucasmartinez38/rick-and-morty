//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
const URL = "https://rickandmortyapi.com/api/character/";
// const URL = 'https://be-a-rym.up.railway.app/api/character';
// const KEY = 'df25acae57c8.d39db91b2d150641b500';
const axios = require('axios');
///////////////////////////////////////////////
const getCharById = (req, res) => {
  
  const { id } = req.params;
    axios(`${URL}/${id}`)
    // .get(`${URL}/${id}?key=${KEY}`)
    .then(response => response.data)
    .then(({status, name, species, origin, image, gender}) => {
      if(name){
        const character = {
          id,
          name,
          species,
          origin,
          image,
          gender,
          status
        }
        return res.status(200).json(character);
      }
      // console.log(character);
      return res.status(404).send('Not Found');
    })
    .catch(error => res.status(500).send(error.message));
};
//////////////////////////////////////////////
module.exports = getCharById;
//////////////////////////////////////////////