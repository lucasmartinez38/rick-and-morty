const axios = require("axios");
const URL = "https://be-a-rym.up.railway.app/api/character/";
const KEY = "df25acae57c8.d39db91b2d150641b500";
// require("dotenv").config()
// const { KEY, URL } = proces.env; 
////////////////////////////////////////////////
const successHandler = (response, res) => {
   const { id, image, name, gender, species, status, origin } = response.data;
   res.writeHead(200, { "Content-Type": "application/json" });
   res.end(JSON.stringify({ id, image, name, gender, species,status, origin }));
}; 
///////////////////////////////////////////////
const errorHandler = (error, res) => {
   res.writeHead(500, { "content-type": "text/plain" });
   res.end(error.message);
};
///////////////////////////////////////////////
const getCharDetail = (res, id) => {
    axios
    .get(`${URL}/${id}?key=${KEY}`)
    .then((response) => successHandler(response, res))
    .catch((error) => errorHandler(error, res));
};

module.exports = getCharDetail;
