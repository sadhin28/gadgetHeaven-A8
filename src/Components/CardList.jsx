import { useEffect, useState } from "react";
import {  useLoaderData } from "react-router-dom";
import { getStoredReadList, removeFromLs } from "./tuilites";
import DashboardCard from "./DashboardCard";
import { toast } from "react-toastify";
import  modalimg from '../assets/Group copy.png'
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

    //handel button 
    const [data, setdata] = useState([])

    const handelModal = () => {
        
             const emtydata = localStorage.getItem('gadget-list')

            setdata(emtydata)
            setaddcoffee(data)
            localStorage.clear(); 
       
    }

    const handelShowmOdal=()=>{
        const emtydata = localStorage.getItem('gadget-list')
        

        if (emtydata === null) {
            toast.error("Place Add to card then Purchase")
           
        }else{
            document.getElementById('my_modal_3').showModal()
        }
         
    }

    const handleSorting=(prices)=>{
      
        if(prices === 'price'){
            const sortedGadgets =[...addGadgets].sort((a,b)=>b.price - a.price);
            setaddcoffee(sortedGadgets)
        }
    }
    return (

        <div>

            <div className="sticky z-50 top-20 md:top-20">
                <div className="">

                    <div className="flex bg-base-100 p-4  mt-2 gap-5 justify-between">
                        <div className="  p-2 md:text-2xl  ">
                            {
                                `Total Cost ${totalprice}`
                            }
                        </div>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <div className="">
                            <div className="flex gap-2">
                                <button id="bye-now" className="p-2 btn text-sm rounded-3xl text-amber-50 bg-[#9538E2] " onClick={()=>handleSorting('price')}  >Sort By Price</button>
                            <button id="bye-now" className="p-2 btn text-sm rounded-3xl text-amber-50 bg-[#9538E2] " onClick={handelShowmOdal}  >Purchas</button>
                            </div>
                            <dialog id="my_modal_3" className={`modal `}>
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button onClick={handelModal} className="btn  btn-sm btn-circle  btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                     <img className="mx-auto p-5" src={modalimg} alt="" />
                                    <h3 className="font-bold text-center text-lg">Payment Successfully</h3>
                                    <p className="py-2 text-center">Thanks for purchasing. </p>
                                    <p className="text-center py-2">{
                                         `Total Price : ${totalprice}`
                                        }</p>
                                </div>
                            </dialog>
                        </div>
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