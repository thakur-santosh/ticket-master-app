const User = require('../model/user')

module.exports.show = (req,res) =>{
    User.find()
    .then(user =>{
        res.json(user)
    })
    .catch(err =>{
        res.json(err)
    })
}

module.exports.register =(req,res) =>{
        const body = req.body
        const user = new User({
            name : body.name,
            email : body.email,
            password : body.password
        })
        user.save()
        .then(user =>{
            res.json(user)
        })
        .catch(err =>{
            res.json(err)
        })
}

module.exports.login= function(req,res){
    const body = req.body
    let userInfo
    User.findByCredential(body.email,body.password)
    .then(function(user){
        // res.json(user)
        return user.generateTokens()
        
    })
    .then(function(token){
        res.json(token)
    })
    .catch(function(err){
        res.json(err)
    })
    .catch(function(err){
        res.json(err)
    })
}

