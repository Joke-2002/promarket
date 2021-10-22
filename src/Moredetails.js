import React, { Component } from 'react'
import Products from './products.json'
import {Card} from 'react-bootstrap'
export default class Moredetails extends Component {
    render() {
        const d = Products.filter(t => t.id === this.props.match.params.id)
        return(
           <>
           {console.log(d)}
            <Card className="col-md-5 offset-md-3 shadow p-3 mb-5 bg-white rounded cards Cards">
            <div className='img' style={{backgroundImage:`url(${d[0].main_image})`}}></div>
            <Card.Body>
            <Card.Title>{d[0].title}</Card.Title>
            <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Card.Text>
            </Card.Body>
            </Card>
           </>
        )
    }
}
