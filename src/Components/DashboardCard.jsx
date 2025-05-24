import { Link } from "react-router-dom";

const DashboardCard = ({data,DeleteCard}) => {
      const { name, image, id, price, rating } = data
      
    return (
        <div>
           <div>
      <div className="card   border-3 bg-base-100  w-full shadow-xl shadow-amber-500-100">
        <figure>
          <img
            className='h-50 w-50 '
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
            <div className="badge badge-outline">Rating {rating}</div>
              <Link to={`/details/${id}`}><div className="badge hover:bg-blue-600 hover:text-white badge-outline btn">Details</div></Link>
              <Link onClick={()=>DeleteCard(id)}  className="badge hover:bg-blue-600 hover:text-white badge-outline btn">Delete</Link>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default DashboardCard;