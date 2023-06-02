 const express = require("express");
const server = express();
const router = require("./Routes/index");
const PORT = 3001;
const morgan = require("morgan");
const { conn } = require("./db");
const cors = require("cors");
//////////////////////////////////
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
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
server.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(":Models:", conn.models);
  await conn.sync({ force: false });
});

