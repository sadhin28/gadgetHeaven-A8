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
import CardList from './Components/CardList.jsx';
import Wishes from './Components/Wishes.jsx';
import ErrorPage from './Components/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    
    element:<App></App>,
    loader:()=>fetch('../allproducts.json'),
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
        element:<Dashboard></Dashboard>,
         loader:()=>fetch('../allproducts.json'),
         children:[
          {
            path:'card',
            element:<CardList></CardList>,
               loader:()=>fetch('../allproducts.json'),
          },{
            path:'wishes',
            element:<Wishes></Wishes>,
              loader:()=>fetch('../allproducts.json'),
          }
         ]
      },
      
    ]
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
