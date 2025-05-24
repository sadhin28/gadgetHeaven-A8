import { Outlet } from "react-router-dom"
import Navbar from "./Components/Nav/NavBar"
import Footer from "./Components/Footer"
import { ToastContainer } from "react-toastify"

function App() {
  
  return (
    <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
       <div className="min-h-[calc(100vh-100px)]">
          <Outlet></Outlet>
       </div>
       <Footer></Footer>
       <ToastContainer position="top-center"/>
    </div>
  )
}

export default App
