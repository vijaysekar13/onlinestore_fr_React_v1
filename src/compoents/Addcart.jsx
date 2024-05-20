import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Addcart = () => {
  const [cartItems, setCartItems] = useState([]);

  const userId = sessionStorage.getItem('userId')



  useEffect(() => {
    fetch(`http://localhost:8000/cart/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setCartItems(data.items);
        console.log("Current", data.items)
        // calculateTotalPrice(data);
      })
      .catch(error => {
        console.error('Error during fetch', error);
      });
  }, []);

  const handleQuantityChange = (cartId, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.cartid === cartId) {
        return { ...item, quantity: parseInt(newQuantity) };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    // calculateTotalPrice(updatedCartItems);
  };

  // const calculateTotalPrice = (items) => {
  //   const total = items.reduce((acc, item) => acc + item.price, 0);
  //   setTotalPrice(total);
  // };

  // useEffect(() => {
  //   calculateTotalPrice(cartItems);
  // }, [cartItems]);


  const handleDelete = (cartId) => {
    console.log("product",cartId)
    fetch(`http://localhost:8000/cart/${userId}/${cartId}`, { method: 'DELETE' })
      .then(res => {
        if (res.ok) {
          const updatedCartItems = cartItems.filter(item => item.cartid !== cartId);
          setCartItems(updatedCartItems);
          window.location.reload();
          // calculateTotalPrice(updatedCartItems);
        } else {
          console.error('Failed to delete item.');
        }
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };


  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <Nav />
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
        
        {cartItems.map(item => (
          <div className='row' key={item.cartid}>
            <div className='col-5 p-4'>
              <img src={`http://localhost:8000/public/data/uploads/${item.product.image}`} style={{ height: '210px', width: "200px", border: '1px solid white', borderRadius: '10px' }} alt="Product" />
            </div>
            <div className='col-7 p-4'>
              <div className="d-flex justify-content-end">
                <button type="button" onClick={() => handleDelete(item.product._id)} className="btn-close d-flex justify-content-end" aria-label="Close"></button>
              </div>
              <p>{item.product.name}</p>
              <div className='row'>
                <div className='col'>
                  <p>{item.product.description}</p>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16">
                      <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
                    </svg>{item.price}
                  </div>
                  <div>
                        <p>Quantity : <input type="number" style={{width : '50px'}} value={item.quantity} onChange={(e) => handleQuantityChange(item._id, e.target.value)} /></p>
                      </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Order Summary */}
      <div style={{ flex: '1', textAlign: 'center' }}>
        <h2>Order Summary</h2>
        <p>Total Items: {cartItems.length}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
       <Link to={"/pay"}><button type="button" class="btn btn-primary">Check Out </button></Link> 
      </div>
    </div>
    </div>
  );
}

export default Addcart;
