import React, { useState, useEffect } from 'react';
import axios from 'axios';



const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/product/list');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  const handleSelectChange = (event) => {
    console.log("Selected Category ====>"+selectedCategory)
  
  setSelectedCategory(event.target.value);
  };
  

  return (
    <div>
      
          
    <div className="container mt-4">
    <p className="d-flex justify-content-end">
        
       {
        
       }
        </p>
      <h1 className="mb-4">All Product</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.productid} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img src={`http://localhost:8000/public/data/uploads/${product.image}`} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.productname}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Category: {product.categoryname}</p>
                <a href="#" class="btn btn-success">Add to cart</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    </div>
  );
};

export default ProductList;

