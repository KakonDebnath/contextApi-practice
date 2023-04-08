import React, { useContext } from 'react';
import { CartContext, ProductsContext } from '../Layout/Main';

const Cart = () => {
    const [products, setProducts] = useContext(CartContext);
    const {handleDeleteItem} = useContext(ProductsContext);
    return (
        <div>
            {
                products.map((pd,index) =>
                    <div key={index} className="card card-side bg-base-100 shadow-xl px-5 my-3">
                        <figure><img className='object-cover w-52' src={pd?.picture} alt={pd?.name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title py-2">{pd?.name}!</h2>
                            <p>Quantity: {pd?.quantity}</p>
                            <p>@Price: {pd?.price}</p>
                            
                            <div className="card-actions justify-end">
                                <button onClick={()=>handleDeleteItem(pd?._id)} className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Cart;