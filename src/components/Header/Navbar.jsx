import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ router }) => {
    return (
        <div>
            <nav className='bg-lime-300 flex justify-between items-center px-5 py-3'>
                <div className="">
                    <Link to="/">Logo</Link>
                </div>
                <div className="">
                    <ul className='flex'>
                        {
                            router.map((route) => <li key={route.id} className='px-5 py-3'>
                                <NavLink
                                    to={route.path}
                                    className={({ isActive }) =>
                                        isActive ? "text-red-500" : ""
                                    }
                                >{route.name}</NavLink>
                            </li>)
                        }

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;