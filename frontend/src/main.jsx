import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';


import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import User from './comp/User'
import Create from './comp/Create'
import Update from './comp/Update'


const router = createBrowserRouter([
  {
  
    path :'/',
    element:<User/>,
    errorElement :<h1>Error</h1>


},
{
  path :'/create',
  element:<Create/>,
},
{
  path :'/update/:id',
  element:<Update/>,
   
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
