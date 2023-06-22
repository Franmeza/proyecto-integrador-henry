const users = require('../utils/users')

function login (req,res){

    const {email, password} = req.query

    users.map((user)=>{
     if(email === user.email && password === user.password) res.status(200).json({access:true})
     else res.status(401).json({access:false})
    })

}

module.exports = login;