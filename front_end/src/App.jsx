
import { RouterProvider } from 'react-router-dom'
import {router} from './router/index.jsx'
import './App.css'
import UserContext from './context/UserContext.jsx'
import  ProductContext from './context/ProductContext.jsx'
import { CategoryProvider } from './context/CategoryContext.jsx'

export default function App() {
  
  
  return (
    <>
    <CategoryProvider>
    <UserContext > 
     <ProductContext >
      <RouterProvider router={router} />
     </ProductContext>
    </UserContext>
    </CategoryProvider>
    </>
  )
}