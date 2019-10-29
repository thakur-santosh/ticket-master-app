const Customer = require('../model/customer')

module.exports.list = (req,res) =>{
    Customer.find()
    .then(customer =>{
        if(customer){
            res.json(customer)
        }else{
            res.json({})
        }
    })
    .catch()
}

module.exports.add=(req,res)=>{
    const body = req.body
    const customer = new Customer({
        name : body.name,
        email : body.email,
        mobile : body.mobile

    })
    customer.save()
    .then(customer =>{
        res.json(customer)
    })
    .catch(err =>{
        res.json(err)
    })

}

module.exports.update = (req,res) =>{
    const {body} = req
    const {id} = req.params
    Customer.findByIdAndUpdate(id,body, {new : true , runValidators : true})
    .then(customer =>{
        if(customer){
            res.json(customer)
        }else {
            res.json({})
        }
    })
    .catch(err =>{
        res.json(err)
    })
}

module.exports.destroy = (req,res) =>{
    const id = req.params.id
    Customer.findByIdAndDelete(id)
    .then(customer =>{
        res.json(customer)
    })
    .catch(err =>{
        res.json(err)
    })
}

module.exports.show =(req,res) =>{
    const id = req.params.id
    Customer.findById(id)
    .then(customer =>{
        res.json(customer)
    })
    .catch(err =>{
        res.json(err)
    })
}
