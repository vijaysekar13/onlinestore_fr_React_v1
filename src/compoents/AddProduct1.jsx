import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', productName);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('categoryname', category);
      formData.append('uploaded_file', image);

      await axios.post('http://localhost:8000/product/insert', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('Product added successfully');
      // Reset form fields after successful submission
      setProductName('');
      setDescription('');
      setPrice('');
      setCategory('');
      setImage(null);
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product Name:</label>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <div>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select category...</option>
          <option value="Mobile">Mobile</option>
          <option value="Laptop">Laptop</option>
        </select>
      </div>
      
      <div>
        <label>Image:</label>
        <input type="file" onChange={handleFileChange} required />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
