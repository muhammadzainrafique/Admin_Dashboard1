import React, { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import { Link } from 'react-router-dom'
function TransactionManagment() {

  const img = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D'
  const orderitem = [
    {
      img,
      name:"Jordan Shoes",
      price:300,
      quantity:3,
      id:'jfsjkfkj2j33'
    },
    {
      img,
      name:"Jordan Shoes",
      price:300,
      quantity:3,
      id:'jfsjkfkj2j33'
    },
    {
      img,
      name:"Jordan Shoes",
      price:300,
      quantity:3,
      id:'jfsjkfkj2j33'
    },
  ]

  const orderInfo = [
    
      {
        name:"Muhammad Zain",
        address:'Barsali Bhimber Azad Kashmir',
        state:'Azad Kashmir',
        subTotal:4000,
        Shipping:0,
        tax:20,
        discount:200,
        total:3000,
        status:'Processing'
    }
  ]

  const {name,address, } = orderInfo[0];
  const {subTotal,Shipping, tax, discount } = orderInfo[0];
  const [updateStatus, setUpdateStauts] = useState(orderInfo[0].status);
  const handleStatus = () => {
    setUpdateStauts((prevStatus) => 
      prevStatus === "Processing" ? "Shipped" : "Delivered"
    );
  };
  
  let statusClass;
if (updateStatus === 'Processing') {
  statusClass = 'red';
} else if (updateStatus === 'Delivered') {
  statusClass = 'green';
} else {
  statusClass = 'purple';
}

  const content = (
    <div className="transaction-managment">
      <div className="order-items">
        <h2>Order Items</h2>
        {
          orderitem.map((item, id)=> <ItemIterator key={id} item={item}/>)
        }
      </div>
      <div className="order-info">
        <h2>Order Info</h2>
        <div className="user-info">
          <h3>User Info</h3>
          <p>Name: {name}</p>
          <p>Address: {address}</p>
        </div>
        <div className="account-info">
          <h3>Account Info</h3>
          <p>SubTotal: {subTotal}</p>
          <p>Shipping Charges: {Shipping}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {subTotal-discount}</p>
        </div>
        <div className="status-info">
          <h3>Status Info</h3>
          <p>Status:<span style={{color:statusClass, fontWeight:'bolder',fontSize:'18px'}}> {updateStatus}</span></p>
        </div>
        <button onClick={handleStatus}>Process Status</button>
      </div>
      
    </div>
  )
  return (
    <div className='adminContainer'>
      {/* sidebar */}
      <AdminSidebar/>
      {/* main */}
      {content} 
    </div>
  )
}

const ItemIterator = ({item}) =>(
  <div className="item">
    <img src={item.img} alt='item-img'/>
    <Link to={`/admin/product/${item.id}`} >{item.name}</Link>
    <p>{item.price} X {item.quantity} = {item.price* item.quantity}</p>
  </div>
)

export default TransactionManagment
