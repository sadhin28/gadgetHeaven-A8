import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
       <Navbar></Navbar>
       <div className="min-h-[calc(100vh-50px)]">
          <Outlet></Outlet>
       </div>
       <Footer></Footer>
    </>
  )
}

export default App
