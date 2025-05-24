import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList, removeFromLs } from "./tuilites";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
    
    const allgadgets = useLoaderData();
    
    
   const [addGadgets,setaddcoffee]=useState([])
   
   
   useEffect(()=>{
     const storedCoffee = getStoredReadList();
     const storedCoffeeint = storedCoffee.map(id=>parseInt(id));
     const coffeelist = allgadgets.filter(c=>storedCoffeeint.includes(c.id))
     setaddcoffee(coffeelist)
   },[])
    return (
        <div>
            {
              addGadgets.map(data=><DashboardCard key={data.id} data={data} ></DashboardCard>)
            }
        </div>
    );
};

export default Dashboard;