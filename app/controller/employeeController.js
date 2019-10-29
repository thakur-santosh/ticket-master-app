const Employee = require('../model/employee')

module.exports.list = (req,res) =>{
    Employee.find()
    .populate('department')
    .then(employee =>{
        if(employee){
            res.json(employee)
        }else{
            res.json({})
        }
    })
    .catch(err =>{
        res.json(err)
    })
}

module.exports.add = (req,res) =>{
    const body = req.body
    const employee = new Employee({
        name : body.name,
        email : body.email,
        mobile : body.mobile,
        department : body.department
    })
    employee.save()
    .then(employee =>{
        res.json(employee)
    })
    .catch(err =>{
        res.json(err)
    })
}
module.exports.update = (req,res) =>{
    const {body} = req
    const {id} = req.params
    Employee.findByIdAndUpdate(id,body, {new : true , runValidators : true})
    .then(employee =>{
        if(employee){
            res.json(employee)
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
    Employee.findByIdAndDelete(id)
    .then(employee =>{
        res.json(employee)
    })
    .catch(err =>{
        res.json(err)
    })
}
module.exports.show =(req,res) =>{
    const id = req.params.id
    Employee.findById(id)
    .then(employee =>{
        res.json(employee)
    })
    .catch(err =>{
        res.json(err)
    })
}
