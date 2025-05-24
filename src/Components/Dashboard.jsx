import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList, removeFromLs } from "./tuilites";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
    
    const allgadgets = useLoaderData();
    
    
   const [addGadgets,setaddcoffee]=useState([])
   console.log(addGadgets.length)
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
        <div>
           <div className="">
              {
                addGadgets.length
              }
           </div>
           <div className="grid gap-5 mt-5">
           
            {
              addGadgets.map(data=><DashboardCard DeleteCard={DeleteCard}  key={data.id} data={data} ></DashboardCard>)
            }
        </div>
        </div>
    );
};

export default Dashboard;