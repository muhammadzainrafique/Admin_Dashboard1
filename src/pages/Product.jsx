import React, { useCallback, useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import Table from '../components/TableHOC';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

const columns = [
  {
    Header:'Photo',
    accessor:'photo'
  },
  {
    Header:'Name',
    accessor:'name'
  },
  {
    Header:'Price',
    accessor:'price'
  },
  {
    Header:'Stock',
    accessor:'stock'
  },
  {
    Header:'Action',
    accessor:'action'
  },
]
const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpiKQGTYHkEuEoeOfYkZ9UZSkPA38nsF6xc_OAjQNXxMeYYAPJdtH5BBNWjeDIDpFn34&usqp=CAU'
const array = [
  {
    photo:<img style={{width:'60px',height:'60px', borderRadius:'50%'}} src={img} alt='shoes' />,
    name:'Pamas Shhoes Air Jordan Cook Nigga',
    price:4000,
    stock:3,
    action:<Link to="/admin/product/:id">Manage</Link>
  },
  {
    photo:<img style={{width:'60px',height:'60px', borderRadius:'50%'}} src={img} alt='shoes' />,
    name:'Pamas Shhoes Air Jordan Cook Nigga',
    price:1000,
    stock:3,
    action:<Link to="/admin/product/:id">Manage</Link>
  },
  {
    photo:<img style={{width:'60px',height:'60px', borderRadius:'50%'}} src={img} alt='shoes' />,
    name:'Pamas Shhoes Air Jordan Cook Nigga',
    price:4000,
    stock:5,
    action:<Link to="/admin/product/:id">Manage</Link>
  },
  {
    photo:<img style={{width:'60px',height:'60px', borderRadius:'50%'}} src={img} alt='shoes' />,
    name:'Pamas Shhoes Air Jordan Cook Nigga',
    price:1000,
    stock:3,
    action:<Link to="/admin/product/:id">Manage</Link>
  },
  {
    photo:<img style={{width:'60px',height:'60px', borderRadius:'50%'}} src={img} alt='shoes' />,
    name:'shoes',
    price:4000,
    stock:5,
    action:<Link to="/admin/product/:id">Manage</Link>
  },
  {
    photo:<img style={{width:'60px',height:'60px', borderRadius:'50%'}} src={img} alt='shoes' />,
    name:'Pamas Shhoes Air Jordan Cook Nigga',
    price:1000,
    stock:3,
    action:<Link to="/admin/product/:id">Manage</Link>
  },
  {
    photo:<img style={{width:'60px',height:'60px', borderRadius:'50%'}} src={img} alt='shoes' />,
    name:'Pamas Shhoes Air Jordan Cook Nigga',
    price:4000,
    stock:5,
    action:<Link to="/admin/product/:id">Manage</Link>
  },
  {
    photo:<img style={{width:'60px',height:'60px', borderRadius:'50%'}} src={img} alt='shoes' />,
    name:'Pamas Shhoes Air Jordan Cook Nigga',
    price:1000,
    stock:3,
    action:<Link to="/admin/product/:id">Manage</Link>
  },
  {
    photo:<img style={{width:'60px',height:'60px', borderRadius:'50%'}} src={img} alt='shoes' />,
    name:'Pamas Shhoes Air Jordan Cook Nigga',
    price:4000,
    stock:5,
    action:<Link to="/admin/product/:id">Manage</Link>
  },
  {
    photo:<img style={{width:'60px',height:'60px', borderRadius:'50%'}} src={img} alt='shoes' />,
    name:'Pamas Shhoes Air Jordan Cook Nigga',
    price:4000,
    stock:3,
    action:<Link to="/admin/product/:id">Manage</Link>
  },
]
function Product() {
  const [data] = useState(array);
  const table = useCallback(()=>(
    <Table 
  containerClassName="product-container"
  heading="Products"
  columns={columns}
  data={data}
  showPagination={true}
   />
  ),[])
  return (
    <div className='adminContainer'>
      {/* sidebar */}
      <AdminSidebar/>
      {/* main */}
      <main>
      {table()}
      <Link className='create-new-button' to="/admin/product/new"><FaPlus/></Link>

      </main>
    </div>
  )
}

export default Product
