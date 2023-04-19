
const http = require('http');
const data = require('./Utils/data')


http
.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if( req.url.includes('/rickandmorty/character')){
        
        const id = req.url.split('/').at(-1);
        
        let charFound = data.find((character) => {
            return character.id == +id;

        })
    
        return res
        .writeHead(200, {'Content-Type': 'application/json'})
        .end(JSON.stringify(charFound))

        console.log(typeof +id);

    }    
})
.listen(3001)
    
    