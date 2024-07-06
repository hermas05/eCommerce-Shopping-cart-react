import React from 'react'
import { Card,Button } from "react-bootstrap"
import Rating from './Rating'
import { CartState } from './Context/Context'

const SingleProductComponent = (props) => {

    const {
        state : { cart },dispatch
    } = CartState()
    
    return (
        <div className='products'>
            <Card>
                <Card.Img variant='top' src={props.prod.image} alt={props.prod.name} />
            </Card>
            <Card.Body>
                <Card.Title>{props.prod.name}</Card.Title>
                <Card.Subtitle style={{ padding: 10 }}>
                    <span>₹ {props.prod.price} </span>
                    {
                        props.prod.fastDelivery? (
                            <div>Fast Delivery</div>
                        ):(
                            <div>4 days delivery</div>
                        )
                    }
                    <Rating rating = {props.prod.ratings} />
                    
                </Card.Subtitle>
                {
                    cart.some((p)=>p.id===props.prod.id)?(
                        <Button onClick={
                            ()=>{
                                dispatch({
                                    type : 'REMOVE_FROM_CART',
                                    payload:props.prod,
                                });
                                
                            }
                        } variant="danger" >Remove from cart</Button>
                    ):(<Button onClick={
                        ()=>{
                            dispatch({
                                type : 'ADD_TO_CART',
                                payload: props.prod,
                            });
                            
                        }
                    } variant="primary" disabled ={!props.prod.inStock}>{!props.prod.inStock?"Out of stock":"Add to cart"}</Button>)
                }
                
                    
                
            </Card.Body>
        </div>
    )
}

export default SingleProductComponent