import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

  if (!product) {
    return <div className="text-center mt-10 text-gray-500">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4">Product Details</h1>

        <img
          src={product.image}
          alt={product.title}
          className="h-64 w-full object-contain mb-4"
        />

        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-500 capitalize mb-2">{product.category}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-green-600 font-bold text-xl">${product.price}</span>
          <span className="text-yellow-500 font-medium">⭐ {product.rating?.rate}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
