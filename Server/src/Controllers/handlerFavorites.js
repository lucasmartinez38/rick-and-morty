

///////////////////////////////////////////////////
let myFavorites = [];
///////////////////////////////////////////////////
const postFav = (req, res) => {
    try {
        const character = req.body;
        const characterFound = myFavorites.find(fav => fav.id === character.id);
        console.log(character, "Me dio corazon");
        //////////////////////////
        if(characterFound) throw Error("Character repetido")
        //////////////////////////
        myFavorites.push(character);
        return res.status(200).json(myFavorites);       
    } catch (error) {
    return res.status(404).send(error.message);   
    }
};
///////////////////////////////////////////////////
const deleteFav = (req, res) => {
    const { id } = req.params;
    ///de esta forma se elimina u character de la lista de fav
    myFavorites = myFavorites.filter((favorite) => favorite.id !== id);
    return res.status(200).json(myFavorites);     
}
///////////////////////////////////////////////////
module.exports = {
    postFav,
    deleteFav
} 
