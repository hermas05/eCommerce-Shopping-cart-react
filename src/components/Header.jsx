import React from 'react'
import { Navbar,Container, FormControl,Dropdown, Badge ,Button} from 'react-bootstrap';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { CartState } from './Context/Context';
import { AiFillDelete } from "react-icons/ai";

function Header() {

    const {state : {cart} , dispatch,productDispatch}=CartState();
    return (
        <Navbar bg="dark" variant='dark' style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to='/'>Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl style={{ width: 500 }} placeholder='Search a product'
                        className='m-auto'
                        onChange={
                            (e) => {
                                productDispatch({
                                    type: "FILTER_BY_SEARCH",
                                    payload: e.target.value,
                                })
                            }
                        }
                    />
                </Navbar.Text>
                <Dropdown align="end">
                    <Dropdown.Toggle variant="success" >
                        <FaCartShopping color='white' fontSize="25px" />
                        <Badge bg='none'>{cart.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{minWidth : 350}} className='drop-menu'>
                        {
                            cart.length>0?(
                                <>
                                {
                                    cart.map(prod=>{
                                        return (<span className="cartitem" key={prod.id}>
                                            <img
                                            src={prod.image}
                                            className='cartItemImg'
                                            alt={prod.name}
                                            />
                                             <div className="cartItemDetail">
                                             <span>{prod.name}</span>
                                            <span>₹ {prod.price}</span>
                                             </div>
                                             <AiFillDelete
                                             fontSize = "20px"
                                             style ={{cursor : "pointer"}}
                                             onClick={()=>{
                                                dispatch({
                                                    type :"REMOVE_FROM_CART",
                                                    payload:prod,
                                                })
                                             }}
                                             />
                                        </span>)
                                    })
                                }
                                <Link to="/cart">
                                 <Button style ={{width: "95%" , margin :"0 10px"}}>
                                    Go To Cart
                                 </Button>
                                </Link>
                                </>
                            ):(<span style={{padding : 10}}>Cart is Empty</span>)
                        }
                        
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    )
}

export default Header