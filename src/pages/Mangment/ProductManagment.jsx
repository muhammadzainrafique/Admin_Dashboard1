import React, { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import pic from '../../assets/profile-image.jpg'
import { useNavigate } from 'react-router-dom'
function ProductManagment() {

  const img = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D'
  const [name, setName] = useState('Jordan Shoes')
  const [price, setPrice] = useState('300')
  const [stock, setStock] = useState('20')
  const [photo, setPhoto] = useState(img)
  const naviagate = useNavigate();
  const handleSubmit =(e) =>{
    
    e.preventDefault();
    alert('Added Sucessfully!')
    setName('')
    setPrice('')
    setStock('')
    setPhoto('')
    naviagate('/admin/product');
  }
  const handleImageChange = (e) =>{
    const file = e.target.files?.[0];
    const reader = new FileReader();
    if(file){
      reader.readAsDataURL(file);
      reader.onloadend = () =>{
        if( typeof reader.result ==='string') setPhoto(reader.result)
      }
    }
  }



  const content = (
    <div className="newproduct">
        <article >
         <form onSubmit={handleSubmit}>
           <h2>Update Product</h2>
           <div>
             <label htmlFor="name">Name</label>
             <input type="text"
             placeholder='Enter Name of Product'
             value={name}
             required
             onChange={(e)=> setName(e.target.value)} 
             />
           </div>
            
           <div>
             <label htmlFor="pirce">Price</label>
             <input type="Number"
             placeholder='Enter Price of Product'
             value={price}
             required
             onChange={(e)=> setPrice(e.target.value)} 
             />
           </div>
 
           <div>
             <label htmlFor="stock">Stock</label>
             <input type="number"
             placeholder='Enter Stock of Product'
             required
             value={stock}
             onChange={(e)=> setStock(e.target.value)} 
             />
           </div>
 
           
             <div>
               <label htmlFor="photo">Photo</label>
               <input type='file' onChange={handleImageChange}/>
             </div>
             {
               photo && < img src={photo} alt='new image' />
             }
             <button>Update Product</button>
         </form> 
     </article>
     <div className="img-div">
     
      {stock>0? <span className='green'>Avaliable {stock}</span>:<span className='red'>Not Avaliable</span>}
      <br />
      <strong >ID : fjs9f9u77fd</strong>
      {photo && <img src={photo} alt="update-photo" />}
      <h3>{name}</h3>
      <h2>{`${price}$`}</h2>
      
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

export default ProductManagment
