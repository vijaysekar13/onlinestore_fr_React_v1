import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username : "",
        password : ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
        console.log(name, value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
    
        fetch('http://localhost:8000/user/login', requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Login failed');
                }
                return response.json();
            })
            .then(data => {
                console.log("Login successful:", data);
                alert("Login successful");
                const userId = data.user._id;
          sessionStorage.setItem("userId", userId);
          console.log("UserId", userId)

                navigate("/");
            })
            .catch(error => {
                console.error("Error during login:", error);
                alert("Login failed. Please check your credentials and try again.");
            });
    };
    
    return (
        <div className="css" >

            <div className="outer">
                <br></br>
                <br></br>
                <h1 className="text-center">LOGIN FORM</h1>
                
                <p className="text-center ">login in to get notified</p>
                <div>
                    <form onSubmit={handleSubmit}>

                        <p>Username : <input type="text" placeholder="Type your username" name="username" value={formData.username} onChange={handleChange} /></p>

                        <p>Password : <input type="password" placeholder="Type your Password" name="password" value={formData.password} onChange={handleChange} /></p>

                        <p>Create new account <Link to="/signin">Create</Link></p>

                        <input type="submit" value="Login" />
                    </form>
                </div>
            </div>
            <div className="container">
                {Array.isArray(formData) && formData.map((formData) => (
                    <div className="card" key={formData.id}>
                        <h3>Welcome, {formData.firstname} {formData.lastname}</h3>
                    </div>
                ))}
            </div>
        </div>


    )
}
