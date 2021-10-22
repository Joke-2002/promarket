import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default class Car extends Component {
    render() {
        return (
            <div>
                <h1 align='center'>{this.props.jom} {this.props.a}</h1>
                <Button as={Link} to={'/'}>Назад</Button>
            </div>
        )
    }
}
