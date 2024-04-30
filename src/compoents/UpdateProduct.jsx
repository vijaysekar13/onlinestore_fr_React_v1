// UpdateProduct.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdateProduct({id}) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const { productid } = useParams();
  const [formData, setFormData] = useState({
    productid: "",
    productname: "",
    categoryname: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(name, value);
  };

  // To update a product
  const handleSubmit = async (event) => {
    // event.preventDefault();
    console.log(formData);
    if (!formData.productname || !formData.description || !formData.price) {
      console.log("Noooo");
    } else {
      console.log("Category", selectedCategory);
      const SignUp = {
        productname: formData.productname,
        description: formData.description,
        price: formData.price,
        categoryname: selectedCategory,
        image: selectedImage,
      };

      await fetch(`http://localhost:8080/product/updateproduct/${productid}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: 'Put',
        body: JSON.stringify(SignUp)
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.text();
        })
        .then((data) => {
          console.log("Data Received: ", data);
        });
      alert("Product updated");
    }
  };

  return (
    
      <div class="container">
        <div>
          <div className="text-center" style={{ height: '620px' }}>
            
              {selectedImage && (
                <div className='text-center'>
                  <img
                    alt="not found"
                    width={"250px"}
                    src={URL.createObjectURL(selectedImage)}
                  />
                  <br />
                  <button onClick={() => setSelectedImage(null)}>Remove</button>
                  
                </div>
              )}
              <p>Product ID : <input type='number' placeholder='enter your productid' name='productid' value={id} onChange={handleChange} /></p>
              <p>Product Name : <input type='text' placeholder='enter your productname' name='productname' value={formData.productname} onChange={handleChange} /></p>
              <p>Description : <input type='text' placeholder='enter your description' name='description' value={formData.description} onChange={handleChange} /></p>
              <p>Price : <input type='number' placeholder='enter your price' name='price' value={formData.price} onChange={handleChange} /></p>
              <p>
                Category Name:
                <select id="category" value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
                  <option value="">Select category...</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.categoryname}>
                      {category.categoryname}
                    </option>
                  ))}
                </select>
              </p>
              <input
                type="file"
                name="myImage"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage(event.target.files[0]);
                }}
              />
              <button className='m-2' onClick={handleSubmit}>Update</button>
            </div>
          </div>
        </div>
     
    
  );
}


export default UpdateProduct;
