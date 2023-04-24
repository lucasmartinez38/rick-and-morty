const express = require('express');
const server = express()
const PORT = 3001;
///////////////////////////////////
// const getCharById = require('./Controllers/getCharById')
// const getCharDetail = require('./Controllers/getCharDetail')
//////////////////////////////////
server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})

