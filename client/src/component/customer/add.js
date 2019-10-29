import React from 'react'

export default class AddCustomer extends React.Component{
    constructor(props){
        super()
        this.state = {
            name :'',
            email : '',
            mobile : ''
        }
    }
    handleChange =(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            name : this.state.name,
            mobile : this.state.mobile,
            email : this.state.email
        }
        this.props.handleSubmit(formData)
        this.setState({
            name : '',
            email : '',
            mobile : ''
        })

    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name"></input><br />
                    <label htmlFor="email">Email</label>
                    <input type="text" value={this.state.email} onChange={this.handleChange} name="email"></input><br />
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" value={this.state.mobile} onChange={this.handleChange} name="mobile"></input><br />
                    <input type = "submit"/>
                </form>
            </div>
        )
    }
}