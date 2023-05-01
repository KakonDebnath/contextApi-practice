import React from 'react';
import { useContext } from 'react';
import { CartContext, ProductsContext } from '../Layout/Main';
import Item from './Item';

const Sidebar = () => {
    const [products] = useContext(CartContext);
    const {handleRemovedCart} = useContext(ProductsContext);
    return (
        <div className='sticky top-0 mb-5 w-2/3 md:w-full mx-auto'>
            <h2 className='text-center py-3 rounded bg-lime-300 my-2 md:my-5'>Order History: {products.length}</h2>
            <div>
                <ul>
                    {
                        products.map(item =>
                            <Item key={item._id} item={item}></Item>
                        )
                    }
                </ul>
                <button onClick={handleRemovedCart} className="btn bg-lime-300 text-black focus:bg-lime-500">Removed All</button>
            </div>
        </div>
    );
};

export default Sidebar;