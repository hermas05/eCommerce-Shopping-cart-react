import React from 'react'
import { CartState } from './Context/Context';
import SingleProductComponent from './SingleProductComponent';
import './styles.css'
import Filter from './Filter';


function Home() {

    const { state: {
        products
    }, productState: { byStock, byFastDelivery, sort, byRating, searchQuery } } = CartState();

    const transformProducts = () => {
        let sortedProducts = products;

        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            );
        }

        if (!byStock) {
            sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }

        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
        }

        if (byRating) {
            sortedProducts = sortedProducts.filter(
                (prod) => prod.ratings >= byRating
            );
        }

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) =>
            prod.name.toLowerCase().includes(searchQuery)
            );
        }

        return sortedProducts;
    };

    return (
        <div className='home'>
            <Filter />
            <div className='productContainer'>
                {transformProducts().map(prod => {
                    return (
                        <SingleProductComponent prod={prod} key={prod.id} />
                    )
                })}
            </div>

        </div>
    )
}

export default Home