import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'

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
            <div>
                <h1>Listing employee</h1>
                <table >
                    <thead>
                        <td>ID</td>
                        <td>Name</td>
                    </thead>
                    {
                        this.state.employees.map((employee, index) => {
                            return (
                                <tbody>
                                    <td>{index + 1}</td>
                                    <td><Link to={`/employee/${employee._id}`}>{employee.name}</Link></td>
                                </tbody>
                            )
                        })
                    }
                </table>
                <Link to="/employee/add">Add Employee</Link>
            </div>
        )
    }
}