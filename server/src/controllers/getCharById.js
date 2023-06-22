const axios = require('axios') ;

function getCharById(req,res){

    const URL = "https://rickandmortyapi.com/api/character/"
    const {id} = req.params
   
    axios
    .get(`${URL}/${id}`)
    .then((response) =>{
       const data = response.data

       const character = { 
        id:id,
        name: data.name,
        gender: data.geneder,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status
       }
       if(character.name)res.status(200).json(character)
       else res.status(404).json({message: 'Not found'})
       
    })
    .catch((error)=>{
     res.status(500).json({message: 'Server failed'},error)
    })
}

module.exports= getCharById