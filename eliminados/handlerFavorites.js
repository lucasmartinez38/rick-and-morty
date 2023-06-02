// const { User, Favorite } = require("../db");

///////////////////////////////////////////////////
let myFavorites = [];
///////////////////////////////////////////////////

const postFav = async (req, res) => {
  try {
    const character = req.body;
    const characterFound = await myFavorites.find(
      (fav) => fav === character.id
    );
    if (characterFound) throw Error("Character repetido");
    ////////////////////////////////////////////
    myFavorites.push(character);
    console.log("fav", myFavorites);
    return res.status(201).json(character);
  } catch (error) {
    return res.status(404).send(error.message);
  }
};
///////////////////////////////////////////////////
const deleteFav = (req, res) => {
  const { id } = req.params;
  // console.log("id", req.params);
  try {
    if (id) {
      // console.log("myFavorites", myFavorites);
      return res.status(200).json(myFavorites);
    }
    let newFavorites = myFavorites.filter((fav) => fav.id !== id);
    return res.status(200).json(newFavorites);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
///////////////////////////////////////////////////
module.exports = {
  postFav,
  deleteFav,
};
