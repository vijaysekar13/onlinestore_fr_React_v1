import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './Logintask/Login';
import { Signin } from './Logintask/Signin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Admin1 from './compoents/Admin1.jsx'
// import AddProduct1 from './compoents/AddProduct1.jsx';
import ProductList from './compoents/ProductList.jsx'
import UpdateProduct from './compoents/UpdateProduct.jsx';
import NotFoundPage from './compoents/NotFoundPage.jsx';
import Nav from './compoents/Nav.jsx';
import Homepage from './compoents/Homepage.jsx'
import Samsung from './compoents/Samsung.jsx';
import SamsungPhone from './compoents/SamsungPhone.jsx';
import Iphone from './compoents/Iphone.jsx';
import Sumsunglabtop from './compoents/Sumsunglabtop.jsx';
import Iphonephone from './compoents/Iphonephone.jsx';
import Iphonelab from './compoents/Iphonelab.jsx';
import Vivo from './compoents/Vivo.jsx';
import Vivophone from './compoents/Vivophone.jsx';
import Vivolabtop from './compoents/Vivolabtop.jsx';
import Addcart from './compoents/Addcart.jsx';
import Dashboard from './compoents/Dashboard.jsx';
import Payment from './compoents/Payment.jsx';
import { User } from './compoents/User.jsx';
import Footer from './compoents/Footer.jsx';
import AddProductForm from './compoents/AddProduct1.jsx';


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/Nav' element={<Nav />} />
        
          <Route path='/add' element={<AddProductForm />} />
          <Route path='/home' element = {<Homepage />}></Route>
          <Route path='/samsung' element = {<Samsung />}></Route>
          <Route path='/sphone' element = {<SamsungPhone />}></Route>
          <Route path='/slab' element={<Sumsunglabtop />} />
          <Route path='/vivo'element={<Vivo />}/>
          <Route path='/vip' element={<Vivophone />} />
          <Route path='/vivolab' element={<Vivolabtop />} />
          <Route path='/iphone' element={<Iphone />} />
          <Route path='/ip' element={<Iphonephone />} />
          <Route path='/ilb' element={<Iphonelab/>} />
          <Route path='/cart' element = {<Addcart />} />
          <Route path='/dashboard' element = {<Dashboard />} />
          <Route path='/payment'element={<Payment/>}/>
          <Route path='/footer' element = {<Footer />} />

          

          
          {/* <Route path='/listproduct' element={<Productlist />}/> */}
          {/* <Route path='/Admin' element={<Admin />}/> */}
          <Route path='/user' element={<User/>} />
         
          <Route path='/' element={<ProductList />} />
          <Route path='/admin' element={<Admin1 />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/update/:productid' element={<UpdateProduct />} />



        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
