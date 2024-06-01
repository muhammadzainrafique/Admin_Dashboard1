import React from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import Barchart from '../../components/charts'
function BarChart() {
    const labels=["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    const content = (
        <main className='chart-managment'>
            <h2>Bar Chart</h2>
            <div>
                <Barchart
                data1={[123,555, 44, 333, 888]}
                data2={[255,545, 675, 235, 141]}
                color1='rgb(93, 53, 105)'
                color2='rgb(255, 182, 123,0.4)'
                title1='Transaction'
                title2='Users'
                horizontal={false}
                label={labels}
                />
                <h2>Top selling products & top customers</h2>
            </div>
            <div>
                <Barchart
                data1={[123,555, 44, 333, 888]}
                data2={[255,545, 675, 235, 141]}
                color1='rgb(93, 53, 105)'
                color2='rgb(255, 182, 123,0.4)'
                title1='Transaction'
                title2='Users'
                horizontal={true}
                label={labels}
                />
                <h2>Top selling products & top customers</h2>
            </div>
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

export default BarChart
