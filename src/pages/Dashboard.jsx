import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import {BsSearch} from 'react-icons/bs'
import {HiTrendingUp, HiTrendingDown} from 'react-icons/hi'
import { FaRegBell } from 'react-icons/fa';
import { BiMaleFemale } from 'react-icons/bi';
import userimg from '../assets/profile-image.jpg'
import BarChart, { DounetChart } from '../components/charts';
import Table from '../components/DashboardTable';
import data from '../assets/data.json'
function Dashboard() {

  const content = (
  <main className='dashboard'>
     <div className="bar">
      <BsSearch />
      <input type="text" placeholder='Search for data, users, docs'/>
      <FaRegBell/>
      <img src={userimg} alt="profile pic" />
     </div>

     <section className="widget-container">
      <WidgetItem percent={40} amount={true}
       value={4000} heading="Revenue"
        color="rgb(20, 115, 255)" />
        <WidgetItem percent={80} amount={false}
       value={400000} heading="Users"
        color="rgb(20, 200, 25)" />

      <WidgetItem percent={30} amount={true}
       value={40000} heading="Transactions"
        color="rgb(200, 15, 25)" />
      </section>

      <section className="chart-container">
        <div className="revenue-chart">
          <h2>Revenue & Transactions</h2>
            {/* Barchart */}

            <BarChart 
            data1={[300,200,700,788]} 
            data2={[100,400,300,188]}
            title1 = "Revenue"
            title2 = "Transaction"
            horizontal={false}
            color1="rgb(0, 115, 225)"
            color2="rgb(53, 162, 235,0.8)" />
        </div>
        <div className="dashboard-category">
          <h2>Inventory</h2>

          <DashboardItem heading="Laptops" color="rgb(250,0,0,0.7)" value={40}/>
          <DashboardItem heading="shoes" color="rgb(10,10,250,0.8)" value={80}/>
          <DashboardItem heading="Camera" color="rgb(2,100,100,0.7)" value={50}/>
          <DashboardItem heading="Jeans" color="rgb(200,10,100,0.7)" value={80}/>
        </div>
      </section>

      <section className="transaction-container">
        <div className="gender-chart">
          <h2>Gender Ratio</h2>
          {/* chart */}
          <DounetChart 
          data={[12,19]}
           legend={true}
          cutout={80}
          labels={["Male","Female"]} 
          color={["rgb(200,100,200,0.6)","rgb(10,100,200,0.5)"]}
          />
          <p><BiMaleFemale/></p>
        </div>

          <Table data={data.transaction} />

        {/* table */}
      </section>
  </main>
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

const DashboardItem = ({color, value, heading}) => (
  <div className="dashboard-item">
    <h4>{heading}</h4>
    <div className="dash-outer-items">
      <div className="dash-item"
      style={{
        background:color,
        width:`${value}%`,
      }}
      >

      </div>

    </div>

    <h5>{value}%</h5>
  </div>
)

const WidgetItem = ({heading, value, percent, color, amount}) => (
  <article className='widget'>
    <div  className="widget-info">
      <p>{heading}</p>
      <h4>{amount?`$${value}`:value}</h4>
      {
        percent>0?
        (<span className='green'><HiTrendingUp/> +{percent}%</span>)
        :(<span className='red'><HiTrendingDown/> {percent}%</span>)
      }
    </div>

    <div className="widget-circle"
    style={{
      background:`conic-gradient(
        ${color} ${Math.abs(percent)/100*360}deg,
        rgb(255, 255, 255) 0 
      )`
    }}
    >
      <span style={{color}}>{percent}%</span>
    </div>

  </article>
)
export default Dashboard
