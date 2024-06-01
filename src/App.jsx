import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Dashboard = lazy(()=> import('./pages/Dashboard'))
import Loader from './components/Loader'
const NewProductPage = lazy(()=> import('./pages/Mangment/NewProductPage'))
const ProductManagment = lazy(()=> import('./pages/Mangment/ProductManagment'))
const TransactionManagment = lazy(()=> import('./pages/Mangment/TransactionManagment'))
const  BarChart = lazy(()=> import('./pages/charts/BarChart'))
const  PieChart = lazy(()=> import('./pages/charts/PieChart'))
const  LineChart = lazy(()=> import('./pages/charts/LineChart'))
const  Customer = lazy(()=> import('./pages/Customer'))
const  Product = lazy(()=> import('./pages/Product'))
const  Transactions = lazy(()=> import('./pages/Transactions'))
function App() {
  return (
    <>
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route  path='/admin/dashboard' element={<Dashboard/>}/>
        <Route  path='/admin/customer' element={<Customer/>}/>
        <Route path='/admin/product' element={<Product/>}/>
        <Route path='/admin/transaction' element={<Transactions/>}/>


        {/* Charts */}
        <Route path='/admin/chart/bar' element={<BarChart/>} />
        <Route path='/admin/chart/pie' element={<PieChart/>} />
        <Route path='/admin/chart/line' element={<LineChart/>} />


        {/* Managment */}

        <Route path='/admin/product/new'  element={<NewProductPage/>}/>
        <Route path='/admin/product/:id'  element={<ProductManagment/>}/>
        <Route path='/admin/transaction/:id'  element={<TransactionManagment/>}/>
        
      </Routes>

      </Suspense>
    
    </BrowserRouter>
     
    </>
  )
}

export default App
