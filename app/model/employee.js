const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema= new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    mobile : {
        type : String,
        required : true
    },
    department : {
        type : Schema.Types.ObjectId,
        ref : 'Department'
    }
})

const Employee = mongoose.model('Employee',employeeSchema)
module.exports = Employee