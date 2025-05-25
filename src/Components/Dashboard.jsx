import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList, removeFromLs } from "./tuilites";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
    
    const allgadgets = useLoaderData();
    
    
   const [addGadgets,setaddcoffee]=useState([])
   const totalprice = addGadgets.reduce((sum,product)=>sum+ product.price,0);
   
   useEffect(()=>{
     const storedCoffee = getStoredReadList();
     const storedCoffeeint = storedCoffee.map(id=>parseInt(id));
     const coffeelist = allgadgets.filter(c=>storedCoffeeint.includes(c.id))
     setaddcoffee(coffeelist)
   },[])

   const DeleteCard=(id)=>{
       const removingCard = addGadgets.filter(coffeeCard=>coffeeCard.id !== id)
       setaddcoffee(removingCard)
       removeFromLs(id);

     }
    return (
        <div >
           <div className="text-2xl text-center text-amber-50 bg-[#9538E2] p-2 sticky top-20 z-40 mb-10 ">
              {
                `Total Price for ${addGadgets.length} Products (${totalprice})`
              }
           </div>
           <div className="grid gap-5 mt-20 w-7/12">
           
            {
              addGadgets.map(data=><DashboardCard DeleteCard={DeleteCard}  key={data.id} data={data} ></DashboardCard>)
            }
        </div>
        </div>
    );
};

export default Dashboard;