import React, { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar';
function NewProductPage() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [photo, setPhoto] = useState()

  const handleSubmit =(e) =>{
    e.preventDefault();
    alert('Added Sucessfully!')
    setName('')
    setPrice('')
    setStock('')
    setPhoto('')
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
          <h2>Add Product</h2>
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
            <button>Add Product</button>
        </form> 
    </article>
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

export default NewProductPage
