import { useState } from "react";
import { NavLink, Outlet,  } from "react-router-dom";

const Dashboard = () => {

      const [isactive, setisactive] = useState({
        available: true,
        Status: 'available'
    })

    //handel button 
    const handleisActive = (Status) => {
        if (Status == 'cart') {
            setisactive({
                available: true,
                Status: 'cart'
            })
        } else {
            setisactive({
                available: false,
                Status: 'wishlists'
            })
        }
    }
  return (
      
      <div>
          <div className="bg-[#9538E2] py-2 text-amber-50 ">
                <h1 className="text-center text-2xl font-bold ">Dashboard</h1>
                <p className="text-center">Explore the latest gadgets that will take your <br /> experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex  py-5 justify-center gap-10 items-center" >
                    <NavLink onClick={() => handleisActive('cart')} to="card" className="p-2 ttcard w-30 text-center border rounded-xl">Cart</NavLink>
                    <NavLink onClick={() => handleisActive('wishlists')} to="wishes" className="p-2 w-30 text-center border rounded-xl">WishList</NavLink>
                </div>
            </div>
                <div className=" p-2 md:text-2xl ">
                    {
                        isactive.available ?'Cart':"WishList"
                    }
            </div>
         <div>
           
            <Outlet></Outlet>
         </div>
      </div>


    
  );
};

export default Dashboard;