import React from 'react';
import { MdDeleteForever } from "react-icons/md";
const WishCard = ({DeleteCard,data}) => {
      const { name, image, id, price, rating } = data
    return (
        <div className='p-4 border card shadow-2xl '>
            <div className='flex justify-center md:justify-between  gap-20'>
                <img src={image} className='w-20 h-20' alt="" />
                <div>
                    <p>Name : {name}</p>
                    <p>Price : {price}</p>
                    <p>Rating : {rating}</p>
                </div>
                <p onClick={()=>DeleteCard(id)} className='text-3xl hover:text-red-500'><MdDeleteForever /></p>
            </div>
            
        </div>
    );
};

export default WishCard;