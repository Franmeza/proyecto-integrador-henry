const users = require('../utils/users')

function login (req,res){

    const {email, password} = req.query

    users.forEach((user)=>{
     if(email === user.email && 
        password === user.password) res.status(200).json({access:true})
    });

    return res.status(401).json({access:false})
}

module.exports = login;