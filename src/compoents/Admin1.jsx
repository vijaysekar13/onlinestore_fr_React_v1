import axios from "axios";
import { Nav } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import AddProduct1 from "./AddProduct1";
import Dashboard from "./Dashboard";
import User from "./User";

function Admin1() {
  const [activeLink, setActiveLink] = useState("/dashboard")
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadImage, setUploadImage] = useState('');
  const navigate = useNavigate();
  const { productid } = useParams();
  const [product, setProduct] = useState({
    productname: "",
    description: "",
    price: "",
    image: "",
    categoryname: "",
  });

  const { productname, description, price, image, categoryname } = product;

  useEffect(() => {
    loadProduct();
    loadCategories(); 
  }, []);

  const loadProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/product/update/${productid}`);
      setProduct(response.data);
      setSelectedCategory(response.data.categoryname); 
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const loadCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleFile = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedImage);

      const response = await axios.post("http://localhost:8080/file/upload", formData);
      setUploadImage(response.data);
      alert("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image");
    }
  };

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const updatedProduct = { ...product, image: uploadImage, categoryname: selectedCategory };
    try {
      await axios.put(`http://localhost:8080/product/update/${productid}`, updatedProduct);
      navigate("/admin");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product");
    }
  };

  const deleteProduct = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this product?');
    if (!confirmed) return;
    try {
      await axios.delete(`http://localhost:8080/product/delete/${productid}`);
      navigate("/admin");
    } catch (error) {
      console.error('Error deleting product:', error);
      alert("Failed to delete product");
    }
  };
 const  handleSelect = (selectedKey) => {
  setActiveLink(selectedKey)
 }
  return (
    
    <div>
        <Nav fill variant="tabs" activeKey={activeLink} onSelect={handleSelect}>
                <Nav.Item>
                    <Nav.Link eventKey="/dashboard">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/addproduct">Addproduct</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/user"> User </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/login">Log Out</Nav.Link>
                </Nav.Item>
            </Nav>

            {activeLink === '/dashboard' && <Dashboard />}
            {activeLink === '/addproduct' && <AddProduct1 />}
            {activeLink === '/user' && <User />}
            
      
    </div>
  );
}

export default Admin1;
