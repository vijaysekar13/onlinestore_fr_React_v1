import React from 'react'
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom'
export const Samsung = () => {
  return (

    <div>
        <Nav />
    <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1662022768_3.jpg" class="d-block w-100" />
    </div>
    <div class="carousel-item">
      <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1662022768_3.jpg" class="d-block w-100" />
    </div>
    <div class="carousel-item">
      <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1662022768_3.jpg" class="d-block w-100" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br></br>
    <br></br>
    <div class="row">
    <h1>HUGE DISCOUNTS<span class="badge bg-secondary text-secondary"></span></h1>
            <div class="col-6 col-lg-6 p-3"> <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1709875746_425.jpg" height="85%" width="100%"/></div>
            <div class="col-6 col-lg-6 p-3"> <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*XQoRCZ8xr7XoSZFv.jpg" height="85%" width="100%"/></div>
            
           </div>   
      <Link to="/sphone"><button className='text-center rounded-circle border-0'  ><img src="https://assets.sangeethamobiles.com/category_img/cat_1706519112-308-Homepage_icons_set-16.png" height="100" width="100"/> <br></br>Mobile</button></Link>
      <Link to="/slab" > <button className='text-center rounded-circle border-0'  ><img src="https://assets.sangeethamobiles.com/category_img/cat_1706519076-19-Homepage_icons_set-15.png" height="100" width="100"/> <br></br>Labtop</button></Link>    
    </div>
    </div>
  )
}
export default Samsung