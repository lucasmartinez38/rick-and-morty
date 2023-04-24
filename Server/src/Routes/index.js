const { login } = require('../Controllers/login');
const getCharById = require('../Controllers/getCharById');
const { postFav , deleteFav } = require('../Controllers/handlerFavorites');
//////////////////////////////////////////////////
const router = require('express').Router();
///////////////////////////////////////////////////git stt
router.get('/character/:id', (req, res) => {
    getCharById(req, res);
});
///////////////////////////////////////////////////
router.get('/login', (req, res) => {
    login(req, res);
})
///////////////////////////////////////////////////
router.post("/fav", (req, res) => {
    postFav(req, res);
});
///////////////////////////////////////////////////
router.delete("/fav/:id", (req, res) => {
    deleteFav(req, res);
});
////////////////////////////////////////////
module.exports = router;