import React from 'react'
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom'


export const Vivo = () => {
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
              <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1710410159_48.jpg" class="d-white w-100" />
              <div class="carousel-caption d-none d-md-block">

              </div>
            </div>
            <div class="carousel-item">
              <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1710410145_49.jpg" class="d-white w-100" />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1710410119_43.jpg" class="d-white w-100" />
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
        <div class="row">
          <h4 className='text-start'>New Launches<span class=" badge bg-secondary text-secondary"></span></h4>
          <div class="col-3 col-lg-3 p-3"> <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1710504658_89.jpg" class="img-thumbnail" height="65%" width="75%" /></div>
          <div class="col-3 col-lg-3 p-3"> <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1710504675_90.jpg" class="img-thumbnail" height="65%" width="75%" /></div>
          <div class="col-3 col-lg-3 p-3"> <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1710504707_91.jpg" class="img-thumbnail" height="65%" width="75%" /></div>
          <div class="col-3 col-lg-3 p-3"> <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1710504658_89.jpg" class="img-thumbnail" height="65%" width="75%" /></div>
        </div>


        <Link to="/vip"><button className='text-center img-thumbnail p-5'  ><img src="https://assets.sangeethamobiles.com/category_img/cat_1706519112-308-Homepage_icons_set-16.png" height="100" width="100"/> <br></br>Mobile</button></Link>
        <Link to="/vivolab"><button className='text-center img-thumbnail p-5'  ><img src="https://assets.sangeethamobiles.com/category_img/cat_1706519076-19-Homepage_icons_set-15.png" height="100" width="100"/> <br></br>Labtop</button></Link>


        


      </div>
    </div>
  )
}
export default Vivo
