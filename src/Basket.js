import React from 'react'
import {Card, Button, Container, Image, Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Car from './Car'
 class Basket extends React.Component {
     state={
        item: JSON.parse(localStorage.getItem('key')) || []
     }
     butt = (v)=>{
        if(this.state.item.find(r => r.id === v.id)){
        this.setState((p)=>{
            const s = this.state.item.filter(r => r.id !== v.id)
            return{item: s}
    
        })}
        else{
        this.setState({item: [...this.state.item, v]})
       }
       localStorage.setItem('key', JSON.stringify(this.state.item))

    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevState.item !== this.state.item){
            localStorage.setItem('key',JSON.stringify(this.state.item))}
    }
    render() {
        console.log(this.state.item)
        return (
            <>
            <h1 className='mt-5 bg-light'>
                Products <Badge bg='secondary'>({this.state.item.length})</Badge>
            </h1>
            <Car jom='RU машинасы'/>
            <Container>
           {!(this.state.item.length > 0) && <div align='center'><Button as={Link} to={'/'}><h1>Назад</h1></Button><div className='image'><Image src="https://i.pinimg.com/originals/fa/d4/9f/fad49f21d3a7a0cf2e727c96beda4fe3.jpg" fluid /></div></div>}
            <div className=" d-flex justify-content-around flex-wrap m-1">
            {this.state.item.map((v) => {
            return (
            <Card className='shadow p-1 m-2 rounded cards' style={{ width: "18rem",}}>
            <div className='img' style={{backgroundImage:`url(${v.main_image})`}}></div>
            <Card.Body>
            <Card.Title className=''>{v.title}</Card.Title>
            <div align='center'>
            <Button className='btn btn-primary butt'>Подробнее...</Button>
            <Button className={this.state.item.find(r => r.id === v.id) ? 'btn btn-danger' : 'btn btn-primary'} onClick={() =>this.butt(v)}>{this.state.item.find(r => r.id === v.id) ? 'Удалить корзину' : 'Добавить корзину'}</Button>
            {v.discount && <div className='div2'>Скидка{v.discount}%</div>}
            </div>
            </Card.Body>
          </Card>
        );
        })}
        </div>
            </Container>
        </>
        )
    }
}export default Basket;
