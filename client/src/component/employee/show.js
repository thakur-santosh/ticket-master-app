import React from 'react'
import axios from '../../config/axios'
import {  Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


export default class ListEmployee extends React.Component {
    constructor() {
        super()
        this.state = {
            employee: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/employee/${id}`)
            .then(response => {
                console.log(response.data)
                const employee = response.data
                this.setState({ employee })
            })
            .catch(err => {
                console.log(err)
            })
    }



    render() {
        return (
            <div>
                <h2>Show - {this.state.employee.name}</h2>
                <Row>
                    <Col xs="6">
                        <Card>
                            <CardImg top width="100%" src="https://mdbootstrap.com/img/Others/documentation/1.jpg" alt="Raju" />
                            <CardBody>
                                <CardTitle>{this.state.employee.name}</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                
            </div>
        )
    }
}