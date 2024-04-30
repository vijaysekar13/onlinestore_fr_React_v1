import React, { useEffect, useState } from 'react'
import { Modal, Table } from 'react-bootstrap'
import axios from 'axios';
// import './User.css'
import Button from 'react-bootstrap/Button';


export const User = () => {
    const [text, setText] = useState({
        name: ""
    })

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setText({ ...text, [name]: value })
    //     console.log("sadsagd" ,name, value);
    // }
    // axios.get(`http://localhost:8080/file/findbyname/${text.name}`)
    // .then((res) => {
    //     console.log("find name", res);
    // }).catch((err) => {
    //     console.log("find error", err);
    // })

   



    const [posts, SetPosts] = useState();

    const fetchData = () => {
        fetch(`http://localhost:8080/product/getcustomer`)
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


   


    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    return (
        <div className='container'>
            <div>
                <br />
                <h3>User</h3>
                <div>View The User List</div>
                {/* <input  type="text" id="in" name='name' value={text.name} onChange={handleChange} placeholder='enter a user name' /> */}
            </div>
            <table class="table table-bordered border-dark table-striped">
              <thead>
                <tr class="text-center">
                  <th scope="col">ID</th>
                  <th scope="col">UserName</th>
                  <th scope="col">City</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope='col'>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(posts) && posts.map((customData) => (
                  <tr key={customData.id}>
                    <td >{customData.id}</td>
                    <td >{customData.username}</td>
                    <td>{customData.city}</td>
                    <td>{customData.email}</td>
                    <td>{customData.password}</td>
                    <td><button className='m-2' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                    </svg></button><button data-bs-toggle="modal" data-bs-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg></button></td>
                  </tr>
                ))}
              </tbody>

            </table>
            {/* <Modal size="sm" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </div>
    )
}   
export default User