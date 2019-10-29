import React from 'react'
import axios from '../../config/axios'
import AddDepartment from './add'

export default class DepartmentList extends React.Component{
    constructor(){
        super()
        this.state = {
            departments :[]
        }
    }
    componentDidMount(){
        axios.get('/department')
        .then(response =>{
            const department = response.data
            this.setState({
                departments : department
            })
        })
        .catch(err =>{
            console.log(err)
        })
    }


    handleSubmit = (formData) =>{
        console.log(formData)
        axios.post('/department',formData)
        .then(response =>{
            const department = response.data
            this.setState(prevState => ({
                departments : [...prevState.departments,department]
            }))
        })
        .catch(err =>{
            console.log(err)
        })
    }

    render(){
        return(
            <div className="container">
                <p className="text-muted"><h1>Add Department</h1></p>
                <AddDepartment handleSubmit={this.handleSubmit}/>
                <hr/>
                <p className="text-muted">Departments</p>
                <div className="text-center">
                <table className="table">
                    <thead className="thead-light">
                        <th>#</th>
                        <th>Name</th>
                        <th>Action</th>
                    </thead>
                    
                        {
                            this.state.departments.map((department,index)=>{
                            return (<tbody>
                                <td>{index+1}</td>
                                <td>{department.name}</td>
                                <td><button type="button" class="btn btn-danger">Remove</button></td>
                            </tbody>)
                            })
                        }
                </table>
                </div>
            </div>
        )
    }
}