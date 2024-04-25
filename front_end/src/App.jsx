
import { RouterProvider } from 'react-router-dom'
import {router} from './router/index.jsx'
import './App.css'
import UserContext from './context/UserContext.jsx'
import  ProductContext from './context/ProductContext.jsx'
import React, { useEffect } from 'react';

export default function App() {
  
  
  return (
    <>
    <UserContext > 
     <ProductContext >
      <RouterProvider router={router} />
     </ProductContext>
    </UserContext>

    </>
  )
}