const Ticket = require('../model/ticket')

module.exports.list = (req,res) =>{
    Ticket.find()
    .populate('employee')
    .populate('customer')
    .populate('department')
    .then(ticket =>{
        res.json(ticket)
    })
    .catch(err =>{
        res.json(err)
    })
}

module.exports.add = (req,res) =>{
    const body = req.body
    const ticket = new Ticket({
        customer : body.customer,
        department : body.department,
        employee : body.employee,
        message : body.message,
        priorty : body.priorty,
        code : body.code,
        isResolved : body.isResolved
    })
    ticket.save()
    .then(ticket =>{
        res.json(ticket)
    })
    .catch(err =>{
        res.json(err)
    })
}
module.exports.update = (req,res) =>{
    const {body} = req
    const {id} = req.params
    Ticket.findByIdAndUpdate(id,body, {new : true , runValidators : true})
    .then(ticket =>{
        if(ticket){
            res.json(ticket)
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
    Ticket.findByIdAndDelete(id)
    .then(ticket =>{
        res.json(ticket)
    })
    .catch(err =>{
        res.json(err)
    })
}
module.exports.show =(req,res) =>{
    const id = req.params.id
    Ticket.findById(id)
    .then(ticket =>{
        res.json(ticket)
    })
    .catch(err =>{
        res.json(err)
    })
}
