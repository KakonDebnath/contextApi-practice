import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, json, useLoaderData } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import { createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToDb, deleteFromDb, removedCart, getShoppingCart } from '../../Utility/fakeDb';
const router = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Products",
        path: "/products"
    },
    {
        id: 4,
        name: "Services",
        path: "/services"
    },
]
export const ProductsContext = createContext("Handle function");
export const CartContext = createContext([]);

const Main = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    console.log(products, allProducts);

    const handleBuy = (product) => {
        const isExists = products.find(pd => pd._id === product._id);
        if (isExists) {
            toast("Item All ready added!", {
                autoClose: 2000,
            });
        } else {
            const newProducts = [...products, product]
            setProducts(newProducts);
        }
        addToDb(product._id);
    }

    const handleDeleteItem = (id) => {
        const newProducts = products.filter(pd => pd._id !== id);
        setProducts(newProducts);
        deleteFromDb(id);
    }
    const handleRemovedCart = () => {
        removedCart();
    }
    useEffect(() => {
        fetch('tShirts.json')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        for (const id in storedCart) {
            const savedProduct = allProducts.find((pd) => pd._id === id);
            const quantity = storedCart[id];
            // console.log(id, quantity);
            // savedProduct.quantity = quantity;
            console.log(quantity);
        }
    }, [allProducts])
    return (
        <CartContext.Provider value={[products, setProducts]}>
            <ProductsContext.Provider value={{ handleBuy, handleDeleteItem, handleRemovedCart }}>
                <div className='max-w-7xl mx-auto'>
                    <Navbar router={router}></Navbar>
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
                        <section className='md:col-span-3 min-h-[calc(100vh-120px)]'>
                            <Outlet></Outlet>
                        </section>
                        <section>
                            <Sidebar></Sidebar>
                        </section>
                    </div>
                    <Footer></Footer>
                    <ToastContainer />
                </div>
            </ProductsContext.Provider>
        </CartContext.Provider>

    );
};

export default Main;