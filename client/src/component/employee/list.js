import React from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'

export default class EmployeeList extends React.Component {
    constructor() {
        super()
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get('/employee')
            .then(response => {
                console.log('emp', response.data)
                const employee = response.data
                this.setState({
                    employees: employee
                })
            })
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-warning">Listing Employee</h3>
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-bordered">
                            <thead>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Department</td>
                            </thead>
                            {
                                this.state.employees.map((employee, index) => {
                                    return (
                                        <tbody>
                                            <td>{index + 1}</td>
                                            <td><Link to={`/employee/${employee._id}`}>{employee.name}</Link></td>
                                            <td>{employee.department.name}</td>
                                        </tbody>
                                    )
                                })
                            }
                        </table>
                        <div className="alert alert-danger"><Link to="/employee/add">Add Employee</Link></div>
                    </div>
                </div>

                
            </div>
        )
    }
}