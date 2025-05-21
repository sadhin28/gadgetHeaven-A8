import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
       <div className="min-h-[calc(100vh-50px)]">
          <Outlet></Outlet>
       </div>
       <Footer></Footer>
    </div>
  )
}

export default App
