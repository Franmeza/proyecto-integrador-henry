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
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status
       }
       //es importante hacer la validacion de que la data exista antes de enviar una respuesta
       if(character.name)res.status(200).json(character)
       else res.status(404).json({message: data.error}) 
       //ya que la API proporciona el mensaje de error podemos extraerlo de la respuesta       
    })
    .catch((reason)=>{
     res.status(500).send({message: reason})
    })
}

module.exports= getCharById