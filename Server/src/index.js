const express = require("express");
const server = express();
const router = require("./Routes/index");
const PORT = 3001;
///////////////////////////////////
// const getCharById = require('./Controllers/getCharById')
// const getCharDetail = require('./Controllers/getCharDetail')
//////////////////////////////////////////////////
//middelware
server.use(express.json());
//////////////////////////////////
server.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
//////////////////////////////////////////////
server.use("/rickandmorty", router);
//////////////////////////////////////////////
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
