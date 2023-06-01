
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

function getAllChar(req, res) {
  try {
    axios.get(`${URL}`).then(({ data }) => {
      if (data) {
        // *** ERROR al usar filter y no map para editar los campos y que estaba en data.results
        const characters = data.results.map((ch) => {
          const character = {
            id: ch.id,
            status: ch.status,
            name: ch.name,
            species: ch.species,
            origin: ch.origin?.name,
            image: ch.image,
            gender: ch.gender,
          };
          return character;
        });
        // console.log(":::", characters);
        res.status(200).json(characters);
      } else {
        res.status(404).json({ message: "character not found" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = getAllChar;
