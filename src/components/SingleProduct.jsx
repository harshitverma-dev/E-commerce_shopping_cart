import React, { useEffect } from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import Rating from './Rating';
import { useContext } from 'react';
import { Cart } from '../context/Context';

const SingleProduct = ({ items }) => {
    const { state, dispatch } = useContext(Cart);

    useEffect(() => {
        localStorage.setItem('carts', JSON.stringify(state.cart));
    }, [state.cart])
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={items.image} />
                <Card.Body>
                    <Card.Title>{items.name}</Card.Title>
                    <Card.Text>
                        ₹ {items.price.split('.')[0]}
                    </Card.Text>
                    <Card.Text className='d-flex'>
                        <Rating rate={items.ratings} />
                    </Card.Text>
                    {items.fastDelivery ? (
                        <Card.Text>
                            Fast Delivery
                        </Card.Text>
                    ) : (
                        <Card.Text>
                            4 days Delivery
                        </Card.Text>
                    )}
                    {
                        state.cart.some(c => c.id === items.id) ? (
                            <Button onClick={() => {
                                dispatch({
                                    type: 'Remove_From_Cart',
                                    payload: items.id
                                })
                            }} variant='danger'>Remove From Cart</Button>
                        ) : (
                            <Button onClick={() => {
                                dispatch({
                                    type: 'Add_To_Cart',
                                    payload: items
                                })
                            }} disabled={!items.isStock} variant={items.isStock ? "primary" : "secondary"}>
                                {items.isStock ? "Add to Cart" : "Out of  Stock"}
                            </Button>
                        )
                    }
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleProduct
