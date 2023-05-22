

///////////////////////////////////////////////////
let myFavorites = [];
///////////////////////////////////////////////////
const postFav = (req, res) => {
    try {
        const character = req.body;
        const characterFound = myFavorites.find(fav => fav === character.id);
        // console.log(character, "Me dio corazon");
        //////////////////////////
        if(characterFound) throw Error("Character repetido")
        //////////////////////////
        myFavorites.push(character);
        return res.status(201).json(character);       
    } catch (error) {
    return res.status(404).send(error.message);   
    }
};
///////////////////////////////////////////////////
const deleteFav = (req, res) => {
    const { id } = req.params;
    
    try {
        if (!id) {
            return res.status(200).json({message:" Delete id"});    
        };
        const newFavorites = myFavorites.filter(favorite => favorite.id !== Number(id));
        myFavorites = newFavorites;
        res.status(201).json(myFavorites)
    } catch (error) {
        res.status(400).json({message:error})
    }
}
///////////////////////////////////////////////////
module.exports = {
    postFav,
    deleteFav
} 
