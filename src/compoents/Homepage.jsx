import React from 'react'
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom'
import Footer from './Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Homepage = () => {

  const [selectedCategory, setSelectedCategory] = useState('');
  const [setFurniture, setSelectedFurniture] = useState('');
  const userId = sessionStorage.getItem("userId")

  const handleSelectChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    console.log("sUBMIT", category)
    // Call handleSubmit immediately when the category changes
    handleSubmit(category);
  };
  const handleSubmit = (category) => {
    let url = `http://localhost:8000/product`;
    if (category) {
      url += `/${category}`;
    }
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSelectedFurniture(data);
      })
      .catch((error) => {
        console.error("Error during fetch", error);
      });
  };

  useEffect(() => {
    // Initial fetch when the component mounts
    handleSubmit(selectedCategory);
  }, [selectedCategory]); // Call useEffect whenever selectedCategory changes

  const CartSend = async (formData) => {
    console.log("Productid", formData)
    console.log("userID", userId)
    try {
      const response = await axios.post('http://localhost:8000/cart/add', {
        userId: userId,
        productId: formData,
        quantity: 1
      });
      console.log(response.data); // Log the response from the backend
      alert("Product added to cart successfully..!");
      // setCartUpdated(prevState => !prevState);

      // You can update the UI or show a notification based on the response
    } catch (error) {
      console.error('Error adding item to cart:', error);
      // Handle error scenarios
    }
  };

  return (
    <div>
      <Nav />
      <div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1708150698_379.jpg" class="d-white w-100" />
              <div class="carousel-caption d-none d-md-block">

              </div>
            </div>
            <div class="carousel-item">
              <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1710401604_225.jpg" class="d-white w-100" />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1710394203_319.jpg" class="d-white w-100" />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <br></br>
        <br></br>
        
        <Link to="/samsung"><button className='text-center rounded-pill border-0'> <img src="https://assets.sangeethamobiles.com/brands/1/1665495463.png" class="w-50" /><br></br>
          Sumsung </button></Link>
        <Link to="/Iphone"><button className='text-center rounded-pill border-0'><img src="https://assets.sangeethamobiles.com/brands/6/1665494539.png" class="w-50" /><br></br>
          <br></br>IPhone</button></Link>
        <Link to="/Vivo"><button className='text-center rounded-pill border-0'><img src="https://assets.sangeethamobiles.com/brands/11/1665495586.png" class="w-50" /><br></br>
          <br></br>Vivo</button></Link>
      </div>
      <br></br>
               <br></br>
               <div class="nav-item dropdown p-2">
          <a class="nav-link dropdown-toggle p-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          categoryname
          </a>
          <select id="category" value={selectedCategory} onChange={handleSelectChange}>
          <option value="">All</option>
            <option>Mobile</option>
            <option>Laptop</option>
          </select>
          <div className='container'>
        <br></br>

        <br></br>
        <div className='row gy-5' style={{ maxWidth: '1500px', margin: '0 auto', rowGap: '30px', overflowX: 'auto' }}>
          {Array.isArray(setFurniture) && setFurniture.map((formData, index) => (
            <div key={index} className='col-3 m-3 p-3' style={{ backgroundColor: '#edf7fc', boxShadow: "10px 10px 10px black", borderRadius: "20px", minHeight: "450px", minWidth: "330px", position: 'relative' }}>
              

              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '250px', overflow: 'hidden', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
                <img src={`http://localhost:8000/public/data/uploads/${formData.image}`} style={{ width: '100%', height: '100%' }} alt="Image not Found!" />
              </div>
              
              
              <br></br><br></br><br>
              </br><br></br><br></br>
              <br></br><br></br><br>
              </br><br></br><br></br>
              
              <div className='row'>
                <div className='col-12'>
                  <h5>{formData.productname}</h5>
                </div>
                <div className='row'>
                  <div className='col-6'><p>{formData.description}</p></div>
                  <div className='col-6 text-end'>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-danger" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className='col-12 text-danger' style={{ fontSize: '20px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                  </svg>{formData.price}
                  
                </div>
                
                <div className='row p-3'>
                  <div className='col'>
                    {userId ? (
                      <button onClick={() => CartSend(formData._id)} style={{ borderRadius: '10px', padding: '5px', width: '100%' }}>Add to Cart</button>
                    ) : (
                      <Link to={`/login`}><button style={{ borderRadius: '10px', padding: '5px', width: '100%' }}>Login to Add to Cart</button></Link>
                    )}
                  </div>

                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
        </div>  
      <br></br>
       <br></br>
<Footer/>
    </div>


  )
}
export default Homepage