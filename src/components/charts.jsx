import React from 'react'
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );
function BarChart({data1,data2, color1, color2, title1, title2,horizontal, label}) {
    
    const options = {
        responsive: true,
        indexAxis :horizontal? 'y':'x',
        plugins: {
          legend: {
            display:false,
            position:'top'
          },
          title: {
            display: false,
          },
        },
        scales:{
            y:{
                beginAtZero:true,
                // max:1000,
                ticks:{
                    stepSize:200,
                    
                },
                grid:{
                    display:false,
                }
            },
            x:{
                grid:{
                    display:false
                }
            }
        }
      };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels:label?.length? label:labels,
        datasets:[
            {
                label:title1,
                data:data1,
                backgroundColor:color1,
                barThickness:'flex',
                barPercentage:1,
                categoryPercentage:0.4,
            },
            {
                label:title2,
                data:data2,
                backgroundColor:color2,
                barThickness:'flex',
                barPercentage:1,
                categoryPercentage:0.4,
            }
        ]
    } 
  return (
    <Bar options={options} data={data}/>
  )
}

export const DounetChart = ({data, color, labels,cutout, legend, offset}) => {
  const dounetData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor:color,
        borderWidth:0,
        offset
      }
    ]
  };
  const dounetOptions = {
    responsive:true,
    plugins: {
      legend: {
         position: 'bottom'
      },
   },
    cutout,
  };



  return <Doughnut data={dounetData} options={dounetOptions}/>
}

export const PieeChart = ({data, color, labels, offset}) => {
  const pieChartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor:color,
        borderWidth:3,
        offset:(2, 2, 2)
      }
    ]
  };
  const pieChartOptions = {
    responsive:true,
    display:false,
    plugins: {
      legend: {
         position: 'bottom'
      },
   },
  };



  return <Pie data={pieChartData} options={pieChartOptions}/>
}

export default BarChart
