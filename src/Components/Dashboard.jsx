import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredReadList, removeFromLs } from "./tuilites";
import DashboardCard from "./DashboardCard";

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
  const [data,setdata]=useState([])
  const handelModal=()=>{
      localStorage.clear();
      
      const emtydata =localStorage.getItem('gadget-list')
      setdata(emtydata)
      setaddcoffee(data)
      
     
      document.getElementById('my_modal_3').showModal()
      
      
  }
  

  return (
    <div>
      <div className="bg-[#9538E2] py-2 text-amber-50 sticky top-20 z-30">
          <h1 className="text-center text-2xl font-bold ">Dashboard</h1>
          <p className="text-center">Explore the latest gadgets that will take your <br /> experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
          <div className="flex py-5 justify-center gap-10 items-center" >
             <Link className="p-2 w-20 text-center border rounded-xl">Cart</Link>
             <Link className="p-2 w-20 text-center border rounded-xl">Wishes</Link>
          </div>
      </div>
      <div className="flex justify-between">
            <div className="  p-2  mb-10 ">
               {
                 `Total Price for ${addGadgets.length} Products (${totalprice})`
               }
           </div>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <div className="mx-auto sticky top-50 ">
             <button  id="bye-now" className="btn   text-amber-50 bg-[#9538E2] z-30 w-40 " onClick={handelModal} >Bye Now</button>
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
      
      <div className="">
        <div className="grid gap-5 mt-20">

          {
            addGadgets.map(data => <DashboardCard DeleteCard={DeleteCard} key={data.id} data={data} ></DashboardCard>)
          }
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;