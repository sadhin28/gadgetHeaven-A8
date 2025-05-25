import { Outlet, useLoaderData } from "react-router-dom"
import Navbar from "./Components/Nav/NavBar"
import Footer from "./Components/Footer"
import { ToastContainer } from "react-toastify"
import { useEffect, useState } from "react";
import { getStoredReadList } from "./Components/tuilites";


function App() {
   const localdata=useLoaderData();
  
   const [data,setdat]=useState('')
   
   useEffect(()=>{
    const getlocaldata=getStoredReadList();
    const getlocaldataInt=getlocaldata.map(id=>parseInt(id));
   
    const incrementData=localdata.filter(c=>getlocaldataInt.includes(c.id))
    setdat(incrementData)
   },[])

  return (
    <div className="w-11/12 mx-auto">
        <Navbar data={data}></Navbar>
       <div className="min-h-[calc(100vh-100px)]">
          <Outlet></Outlet>
       </div>
       <Footer></Footer>
       <ToastContainer position="bottom-right"/>
    </div>
  )
}

export default App
