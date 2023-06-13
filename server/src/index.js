const http = require("http")
const data = require("./utils/data")

const PORT = 3001;

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;

    if(url.includes("/rickandmorty/character") ){
        const id = Number(url.split("/").at(-1))

        const character = data.find((character) => character.id === id)

        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(character))
    } else {
        
        res.writeHead(404, { "Content-Type": "application/json" });
        
        res.end(JSON.stringify({ message: "Character not found" }));
      }
}).listen(PORT, "localhost")