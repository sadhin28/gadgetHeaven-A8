import { useEffect, useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { getStoredReadList, removeFromLs } from "./tuilites";
import DashboardCard from "./DashboardCard";

const CardList = () => {
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
    
    return (

        <div>
          
            <div className="flex  mt-2 gap-5 justify-between">
                <div className=" p-2 text-2xl  mb-10">
                    {
                        isactive.available ? "Cart" : "WishList"
                    }
                </div>
                <div className="flex gap-5">
                    <div className="  p-2 text-2xl  mb-10 ">
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
            <div className="grid gap-5 mt-20">

                {
                    addGadgets.map(data => <DashboardCard DeleteCard={DeleteCard} key={data.id} data={data} ></DashboardCard>)
                }
            </div>
        </div>
    );
};

export default CardList;