const express = require('express')
const router = express.Router()
const customerController = require('../app/controller/customerController')
const departmentController = require('../app/controller/departmentController')
const employeeController = require('../app/controller/employeeController')
const ticketController = require('../app/controller/ticketController')
const userController = require('../app/controller/userController')
// customer router
router.get('/customer',customerController.list)
router.post('/customer',customerController.add)
router.put('/customer/:id',customerController.update)
router.delete('/customer/:id',customerController.destroy)
router.get('/customer/:id',customerController.show)

// department router
router.get('/department',departmentController.list)
router.post('/department',departmentController.add)
router.put('/department/:id',departmentController.update)
router.delete('/department/:id',departmentController.destroy)
router.get('/department/:id',departmentController.show)

// employee router
router.get('/employee',employeeController.list)
router.post('/employee',employeeController.add)
router.put('/employee/:id',employeeController.update)
router.delete('/employee/:id',employeeController.destroy)
router.get('/employee/:id',employeeController.show)

// ticket router
router.get('/ticket',ticketController.list)
router.post('/ticket',ticketController.add)
router.put('/ticket/:id',ticketController.update)
router.delete('/ticket/:id',ticketController.destroy)
router.get('/ticket/:id',ticketController.show)


// user router
router.get('/user',userController.show)
router.post('/register',userController.register)
router.post('/login',userController.login)

module.exports = router