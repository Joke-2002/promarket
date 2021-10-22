import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Phone extends Component {
    
    render() {
        return (
            <div>
                <h1 align='center'>{this.props.joma} {this.props.b}</h1>
                <Button as={Link} to={'/'}>Назад</Button>
            </div>
        )
    }
}
