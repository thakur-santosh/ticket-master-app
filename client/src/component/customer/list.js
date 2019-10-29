import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../../config/axios'
import AddCustomer from './add'

export default class CustomerList extends React.Component {
    constructor() {
        super()
        this.state = {
            customers: [],
            isForm: false
        }
    }

    componentDidMount() {
        axios.get('/customer')
            .then(response => {
                console.log('customer', response.data)
                const customers = response.data
                this.setState({
                    customers
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleClick = () => {
        this.setState((prevState) => {
            return {
                isForm: true
            }
        })
    }

    handleSubmit = (formData) => {
        console.log('formData', formData)
        axios.post('/customer', formData)
            .then(response => {
                const customer = response.data
                this.setState(prevState => ({
                    customers: [...prevState.customers, customer]
                }))
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <h1>Customer - {this.state.customers.length}</h1>
                <table >
                    <thead>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </thead>
                    {
                        this.state.customers.map((customer, id) => {
                            return (
                                <tbody>
                                    <td>{id + 1}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.mobile}</td>
                                    <td><Link to={`customer/${customer._id}`}>Show</Link></td>
                                </tbody>
                            )
                        })
                    }
                </table>
                <button onClick={this.handleClick}>Add Customer</button>
                {this.state.isForm && <AddCustomer handleSubmit={this.handleSubmit} />}
            </div>
        )

    }
}