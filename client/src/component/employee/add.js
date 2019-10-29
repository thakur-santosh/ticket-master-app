import React from 'react'
import axios from '../../config/axios'


export default class AddEmployee extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            mobile: '',
            department: '',
            departments: []
        }
    }

    componentDidMount() {
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
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let dept
        this.state.departments.forEach(department => {
            if (department.name == this.state.department) {
                dept = department._id
            }
        })

        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            department: dept
        }
        console.log(formData)
        axios.post('/employee', formData)
            .then(response => {
                this.props.history.push('/employee')
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <h3 className="alert alert-danger">Add employee</h3>
                    <form onSubmit={this.handleSubmit} className="form-group">
                    <label>Name : </label>
                    <input type="text" value={this.state.name} name="name" onChange={this.handleChange} className="form-control"/><br />
                    <label>Email</label>
                    <input type="text" value={this.state.email} name="email" onChange={this.handleChange} className="form-control"/><br />
                    <label>Mobile</label>
                    <input type="number" value={this.state.mobile} name="mobile" onChange={this.handleChange} className="form-control"/><br />
                    <label>Department</label>
                    <select value={this.state.department} onChange={this.handleChange} name="department" className="form-control">
                        <option value="">select</option>
                        {
                            this.state.departments.map(department => {
                                return <option>{department.name}</option>
                            })
                        }
                    </select><br />
                    <input type="submit" className="btn btn-outline-primary"/>
                </form>
                    </div>
                </div>
                </div>
                )
            }
}