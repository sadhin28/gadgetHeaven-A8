import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Detail = () => {
    const detailid= useParams();
    const detailidInt = parseInt(detailid.id)
    
    const product=useLoaderData();
    const Detail =product.find(id=>id.id === detailidInt)
    const {name,image,price,reting}=Detail
    return (
        
      <div className="card bg-base-100 mx-auto md:h-[500px] md:w-[500px] shadow-xl">
        <figure>
          <img
            className='w-full h-70'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{price} tk</div>
          </h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Rating {reting}</div>
           
        </div>
      </div>
    </div>
    );
};

export default Detail;