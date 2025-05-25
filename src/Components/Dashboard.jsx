import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
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
  
  const handelModal=()=>{
     
      const emtydata =localStorage.getItem('gadget-list')
      const array = [emtydata]
       localStorage.clear();
      setaddcoffee(array)
     
      document.getElementById('my_modal_3').showModal()
      
      
  }
  

  return (
    <div>
      
      <div className="flex   justify-between">
        <div className="grid gap-5 mt-20 w-7/12">

          {
            addGadgets.map(data => <DashboardCard DeleteCard={DeleteCard} key={data.id} data={data} ></DashboardCard>)
          }
        </div>
        <div className="">
            <div className="text-2xl text-center   p-2 sticky top-20 z-40 mb-10 ">
               {
                 `Total Price for ${addGadgets.length} Products (${totalprice})`
               }
           </div>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <div className="mx-auto sticky top-50 w-30">
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
      </div>
    </div>
  );
};

export default Dashboard;