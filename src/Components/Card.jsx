
import { Link } from 'react-router-dom';
import { addToStoredReadList, addToStoredwishesList } from './tuilites';


const Card = ({ product}) => {
 
  const { name, image, id, price, rating } = product
 
  return (
    <div>
      <div className="card  border-amber-700 bg-base-100 md:w-70 w-60 shadow-sm">
        <figure>
          <img
            className='h-45 w-full'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div>{name}</div>
           <small className='bg-amber-700 text-sm text-white p-2 rounded-xl'>{price} Tk</small>
          </h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <div className="badge  badge-outline">Rating {rating}</div> 
           <div className='flex gap-4'>
               <Link to={`/details/${id}`}><div className="badge hover:bg-blue-600 hover:text-white badge-outline btn">Details</div></Link>
               <Link onClick={()=>addToStoredReadList(id)} className="badge hover:bg-blue-600 hover:text-white badge-outline btn">Add</Link>
               <Link onClick={()=>addToStoredwishesList(id)} className="badge hover:bg-blue-600 hover:text-white badge-outline btn">Wish</Link>
           
           </div>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;