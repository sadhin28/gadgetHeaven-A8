import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredGadgetList } from './tuilites';

const Dashboard = () => {
    const dashboardData = useLoaderData()
    const [addgadget,setaddgadget]=useState([])
     
    useEffect(()=>{
        const storedGadgets = getStoredGadgetList();
       
        const storedGadgetInt = storedGadgets.map(id=>parseInt(id));
        const GadgetsList = dashboardData.filter(c=>storedGadgetInt.include(c.id));
        setaddgadget(GadgetsList)
    },[])
    return (
        <div>
            {
                addgadget.map(data=><p>{data.name}</p>)
            }
        </div>
    );
};

export default Dashboard;