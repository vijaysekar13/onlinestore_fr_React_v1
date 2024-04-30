import React from 'react'
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom'
import Footer from './Footer';

export const Homepage = () => {
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
      <div class="row">
    <span class="badge bg-secondary text-secondary"></span>
            <div class="col-6 col-lg-6 p-3"> <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1710911979_433.jpg" height="85%" width="100%"/></div>
            <div class="col-6 col-lg-6 p-3"> <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1710834240_436.jpg" height="85%" width="100%"/></div>
            
           </div>   
      <br></br>
       <br></br>
<Footer/>
    </div>


  )
}
export default Homepage