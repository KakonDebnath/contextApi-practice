import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ProductsContext } from '../Layout/Main';

const Home = () => {
    const {handleBuy} = useContext(ProductsContext)
    const products = useLoaderData();
    return (
        <div className='grid grid-cols-3 gap-3 my-20'>
            {
                products.map((product) =>
                    <div key={product._id}
                    className="card card-compact bg-base-100 shadow-xl p-">
                        <figure><img className='h-72' src={product.picture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p>Price: {product.price}</p>
                            <div className="card-actions justify-end">
                                <button onClick={()=>handleBuy(product)} className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Home;