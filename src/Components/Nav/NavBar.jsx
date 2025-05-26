import {  NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import '../Nav/Navbar.css'
import { getStoredwhishesList } from "../tuilites";
import { useEffect, useState } from "react";

const Navbar = ({data}) => {
        const wishdata =getStoredwhishesList()
    const [wish,setwish]=useState(0)
    console.log(wish)
    useEffect(()=>{

    setwish(wishdata)
    
    },[])

    const links =<>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/Statistics">Statistics</NavLink>
         <NavLink to="/Dashboard">Dashboard</NavLink>
    </>
    return (
        <div className="sticky  rounded-b-2xl shadow-sm h-20 top-0 z-20 navbar text-white bg-[#9538E2] duration-700  transform-border scale-3d  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="text-xl  gird gap-3 menu duration-1000 menu-sm dropdown-content bg-[#9538E2]  relative top-15  w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className=" btn-ghost text-xl md:text-2xl font-bold">Gadget Heaven</a>
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className="menu text-xl menu-horizontal px-1 flex gap-5 items-center ">
                 {
                 links
                 }
                </ul>  
            </div>
           
                <div className="navbar-end  text-black flex gap-3 text-2xl justify-items-center ">
                         <div className="relative text-center   left-13 bottom-5">
                             {data.length}
                         </div>
                        <div className="p-2 bg-amber-50 rounded-full">
                            <HiOutlineShoppingCart />
                           
                        </div>
                        <div className="relative text-center   left-13 bottom-5">
                             {wish.length}
                         </div>
                        <div className="p-2 bg-amber-50 rounded-full">
                            <AiOutlineHeart />
                            
                        </div>
                </div>
          
               
        </div>
    );
};

export default Navbar ;