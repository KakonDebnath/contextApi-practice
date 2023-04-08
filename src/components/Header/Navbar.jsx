import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { CartContext } from '../Layout/Main';
import Cart from '../Cart/Cart';

const Navbar = ({ router }) => {
    const [products] = useContext(CartContext);
    const [open, setOpen] = useState(false);
    const handleOpen = ()=>{
        setOpen(!open);
    }
    return (
        <div>
            <nav className='bg-lime-300 md:flex justify-between items-center px-5 py-3'>
                <div className="flex md:block justify-between items-center py-3 md:py-0">
                    <Link to="/">Logo</Link>
                    <p onClick={handleOpen} className='block md:hidden'>
                        {
                            open?<XMarkIcon className="h-6 w-6 cursor-pointer"/>:<Bars3Icon className="h-6 w-6 cursor-pointer"/>
                        }
                    </p>
                </div>
                <div className={open?`${'block'}`:`${'hidden md:block'}`}>
                    <ul className='md:flex items-center'>
                        {
                            router.map((route) => <li key={route.id} className='px-5 py-1 md:py-3 my-1 md:my-0 rounded-md md:rounded-none bg-white md:bg-lime-300'>
                                <NavLink
                                    to={route.path}
                                    className={({ isActive }) =>
                                        isActive ? "text-red-500" : ""
                                    }
                                >{route.name}</NavLink>
                            </li>)
                        }
                        <Link className='w-full' to='/cart'>
                            <ShoppingCartIcon className="h-6 w-6 cursor-pointer inline"/> {products.length}
                        </Link>

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;