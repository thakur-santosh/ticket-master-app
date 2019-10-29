const  mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate : {
            validator : function(value){
                return validator.isEmail(value)
            },
            message : function(){
                return 'Invalid email format'
            }
        }
    },
    password : {
        type : String,
        required : true,
        minlength : 8,
        maxlength : 120
    },
    tokens : [
        {
            token : {
                type : String
            },
            createdAt : {
                type : String,
                default : Date.now
            }
        }
    ]
})


// pre hooks
userSchema.pre('save',function(next){
    const user = this
    if(user.isNew){
        bcryptjs.genSalt(10)
        .then(function(salt){
            bcryptjs.hash(user.password,salt)
            .then(function(encPass){
                user.password = encPass
                next()
            })
        })
    }else{
        next()
    }
})

// own static method

userSchema.statics.findByCredential = function(email,password){
        const User = this
        return User.findOne({email})
        .then(function(user){
            if(!user){
                return Promise.reject({error : 'Invalid email'})
            }
            return bcryptjs.compare(password,user.password)
            .then(function(response){
                    if(response){
                        return Promise.resolve(user)
                    }else{
                        return Promise.reject({error : 'Invalid password'})
                    }
            })
            .catch(function(err){
                return Promise.reject({error : 'Invalid password'})
            })
        })
        .catch(function(error){
            return Promise.reject(error)
        })

}

userSchema.methods.generateTokens = function(){
        const user = this
        const tokenData = {
            user : user._id,
            name : user.name,
            createdAt : Number(new Date())
        }
        const token = jwt.sign(tokenData,'jwt@123')
        user.tokens.push({
            token : token
        })
        return user.save()
        .then(function(user){
            return Promise.resolve(token)
        })
        .catch(function(err){
            return Promise.reject(err)
        })

}

const User = mongoose.model('User',userSchema)

module.exports = User 