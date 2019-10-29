const Department = require('../model/department')

module.exports.list = (req,res) =>{
    Department.find()
    .then(department =>{
        res.json(department)
    })
    .catch(err =>{
        res.json(err)
    })
}

module.exports.add = (req,res) =>{
    const body = req.body
    const department = new Department({
        name : body.name
    })
    department.save()
    .then(department =>{
        res.json(department)
    })
    .catch(err =>{
        res.json(err)
    })
}

module.exports.update = (req,res) =>{
    const {body} = req
    const {id} = req.params
    Department.findByIdAndUpdate(id,body, {new : true , runValidators : true})
    .then(department =>{
        if(department){
            res.json(department)
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
    Department.findByIdAndDelete(id)
    .then(department =>{
        res.json(department)
    })
    .catch(err =>{
        res.json(err)
    })
}

module.exports.show =(req,res) =>{
    const id = req.params.id
    Department.findById(id)
    .then(department =>{
        res.json(department)
    })
    .catch(err =>{
        res.json(err)
    })
}