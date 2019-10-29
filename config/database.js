const mongoose = require('mongoose')


// db connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/ticket-master', { useUnifiedTopology: true, useNewUrlParser : true})
.then(connection =>{
    console.log('Connected to database')
})
.catch(err =>{
    console.log(err)
})

module.exports = mongoose