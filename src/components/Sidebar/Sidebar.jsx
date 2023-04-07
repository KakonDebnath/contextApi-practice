import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Layout/Main';
import Item from './Item';

const Sidebar = () => {
    const [products, setProducts] = useContext(CartContext)
    return (
        <div className='sticky top-0 mb-5'>
            <h2 className='text-center py-3 rounded bg-lime-300 my-5'>Order History: {products.length}</h2>
            <div>
                <ul>
                    {
                        products.map(item =>
                            <Item key={item._id} item={item}></Item>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;