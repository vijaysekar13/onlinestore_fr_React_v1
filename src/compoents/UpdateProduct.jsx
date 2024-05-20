// // UpdateProduct.js
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function UpdateProduct(props) {

//   const { id } = props; // Destructure id from props
//   console.log("Update", id)
//   const [category, setCategory] = useState('');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('');

//   const [formData, setFormData] = useState({
//     productname: "", // corrected field name
//     categoryname: "",
//     description: "",
//     price: "",
//     image: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//     console.log(name, value);
//   };

//   // To update a product
//   const handleSubmit = async () => {
//     // event.preventDefault();
//     console.log("Form Data:", formData);
//     // if (!formData.productname || !formData.description || !formData.price) {
//     //   console.log("Missing required fields");
//     //   return; // Exit early if required fields are missing
//     // }
//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('image', selectedImage);
//       formDataToSend.append('name', formData.productname);
//       formDataToSend.append('description', formData.description);
//       formDataToSend.append('price', formData.price);
//       formDataToSend.append('categoryname', selectedCategory);

//       // Make PUT request with FormData object
//       const response = await axios.put(`http://localhost:8080/product/${id}`, formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       console.log('Product updated:', response.data);
//       alert('Product updated');

//       window.location.reload();
//     } catch (error) {
//       // console.error('Error updating product:', error);
//       alert('Failed to update product');
//     }

//     // console.log("Category:", category);
//     // const productData = {
//     //   name: formData.productname,
//     //   description: formData.description,
//     //   price: formData.price,
//     //   categoryname: category,
//     //   image: selectedImage,
//     // };

//     // try {
//     //   const response = await fetch(`http://localhost:8000/product/${id}`, {
//     //     method: 'PUT',
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify(productData)
//     //   });

//     //   if (response.ok) {
//     //     const data = await response.json();
//     //     console.log("Data Received:", data);
//     //     alert("Product updated");

//     //   }
//     //   throw new Error("Failed to update product");

//     // } catch (error) {
//     //   console.error("Error updating product:", error);
//     //   alert("Failed to update product");
//     // }
//   };

//   return (
//     <div className="container">
//       <div>
//         <div className="text-center" style={{ height: '620px' }}>
//           {selectedImage && (
//             <div className='text-center'>
//               <img
//                 alt="not found"
//                 width={"250px"}
//                 src={URL.createObjectURL(selectedImage)}
//               />
//               <br />
//               <button onClick={() => setSelectedImage(null)}>Remove</button>
//             </div>
//           )}
//           <p>Product ID: {id}</p> {/* Display product ID */}
//           <p>Product Name: <input type='text' placeholder='Enter your product name' name='productname' value={formData.productname} onChange={handleChange} /></p>
//           <p>Description: <input type='text' placeholder='Enter your description' name='description' value={formData.description} onChange={handleChange} /></p>
//           <p>Price: <input type='number' placeholder='Enter your price' name='price' value={formData.price} onChange={handleChange} /></p>
//           <div>
//             <label>Category:</label>
//             <select id="category" value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
//               <option value="">Select category...</option>
//               <option value="Mobile">Mobile</option>
//               <option value="Laptop">Laptop</option>
//             </select>
//           </div>
//           <input
//             type="file"
//             name="myImage"
//             onChange={(event) => {
//               console.log(event.target.files[0]);
//               setSelectedImage(event.target.files[0]);
//             }}
//           />
//           <button className='m-2' onClick={handleSubmit}>Update</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UpdateProduct;

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateProduct = (props) => {

  const { id } = props; // Destructure id from props
  console.log("Update", id)
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    productname: "",
    description: "",
    price: "",
    categoryname: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (
      formData.productname.trim().length === 0 ||
      formData.description.trim().length === 0 ||
      formData.price.trim().length === 0 ||
      !selectedImage ||
      selectedCategory.trim().length === 0
    ) {
      alert("Please fill all the fields");
    } else {
      try {
        const formDataToSend = new FormData();
        formDataToSend.append('image', selectedImage);
        formDataToSend.append('productname', formData.productname);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('categoryname', selectedCategory);
  
        // Make PUT request with FormData object
        const response = await axios.put(`http://localhost:8000/product/${id}`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
  
        console.log('Product updated:', response.data);
        alert('Product updated');

        window.location.reload();
      } catch (error) {
        console.error('Error updating product:', error);
        alert('Failed to update product');
      }
    }
  };
  
    console.log("inside : ", id)

    return (
      <div>
        <div class="container">
        <div>
          <div className='text-center' style={{height:'620px'}}>
            <div >
          <p >Product ID : <input type='text' placeholder='enter your productid' name='productid' value={id} onChange={handleChange} />{formData.productid}</p>
          <p >Product Name : <input type='text' placeholder='enter your productname' name='productname' value={formData.productname} onChange={handleChange} /></p>
          <p>Description : <input type='text' placeholder='enter your description' name='description' value={formData.description} onChange={handleChange} /></p>
          <p>Price : <input type='number' placeholder='enter your price' name='price' value={formData.price} onChange={handleChange} /></p>
          <p>
            Category Name:
  
            <select id="category" value={selectedCategory} onChange={handleSelectChange}>
              <option value="">Select category...</option>
              <option>Mobile</option>
              <option>Laptop</option>
              
            </select>
          </p>
          <input type="file" name="image" onChange={handleFileChange} />
          {selectedImage && 
          <div>
          <img alt="Preview" width="250px" src={URL.createObjectURL(selectedImage)} />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
          } 
           <button className='m-2' onClick={() => handleSubmit()}>Update</button>
           </div>
        </div>
       
      </div>
      
      </div>
      
      </div>
    )
  }
  
  export default UpdateProduct