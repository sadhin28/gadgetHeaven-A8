import { Link } from "react-router-dom";

const DashboardCard = ({data}) => {
      const { name, image, id, price, rating } = data
    return (
        <div>
           <div>
      <div className="card  border-amber-700 bg-base-100 w-70 shadow-sm">
        <figure>
          <img
            className='h-40 w-full'
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
           
             <Link   className="badge hover:bg-blue-600 hover:text-white badge-outline btn">Add</Link>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default DashboardCard;