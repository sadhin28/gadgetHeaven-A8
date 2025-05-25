import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getStoredReadList, removeFromLs } from "./tuilites";
import DashboardCard from "./DashboardCard";
import Modal from "./Modals";
import Modals from "./Modals";

const Dashboard = () => {


  const allgadgets = useLoaderData();


    const [addGadgets, setaddcoffee] = useState([])
    const totalprice = addGadgets.reduce((sum, product) => sum + product.price, 0);

    useEffect(() => {
        const storedCoffee = getStoredReadList();
        const storedCoffeeint = storedCoffee.map(id => parseInt(id));
        const coffeelist = allgadgets.filter(c => storedCoffeeint.includes(c.id))
        setaddcoffee(coffeelist)
    }, [])

    const DeleteCard = (id) => {
        const removingCard = addGadgets.filter(coffeeCard => coffeeCard.id !== id)
        setaddcoffee(removingCard)
        removeFromLs(id);

    }

    const [data, setdata] = useState([])
    const handelModal = () => {
        localStorage.clear();
        const emtydata = localStorage.getItem('gadget-list')
        setdata(emtydata)
        setaddcoffee(data)
        document.getElementById('my_modal_3').showModal()
    }

   

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
          <div className="bg-[#9538E2] py-2 text-amber-50 sticky top-20 z-30">
                <h1 className="text-center text-2xl font-bold ">Dashboard</h1>
                <p className="text-center">Explore the latest gadgets that will take your <br /> experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex  py-5 justify-center gap-10 items-center" >
                    <NavLink onClick={() => handleisActive('cart')} to="card" className="p-2 ttcard w-20 text-center border rounded-xl">Cart</NavLink>
                    <NavLink onClick={() => handleisActive('wishlists')} to="wishes" className="p-2 w-20 text-center border rounded-xl">WishList</NavLink>
                </div>
            </div>
              <div className="flex  mt-2 gap-5 justify-between">
                <div className=" p-2 text-2xl  mb-10">
                    {
                        isactive.available ?'Cart':"WishList"
                    }
            </div>
                <div className="flex gap-5">
                    <div className="  p-2 md:text-2xl font-bold  mb-10 ">
                        {
                            `Total Cost ${totalprice}`
                        }
                    </div>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <div className="">
                        <button id="bye-now" className="btn  rounded-3xl text-amber-50 bg-[#9538E2] " onClick={handelModal} >Purchase</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn  btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-center text-lg">Order Conform</h3>
                                <p className="py-4">Press ESC key or click on ✕ button to close</p>
                            </div>
                        </dialog>
                    </div>
                </div>

            </div>
            


         <div>
           
            <Outlet></Outlet>
         </div>
      </div>


    
  );
};

export default Dashboard;