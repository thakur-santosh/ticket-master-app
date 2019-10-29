import React from 'react'

export default class AddDepartment extends React.Component{
            constructor(props){
                super()
                this.state = {
                    name : ''
                }
            }

            handleChange =(e) =>{
                this.setState({
                    [e.target.name] : e.target.value
                })
            }

            handleSubmit =(e) =>{
                e.preventDefault()
                const formData = {
                    name : this.state.name
                }
                console.log('department Forms' ,formData)
                this.props.handleSubmit(formData)
                this.setState({
                    name : ''
                })
            }

            render(){
                return(
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                        <div className="col-md-4">
                        <input name="name" value = {this.state.name} type="text" onChange={this.handleChange} className="form-control"/>
                        </div>
                        <div className="col-md-4">
                        <button type="button" class="btn btn-outline-secondary">Add Department</button>
                        </div>
                        </div>
                        
                        
                        
                    </form>
                )
            }

}