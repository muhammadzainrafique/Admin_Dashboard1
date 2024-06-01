import React, { useCallback } from 'react'
import Table from '../components/TableHOC'
import AdminSidebar from '../components/AdminSidebar'
import { Link } from 'react-router-dom'
const columns = [
  {
    Header:'User',
    accessor:'user'
  },
  {
    Header:'Amount',
    accessor:'amount'
  },
  {
    Header:'Discount',
    accessor:'discount'
  },
  {
    Header:'Quantity',
    accessor:'quantity'
  },
  {
    Header:'Status',
    accessor:'status'
  },
  {
    Header:'Action',
    accessor:'action'
  },
  
]
const data = [
  {
    user:'Muhammad Zain',
    amount:5000,
    discount:1000,
    quantity:3,
    status:<span style={{color:'red',fontWeight:'bold'}}>Processing</span>,
    action:<Link to="/admin/transaction/:id">Manage</Link>
  },
  {
    user:'Muhammad Zain',
    amount:5000,
    discount:1000,
    quantity:3,
    status:<span style={{color:'green',fontWeight:'bold'}}>Shipped</span>,
    action:<Link to="/admin/transaction/:id">Manage</Link>
  },
  {
    user:'Muhammad Zain',
    amount:5000,
    discount:1000,
    quantity:3,
    status:<span style={{color:'purple',fontWeight:'bold'}}>Deliverd</span>,
    action:<Link to="/admin/transaction/:id">Manage</Link>
  },
]


function Transactions() {

  const table = useCallback(()=>(
    <Table 
  containerClassName="product-container"
  heading="Transactions"
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

export default Transactions
