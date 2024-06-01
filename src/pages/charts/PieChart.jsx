import React from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import { DounetChart, PieeChart } from '../../components/charts'
function PieChart() {

    const content =(
        <main className='chart-managment'>
            <h2>Pie Chart & Dounet Chart</h2>

            <div className='pie-chart'>
                <PieeChart
                data={[343, 234, 343]}
                color={['rgba(10, 200, 20, 0.5)', 'rgba(10, 200, 20, 0.3)', 'rgba(10, 200, 20, 0.7)']}
                labels={['deliverd','processing','received']}
                />

                <h2>Order fullfillment Ratio</h2>
            </div>
            

            <div className='pie-chart'>
                <DounetChart
                data={[233, 400, 200, 300]}
                labels={['camera','laptop','mobile', 'airpods']}
                color={['red', 'green','pink', 'orange']}
                legend={true}
                offset={[0, 0,50]}
                />
                <h2>Product Category Ratio</h2>
            </div>

            <div className='pie-chart'>
                <PieeChart
                data={[343, 234, 343]}
                color={['rgba(10, 200, 20, 0.5)', 'rgba(10, 200, 20, 0.3)', 'rgba(10, 200, 20, 0.7)']}
                labels={['deliverd','processing','received']}
                />
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

export default PieChart
