import React from 'react'
import { Form, Button } from "react-bootstrap"
import Rating from './Rating'
import { useState } from 'react'
import { CartState } from './Context/Context'



const Filter = () => {

    const [rate, setRate] = useState(0)

    const { productDispatch, productState: { byStock, byFastDelivery, sort, byRating  ,searchQuery } } = CartState();
    console.log(searchQuery,byRating)
    return (
        <div className='filters'>
            <span className='title'>Filter Products</span>
            <span>
                <Form.Check
                    inline
                    name="group1"
                    type="radio"
                    label="Ascending"
                    id={'inline-1'}
                    onChange={
                        () => {
                            productDispatch({
                                type: "SORT_BY_PRICE",
                                payload: "lowToHigh",
                            })
                        }
                    }
                />
            </span>
            <span>
                <Form.Check
                    inline
                    name="group1"
                    type="radio"
                    label="Decending"
                    id={'inline-2'}
                    onChange={
                        () => {
                            productDispatch({
                                type: "SORT_BY_PRICE",
                                payload: "highToLow",
                            })
                        }
                    }
                />
            </span>
            <span>
                <Form.Check
                    inline
                    name="group1"
                    type="checkbox"
                    label="Include Out of stock"
                    id={'inline-3'}
                    onChange={
                        () => {
                            productDispatch({
                                type: "FILTER_BY_STOCK",

                            })
                        }
                    }
                    checked={byStock}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    name="group1"
                    type="checkbox"
                    label="Fast Delivery only"
                    id={'inline-3'}
                    onChange={
                        () => {
                            productDispatch({
                                type: "FILTER_BY_FASTDELIVERY",

                            })
                        }
                    }
                    checked={byFastDelivery}
                />
            </span>
            <span>
                <lable style={{ paddingRight: 10 }}>Rating: </lable>
                <Rating rating={byRating}
                    style={{ cursor: "pointer" }}
                    onClick={(i) =>
                        productDispatch({
                            type: "FILTER_BY_RATING",
                            payload: i + 1,
                        })
                    }
                />
            </span>
            <Button variant="light"
                onClick={(i) =>
                    productDispatch({
                        type: "CLEAR_FILTER",
                   
                    })
                }

            >Clear Filters</Button>


        </div>
    )
}

export default Filter