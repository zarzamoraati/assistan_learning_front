import React from 'react'
import ReactDOM from 'react-dom/client'

import {createHashRouter,RouterProvider} from "react-router-dom"
import { Layout } from './pages/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'


const router=createHashRouter([
  {path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },{
        path:"/about",
        element:<About/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
