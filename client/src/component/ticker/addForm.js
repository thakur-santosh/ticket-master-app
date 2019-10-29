import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import axios from '../../config/axios';

export default class AddTicketForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customer: '',
            department: '',
            employee : '',
            message: '',
            priorty: '',
            departments: [],
            customers : [],
            employees : [],
            isResolved : ''
        }
    }


    componentDidMount() {
        console.log('add' ,this.props);
        
        axios.get('/department')
            .then(response => {
                const department = response.data
                this.setState({
                    departments: department
                })
            })
            .catch(err => {
                console.log(err)
            })
        
        axios.get('/customer')
        .then(response =>{
            const customers = response.data
            this.setState({customers})
        })
        .catch(err =>{
            console.log(err)
        })    

        //  axios.get('/employee')
        //  .then(response =>{
        //      this.setState({
        //          employees : response.data
        //      })
        //  })
        //  .catch(err =>{
        //      console.log(err)
        //  })   

    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.props)

        let dept
        this.state.departments.forEach(department =>{
            if(department.name == this.state.department){
                dept = department._id
                console.log(dept)
                }
        })

        let cus_id
        this.state.customers.forEach(customer =>{
            if(customer.name == this.state.customer){
                cus_id = customer._id
                }
        })

        let emp_id
        this.state.employees.forEach(employee =>{
            if(employee.name == this.state.employee){
                emp_id = employee._id
                }
        })




        const formData = {
            customer : cus_id,
            code : Number(new Date()),
            isResolved : false,
            employee : emp_id,
            priorty : this.state.priorty,
            department : dept,
            message : this.state.message

        }
        console.log(formData);
        axios.post('/ticket',formData)
        .then(response =>{
            console.log(response.data);
            this.props.history.push('/employee')
            
        })
        .catch(err =>{
            console.log(err)
        })
        // 
        
        
        
        
        // let dept
        // this.state.departments.forEach(department =>{
        //     if(department.name == this.state.department){
        //         dept = department._id
        //         }
        // })

        // let name_id
        // this.state.customers.forEach(customer =>{
        //     if(customer.name == this.state.name){
        //         name_id = customer._id
        //         }
        // })

        // const formData = {
        //     name : name_id,
        //     department : dept,
        //     priority : this.state.priority,
        //     message : this.state.message
        // }
        // console.log(formData)
        // axios.post('/ticket',formData)
        // .then(response =>{
        //     console.log(response.data)
        // })
        // .catch(err =>{
        //     console.log(err)
        // })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRadio = (e) =>{
        this.setState({
            priority : e.target.value
        })
    }

    handleDepartment = (e) =>{
        console.log(e.target.value);
        e.persist()
        this.setState({
            [e.target.name]: e.target.value
        })
        
        
        // this.setState({
        //     [e.target.name] : e.target.value
        // })
        // console.log(this.state.department)
        axios.get('/employee')
        .then(response =>{
            const emplList = response.data
            // console.log(emplList)
            const employees=emplList.filter(emp =>{
                return e.target.value == emp.department.name
            })
            console.log(employees)
            this.setState({employees})
        })
        .catch(err =>{
            console.log(err)
        })
    }

    

    render() {
        return (
            <div>
                <div class="alert alert-success" role="alert">
                <h3>Submit Ticket</h3>
                <form onSubmit={this.handleSubmit} className="form-group">
                    <label>Name : </label>
                    <input type="text" value={this.state.name} name="customer" onChange={this.handleChange} className="form-control"/><br />
                    <label>Department :</label>
                    <select  onChange={this.handleDepartment} name="department" value={this.state.department} className="custom-select">
                        <option>Select</option>
                        {
                            this.state.departments.map(department => {
                                return <option >{department.name}</option>
                            })
                        }
                    </select> <br />
                    <label>Employee : </label>  
                    <select value={this.state.employee} onChange={this.handleChange} name="employee" className="custom-select">
                        <option>Select</option>
                        {
                            this.state.employees.map(employee => {
                                return <option>{employee.name}</option>
                            })
                        }
                    </select> <br />
                    <label className="form-check-label">Priority : </label> <br />
                    <input type="radio" name="priorty" value="High" onChange={this.handleChange} className="form-check-input"/> High<br />
                    <input type="radio" name="priorty" value="Medium" onChange={this.handleChange} className="form-check-input"/> Medium<br />
                    <input type="radio" name="priorty" value="Low" onChange={this.handleChange} className="form-check-input"/> Low <br />
                    <label>Message :</label>
                    <textarea rows="10" cols="50" onChange={this.handleChange} value={this.state.message} name="message" className="form-control"></textarea><br />
                    <input type="submit" className="btn btn-primary"/>
                </form>
                </div>
            </div>
        )
    }
}




















                        // {/* <Form onSubmit={this.handleSubmit}>
                        //     <FormGroup row>
                        //         <Label for="name" sm={2}>Name</Label>
                        //         <Col sm={10}>
                        //             <Input type="text" name="name" id="name" placeholder="Name" value={this.state.name}/>
                        //         </Col>
                        //     </FormGroup>
                        //     <FormGroup row>
                        //         <Label for="select" sm={2}>Department</Label>
                        //         <Col sm={10}>
                        //             <Input type="select" name="department" id="select" value={this.state.department}>
                        //             <option>Select</option>
                        //             {
                        //                 this.state.departments.map(department =>{
                        //                     return <option>{department.name}</option>
                        //                 })
                        //             }
                        //             </Input>
                        //         </Col>
                        //     </FormGroup>
                        //     <FormGroup row>
                        //         <Label for="message" sm={2}>Message</Label>
                        //         <Col sm={10}>
                        //             <Input type="textarea" name="message" id="message" />
                        //         </Col>
                        //     </FormGroup>
                        //     <FormGroup tag="fieldset" row>
                        //         <legend className="col-form-label col-sm-2">Priority</legend>
                        //         <Col sm={10}>
                        //             <FormGroup check>
                        //                 <Label check>
                        //                     <Input type="radio" name="priority" />Medium{' '}
                        //                 </Label>
                        //             </FormGroup>
                        //             <FormGroup check>
                        //                 <Label check>
                        //                     <Input type="radio" name="priority" />High{' '}
                        //                 </Label>
                        //             </FormGroup>
                        //             <FormGroup check >
                        //                 <Label check>
                        //                     <Input type="radio" name="priority"  />Low{' '}
                        //                 </Label>
                        //             </FormGroup>
                        //         </Col>
                        //     </FormGroup>
                        //     <Button inline>Submit</Button>{' '}
                        //     <Button inline>Reset</Button>
                        // </Form> */}

