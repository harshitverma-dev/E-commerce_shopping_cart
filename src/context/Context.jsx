import React, { createContext, useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import { cartReducer } from './Reducers';
import { faker } from '@faker-js/faker';

export const Cart = createContext();

const Context = ({ children }) => {

    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.fashion(),
        isStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5])
    }))
    // console.log(products)
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    });

    console.log(state)

    return (
        <Cart.Provider value={{ state, dispatch }}>
            {children}
        </Cart.Provider>
    )
}

export default Context
