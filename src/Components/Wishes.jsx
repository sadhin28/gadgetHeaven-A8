import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredwhishesList, removeFromLs } from './tuilites';
import WishCard from './WishCard';

const Wishes = () => {
    const allgadgets = useLoaderData();


    const [addGadgets, setaddcoffee] = useState([])
  

    useEffect(() => {
        const storedCoffee = getStoredwhishesList();
        const storedCoffeeint = storedCoffee.map(id => parseInt(id));
        const coffeelist = allgadgets.filter(c => storedCoffeeint.includes(c.id))
        setaddcoffee(coffeelist)
    }, [])

    const DeleteCard = (id) => {
        const removingCard = addGadgets.filter(coffeeCard => coffeeCard.id !== id)
        setaddcoffee(removingCard)
        removeFromLs(id);

    }
    return (
        <div>
            <div className="grid gap-5 mt-20">

                {
                    addGadgets.map(data => <WishCard data={data} key={data.id} DeleteCard={DeleteCard}></WishCard>)
                }
            </div>
        </div>
    );
};

export default Wishes;