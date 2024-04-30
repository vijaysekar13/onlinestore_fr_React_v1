import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

export const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username : "",
    city : "",
    phoneno : ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(name, value);
  }

  const Signup1 = () => {
    console.log("sigup");
    const data = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      city : formData.city,
      phoneno : formData.phoneno
    }

    fetch("http://localhost:8080/form/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    })
    .then((response)=>{
      if(response.status==200){
      console.log("datareceived",response);
      alert("singup seccessfully");
      navigate("/login");
      }
      else {
        // Handle other response status codes if needed
        console.log("Error:", response.status);
      }
    }).catch(error=>{
      console.log("error",error);
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // Signup1();
    console.log(formData);
  }

  return (
    
      <div className="container">
        
            <div className="css">

      <form onSubmit={handleSubmit}>
        <h1>Signup Form</h1>
        <label htmlFor="">Username :</label>
        <input type="text" name='username' value={formData.username} onChange={handleChange} required />
        <br /><br />

        <label htmlFor="">E-mailId :</label>
        <input type="text" name='email' value={formData.email} onChange={handleChange} required/>
        <br /><br />

        <label htmlFor="">Password : </label>
        <input type="password" name='password' value={formData.password} onChange={handleChange} required />
        <br /><br />
        <label htmlFor="">City :</label>
        <input type="text" name='city' value={formData.city} onChange={handleChange} required />
        <br /><br />
        <label htmlFor="">Phone Number:</label>
        <input type="tel" name='phoneno' id='phone' placeholder=" (123) 456-7890"value={formData.phoneno} onChange={handleChange} required />
        <br /><br />

        <button onClick={() => Signup1()}>Signup</button>
      </form>
      </div>
    </div>
  )
}

