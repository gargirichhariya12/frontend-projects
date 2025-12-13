// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import axios from 'axios'

// function App() {
//   const [products, setProducts] = useState([])
//   const [error, setError] = useState(false)
//   useEffect(() => {
//     (async () => {
//       try{
//         setError(false)
//         const responce = await axios.get('/api/products')
//         console.log(Response.data);
//         setProducts(Response.data)
//       } catch(error){
//         setError(true)

//         console.error("Error fetching Product :" ,error)
//       }
//     })()
//   }, [])

//   return (
//     <>
//       <h1>Gargi Richhariya</h1>
//       <h2>Number of Products are {products.length}</h2>
//       {error && <p style={{ color: 'red' }}>Failed to load products.</p>}
//     </>
//   )
// }

// export default App

import React, { useEffect , useState } from "react";
import axios from "axios";
import OrderList from "./pages/OrderList";
import ProductDetail from "./pages/ProductDetail";

function App() {
  
  return (
    // <OrderList />
   <ProductDetail/>
  )
}

export default App;
