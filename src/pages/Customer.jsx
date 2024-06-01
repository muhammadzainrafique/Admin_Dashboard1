import React, { useCallback } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { MdDelete } from "react-icons/md";
import Table from '../components/TableHOC'
import { Link } from 'react-router-dom';
import userimage from '../assets/../assets/profile-image.jpg'
const columns = [
  {
    Header:'Avatar',
    accessor:'avatar'
  },
  {
    Header:'Name',
    accessor:'name'
  },
  {
    Header:'Gender',
    accessor:'gender'
  },
  {
    Header:'Email',
    accessor:'email'
  },
  {
    Header:'Role',
    accessor:'role'
  },
  {
    Header:'Action',
    accessor:'action'
  },
]

const data = [
  {
    avatar:<img style={{width:'50px',height:'50px',borderRadius:'50%', border:'none'}} src={userimage} alt='customer'/>,
    name:'Muhammad Zain',
    gender:'male',
    email:'zain@test.com',
    role:'User',
    action:<Link style={{color:'red',background:'white',fontSize:'2.2rem'}} ><MdDelete/></Link>
  },
  {
    avatar:<img style={{width:'50px',height:'50px',borderRadius:'50%', border:'none'}} src={userimage} alt='customer'/>,
    name:'Muhammad Zain',
    gender:'male',
    email:'zain@test.com',
    role:'User',
    action:<Link style={{color:'red',background:'white',fontSize:'2.2rem'}} ><MdDelete/></Link>
  },
  {
    avatar:<img style={{width:'50px',height:'50px',borderRadius:'50%', border:'none'}} src={userimage} alt='customer'/>,
    name:'Muhammad Zain',
    gender:'male',
    email:'zain@test.com',
    role:'User',
    action:<Link style={{color:'red',background:'white',fontSize:'2.2rem'}} ><MdDelete/></Link>
  },
  {
    avatar:<img style={{width:'50px',height:'50px',borderRadius:'50%', border:'none'}} src={userimage} alt='customer'/>,
    name:'Muhammad Zain',
    gender:'male',
    email:'zain@test.com',
    role:'User',
    action:<Link style={{color:'red',background:'white',fontSize:'2.2rem'}} ><MdDelete/></Link>
  },
]
function Customer() {

  const table = useCallback(()=>(
    <Table 
  containerClassName="product-container"
  heading="Customers"
  columns={columns}
  data={data}
  showPagination={true}
   />
  ),[])
  return (
    <div className='adminContainer'>
      {/* sidebar */}
      <AdminSidebar/>

      <main>
        {table()}
      </main>
      
    </div>
  )
}

export default Customer
