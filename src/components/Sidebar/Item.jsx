import React, { useContext } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { ProductsContext } from '../Layout/Main';

const Item = ({item}) => {
    const {handleDeleteItem} = useContext(ProductsContext)
    return (
        <li className='flex justify-between items-center bg-lime-300 p-3 rounded my-1'>
            <span>{item.name}</span>
            <span><TrashIcon onClick={()=>handleDeleteItem(item._id)} className="h-6 w-6 text-red-500 cursor-pointer" /></span>
        </li>
    );
};

export default Item;