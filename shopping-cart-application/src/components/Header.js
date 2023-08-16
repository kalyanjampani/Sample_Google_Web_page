import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { Container, FormControl, Navbar,Nav, Dropdown, Badge,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'
import {AiFillDelete} from "react-icons/ai"

const Header = () => {

    const{state:{cart},dispatch,productDispatch} = CartState();

  return (
    <Navbar bg = "dark" variant = "dark" style = {{height: 80}}>
        <Container>
            <Navbar.Brand>
                <Link to = "/">Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl style={{width: 500}} placeholder='Search Product' className='m-auto'
                onChange={(e)=>productDispatch({
                    type:"FILTER_BY_SEARCH",
                    payload: e.target.value
                })}/>
            </Navbar.Text>
            <Nav>
                <Dropdown>
                    <Dropdown.Toggle variant='success'>
                        <FaShoppingCart color = "white" fontSize = "25px"/>
                        <Badge bg='success'>{cart.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{minWdth:370}}>
                        {cart.length>0?(
                            <>
                              {cart.map((prod)=>(
                                <span className='cartitem' key={prod.id}>
                                    <img className="cartItemImg" src="https://i1.wp.com/sawongam.com/wp-content/uploads/2021/02/House-of-the-Dragon-Trailer-Release-Date-Cast-Plot-Spoilers-for-the-Game-of-Thrones-Prequel-e1579718415683-scaled.jpg?resize=1536%2C864&ssl=1" alt={prod.name}/>
                                    <div className="cartItemDetail">
                                        <span>{prod.name}</span>
                                        <span>₹ {prod.price.split(".")[0]}</span>
                                    </div>
                                    <AiFillDelete fontSize="20px" style={{cursor:"pointer"}}
                                        onClick={()=>{
                                            dispatch({
                                                type:"REMOVE-FROM-CART",
                                                payload: prod
                                            })
                                        }}/>
                                   
                                </span>
                              ))}
                               <Link to="/cart">
                                        <Button style={{ width: "95%", margin: "0 10px" }}>
                                        Go To Cart
                                        </Button>
                                    </Link>
                            </>
                        ):(<span style={{padding: 10}}>
                            Cart Is Empty!!!
                        </span>)}
                        
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header