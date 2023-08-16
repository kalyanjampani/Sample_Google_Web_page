import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context'
import { Button, ListGroup, Row,Col,Image,Form} from 'react-bootstrap'
import {AiFillDelete} from "react-icons/ai"
import { Rating } from './Rating'
import "./styles.css"

function Cart() {
  const {state:{cart},dispatch} = CartState()

  const[total,setTotal] = useState();

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty,0))
  },[cart])

  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {cart.map((na)=>(
            <ListGroup.Item key = {na.id}>
              <Row>
                <Col md={2}>
                  <Image src="https://i1.wp.com/sawongam.com/wp-content/uploads/2021/02/House-of-the-Dragon-Trailer-Release-Date-Cast-Plot-Spoilers-for-the-Game-of-Thrones-Prequel-e1579718415683-scaled.jpg?resize=1536%2C864&ssl=1" alt={na.name} fluid rounded />
                </Col>
                <Col md = {2}>
                  <span>{na.name}</span>
                </Col>
                <Col md = {2}><span>₹ {na.price}</span></Col>
                <Col md = {2}>
                  <Rating rating = {na.ratings}/>
                </Col>
                <Col md = {2}>
                  <Form.Control as = "select" value = {na.qty} onChange = {(e)=>dispatch({
                    type: "CHANGE-CART-QUANTITY",
                    payload:{
                      id: na.id,
                      qty: e.target.value
                    }
                  })}>
                  {[...Array(na.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col>
                <AiFillDelete fontSize="20px" style={{cursor:"pointer"}}
                                        onClick={()=>{
                                            dispatch({
                                                type:"REMOVE-FROM-CART",
                                                payload: na
                                            })
                                        }}/>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className='filters summary'>
        <span className='title'>Subtotal ({cart.length}) items</span>
        <span style={{fontWeight: 700, fontSize: 20}}>Total: ₹ {total}</span>
        <Button disabled = {cart.length === 0}>Proceed to Checkout</Button>
      </div>
    </div>
  )
}

export default Cart