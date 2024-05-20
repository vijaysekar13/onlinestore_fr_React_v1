import React, { useEffect, useState } from 'react'
import { Modal, Table } from 'react-bootstrap'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { UpdateUser } from './UpdateUser';

import { useNavigate } from 'react-router-dom';

export const User = () => {

  const [Id, setId] = useState()

    const [text, setText] = useState({
        name: " "
    })

    
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



    const handleEdit = (userId) => {
      setId(userId); // Set the Id state when the Edit button is clicked
      console.log("Function",userId)
    };
   
    const [setDelete, setSelectedDelete] = useState()

    const handleDelete = () => {
      console.log(setDelete)
      fetch(`http://localhost:8000/user/${setDelete}`, { method: 'Delete' })
        .then((res) => {
          if (res.ok) {
            alert("User deleted successfully.");
          } else {
            console.error("Failed to delete user.");
          }
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    }
   



    const [posts, SetPosts] = useState();

    const fetchData = () => {
        fetch(`http://localhost:8000/user/list`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data", data)
        SetPosts(data)
        
      })
      .catch((error) => {
        console.error("Error during fetch", error);
      });
    };
    useEffect(() => {
        fetchData();
    }, []);


   


    
    console.log("This page", Id)

    return (
        <div className='container'>
            <div>
                <br />
                <h3>User </h3>
                <div>View The User List</div>
                {/* <input  type="text" id="in" name='name' value={text.name} onChange={handleChange} placeholder='enter a user name' /> */}
            </div>
            <table class="table table-bordered border-dark table-striped">
              <thead>
                <tr class="text-center">
                  <th scope="col">ID</th>
                  <th scope="col">UserName</th>
                  <th scope="col">City</th>
                  <th scope="col">Mail</th>
                  
                  <th scope="col">Password</th>
                  <th scope='col'>Gender</th>

                 
                  <th scope='col'>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(posts) && posts.map((user) => (
                  <tr key={user._id}>
                    <td >{user._id}</td>
                    <td >{user.username}</td>
                    <td>{user.city}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    
                    {console.log("Inside",user._id)}
                    <td>{user.gender}</td>
                   
                    
                    <td><button className='m-2' onClick={() => handleEdit(user._id)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                    </svg></button><button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setSelectedDelete(user._id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg></button></td>
                  </tr>
                ))}
              </tbody>

            </table>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Are you sure, you want to delete this product?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={() => handleDelete()}>Delete</button>
      </div>
    </div>
  </div>
  
</div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  {/* <h1>Signup Form</h1> */}
  <label htmlFor="">UserId :</label>
        {/* <input type="text" value={userId}  /> */}
        <br /><br />
                
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

        <button onClick={() => Signup1()}>Update</button>
  </div>
</div>
        </div>
    )
}   
export default User;