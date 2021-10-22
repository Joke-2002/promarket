import React from 'react'
import Products from './products.json';
import {Switch,Route,Link} from "react-router-dom";
import Basket from './Basket'; 
import {Navbar, Nav, Form, FormControl, Button, Container, Card} from 'react-bootstrap'
import Moredetails from './Moredetails';
import Car from './Car'
import Phone from './Phone'
import Book from './Book'
class App extends React.Component {
  state = {
    item: JSON.parse(localStorage.getItem('key')) || [],
    input:''
  }
  butt = (v)=>{
    if(this.state.item.find(r => r.id === v.id)){
    const s = this.state.item.filter(r => r.id !== v.id)
    this.setState(()=>{
        return{item: s}
    })}
    else{
    this.setState({item: [...this.state.item, v]})
   }}
   componentDidUpdate(prevProps, prevState, snapshot){
    if(prevState.item !== this.state.item){
        localStorage.setItem('key',JSON.stringify(this.state.item))
}
}
  render() {
    const p = Products.filter(y => y.title.toLowerCase().indexOf(this.state.input.toLowerCase()) !== -1);
    return (
      <>
       <Switch>
       <Route path={'/basket'} component={Basket}/>
      <Route path={'/car'}>
        <Car jom='Hello car' a='КР машинасы'/>
      </Route>
      <Route path={'/phone'}>
        <Phone joma='Hello phone' b='КР телефону'/>
      </Route>
      <Route path={'/book'}>
        <Book joke='Hello book' c='КР китеби'/>
      </Route>
      <Route path={'/Moredetails/:id'} component={Moredetails}/>   
       <Route path={'/'}>     
      <Navbar className='container' bg="light" expand="lg">
  <Navbar.Brand style={{marginLeft: '70px'}} className='p-2' href="#">Navbar scroll</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-between'>
      <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
        <Nav.Link href="#action1" className='position-relative'><Link to={'/Basket'}>Корзина</Link>
        <span class="position-absolute top-25 start-75 translate-middle badge rounded-pill bg-danger">
        {this.state.item.length}
        <span class="visually-hidden">unread messages</span>
        </span>
        </Nav.Link>
        <Nav.Link href="#action1"><Link to={'/Car'}>Car</Link></Nav.Link>
        <Nav.Link href="#action1"><Link to={'/Phone'}>Phone</Link></Nav.Link>
        <Nav.Link href="#action1"><Link to={'/Book'}>Book</Link></Nav.Link>
      </Nav>
    <Form className="d-flex forms">
      <FormControl
        onChange={(e)=>this.setState({input: e.target.value})}
        type="search"
        placeholder="Search"
        className="mr-2 formcontrol"
        aria-label="Search"
      />
    </Form>
  </Navbar.Collapse>
</Navbar>
  <h2 className='h2' style={{marginLeft: '100px'}}>Продукты (65)</h2>
    <Container>
    <div className=" d-flex justify-content-around flex-wrap m-1">
      {p.map((v, i) => {
            return (
            <Card className='shadow p-1 m-2 rounded cards' style={{ width: "18rem",}}>
            <div className='img' style={{backgroundImage:`url(${v.main_image})`}}></div>
            <Card.Body>
            <Card.Title className=''>{v.title}</Card.Title>
            <h4>{(v.discount) 
            ? 
            <>
            <span style={{color: 'green'}}>     
            {(v.price-(v.price * v.discount)/100).toLocaleString('ru-RU')}
            </span>
            <s style={{marginLeft: '7px', color: 'red'}}>{v.price.toLocaleString('ru-RU')}</s>
            </>
            : 
            <div style={{color: 'green'}}>
            {v.price.toLocaleString('ru-RU')}
            </div>}
            </h4>
            <div align='center'>
            <Button className='btn btn-primary butt'><Link to={`/Moredetails/${v.id}`} className='link'>Подробнее...</Link></Button>
            <Button className={this.state.item.find(r => r.id === v.id) ? 'btn btn-danger' : 'btn btn-primary'} onClick={() =>this.butt(v)}>{this.state.item.find(r => r.id === v.id) ? 'Удалить корзину' : 'Добавить корзину'}</Button>
            {v.discount && <div className='div2'>Скидка{v.discount}%</div>}
            </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>                
    </Container>
       </Route>
    </Switch>
    </>
    )
  }
}export default App;
