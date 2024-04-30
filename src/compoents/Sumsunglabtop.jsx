import Nav from './Nav'
import React, { useState } from 'react'
import { useEffect } from 'react'

export const Sumsunglabtop = () => {
  const [setdata, setSelectedData] = useState();
const handleSubmit = () => {
    fetch(`http://localhost:8080/product/getbrand?brandname=Samsung&categoryname=Laptop`)    
         .then((response)=>{
            if(!response.ok) {
              throw new Error("Failed to fetch data");
            }
           return response.json();
          })
          .then((data) => {
            console.log(data)
            setSelectedData(data)
          })
          .catch((error) =>{
            console.error("Error During fetch", error);
          })
        }

        useEffect(() => {
            handleSubmit()
        }, []);
        const CartSend = ({ setData }) => {
          console.log(setData)
          fetch("http://localhost:8080/product/addcart", {
            headers: {
              "Content-Type": "application/json"
            },
            method: 'post',
            body: JSON.stringify(setData)
          })
            .then((response) => {
              console.log("Data received " + response);
            })
          alert("Product Added to Cart..!");
        }
  return (
    <div> 
      <Nav />   
        {Array.isArray(setdata) && setdata.map((setData) => (
            <div>
                <img src={`http://localhost:8080/uploads/${setData.image}`} style={{height : '300px', width : '300px'}}></img>
                <h1>{setData.productname}</h1>
                <h1>{setData.description}</h1><h1>{setData.price}</h1>
                <button type="button" class="btn btn-primary position-relative" onClick={() => CartSend({setData})}>
  Add card</button>
            </div>
        ))}

    </div>
  )
}

  
export default Sumsunglabtop
