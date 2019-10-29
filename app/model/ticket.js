const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema= new Schema({
    customer :{
        type : Schema.Types.ObjectId,
        ref : 'Customer',
        required : true
    },
    department : {
        type : Schema.Types.ObjectId,
        ref : 'Department',
        required : true
    },
    employee : {
        type : Schema.Types.ObjectId,
        ref : 'Employee',
        required : true
    },
    message : {
        type : String,
        required : true
        
    },
    priorty : {
        type : String,
        required : true
    },
    code : {
        type : String,
        required : true
    },
    isResolved : {
        type : Boolean,
        required : true
    }
})

const Ticket = mongoose.model('Ticket',ticketSchema)
module.exports = Ticket