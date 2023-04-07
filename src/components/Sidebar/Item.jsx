import React, { useContext } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { ProductsContext } from '../Layout/Main';

const Item = ({item}) => {
    const {handleDeleteItem} = useContext(ProductsContext)
    return (
        <p className='flex justify-between items-center p-3 px-5 py-1 md:py-3 my-1 md:my-0 rounded-md md:rounded-none bg-white md:bg-lime-300'>
            <span>{item.name}</span>
            <span><TrashIcon onClick={()=>handleDeleteItem(item._id)} className="h-6 w-6 text-red-500 cursor-pointer" /></span>
        </p>
    );
};

export default Item;