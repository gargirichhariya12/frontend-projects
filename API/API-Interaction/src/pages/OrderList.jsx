import { useState , useEffect } from "react";
import React from 'react'
import axios from "axios";


function OrderList() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Our Products</h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((products) => (
           <Link to= {'/products/${products.id}'} >
          <div key = {products.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img src={products.image} alt={products.tittle} className="w-full h-40  object-contain mb-4"/>
            <h2 className="semibold text-lg mb-2">{products.tittle}</h2>
            <div className="flex justify-between items-center">
            <spam className="text-gray-700 font-bold">${products.price}</spam>
            <spam className="text-yellow-500 ml-2">{products.rating.rate}⭐</spam>
            </div>
            <p className="text-gray-600 text-sm mt-2">{products.category}</p>
          </div>
            </Link>
        ))}

      </div>
      
    </div>
  )
}

export default OrderList
