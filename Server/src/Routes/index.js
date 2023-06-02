const login = require('../Controllers/login');
const postUser = require('../Controllers/postUser')
const getCharById = require('../Controllers/getCharById');
const postFav = require('../Controllers/postFav');
const deleteFav = require("../Controllers/deleteFav");
//////////////////////////////////////////////////
const router = require('express').Router();
///////////////////////////////////////////////////
router.get('/character/:id', (req, res) => {
    getCharById(req, res);
});
///////////////////////////////////////////////////
router.get("/login", (req, res) => {
  login(req, res);
})
///////////////////////////////////////////////////
router.post("/login",(req, res)=>{
  postUser(req,res)
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