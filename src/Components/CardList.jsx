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
          
           <div>
           
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