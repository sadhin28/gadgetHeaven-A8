import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//raact router 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics.jsx';
import Dashboard from './Components/Dashboard.jsx';
import GadgetContainer from './Components/GadgetContainer.jsx';
import Detail from './Components/Detail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('../cagegory.json'),
        children:[
          {
            path:`/gadeget/:category`,
            element:<GadgetContainer></GadgetContainer>,
            loader:()=>fetch('../allproducts.json')

          },
          {
            path:`/details/:id`,
            element:<Detail></Detail>,
            loader:()=>fetch('../allproducts.json')
           }

        ]
      },
      {
        path:'Statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'Dashboard',
        element:<Dashboard></Dashboard>
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
