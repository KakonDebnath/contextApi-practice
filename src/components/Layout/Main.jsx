import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import { createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const [products, setProducts] = useState([]);

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
    }

    const handleDeleteItem = (id) => {
        const newProducts = products.filter(pd => pd._id !== id);
        setProducts(newProducts)
    }
    return (
        <CartContext.Provider value={[products, setProducts]}>
            <ProductsContext.Provider value={{ handleBuy, handleDeleteItem }}>
                <div className='max-w-7xl mx-auto'>
                    <Navbar router={router}></Navbar>
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
                        <section className='md:col-span-3'>
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