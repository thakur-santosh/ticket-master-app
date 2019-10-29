import React from 'react'
import axios from '../../config/axios'
import { Table } from 'reactstrap';
import AddTicketForm from './addForm';

export default class ListTickets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tickets: []
        }
    }

    componentDidMount() {
        console.log('list :', this.props);

        axios.get('/ticket')
            .then(response => {
                const tickets = response.data
                this.setState({
                    tickets
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="container">
                    {
                        this.state.tickets.length > 0 ? (<div class="alert alert-warning" role="alert">Total Tickets - {this.state.tickets.length}</div>) :(<div class="spinner-border text-success" role="status"><span class="sr-only">Loading...</span></div>)
                    }
                <div className="row">
                    <div className="col-md-9">
                        <table className="table table-hover" >
                            <thead>
                                <tr className="table-success">
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>Message</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                    <th>Resolved</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.tickets.map(ticket => {
                                    let status
                                    if (ticket.isResolved) {
                                        status = 'Resolved'
                                    } else {
                                        status = 'Unresolved'
                                    }
                                    return (
                                        <tr>
                                            <td scope="row">{ticket.code}</td>
                                            <td>{ticket.customer.name}</td>
                                            <td>{ticket.department.name}</td>
                                            <td>{ticket.message}</td>
                                            <td>{ticket.priorty}</td>
                                            <td>{status}</td>
                                            <td style={{ "width": "200px" }}><input type="checkbox" name="isResolved" value={this.state.isResolved} />Resolved</td>

                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-3">
                        <AddTicketForm />
                    </div>
                </div>


            </div>
        )
    }
}