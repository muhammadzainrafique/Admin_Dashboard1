import React from 'react'
import {RiDashboardFill, RiShoppingBagFill} from 'react-icons/ri'
import {AiFillFileText} from 'react-icons/ai'
import {IoIosPeople} from 'react-icons/io'
import {FaChartLine,FaChartPie,FaChartBar,FaStopwatch,FaGamepad} from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

function AdminSidebar() {
    const location = useLocation();
  return (
    <aside>
        <h2>ShopNow.</h2>
        <Divone location={location}/>
        <Divtwo location={location}/>
        {/* <Divthree location={location}/> */}
    </aside>
  )
}
const Divone =({location})=>(
    <div>
        <h5>Dashboard</h5>
        <ul>
            <Li 
            icon={<RiDashboardFill/>} 
            info={{text:"Dashbord",url:"/admin/dashboard",location}}
            />
            <Li 
            icon={<RiShoppingBagFill/>} 
            info={{text:"Product",url:"/admin/product",location}}
            />
            <Li 
            icon={<IoIosPeople/>} 
            info={{text:"Customer",url:"/admin/customer",location}}
            />
            <Li 
            icon={<AiFillFileText/>} 
            info={{text:"Transaction",url:"/admin/transaction",location}}
            />
        </ul>
    </div>
    )

    const Divtwo =({location})=>(
        <div>
            <h5>Charts</h5>
            <ul>
                <Li 
                icon={<FaChartBar/>} 
                info={{text:"Bar",url:"/admin/chart/bar",location}}
                />
                <Li 
                icon={<FaChartPie/>} 
                info={{text:"Pie",url:"/admin/chart/pie",location}}
                />
                <Li 
                icon={<FaChartLine/>} 
                info={{text:"Line",url:"/admin/chart/line",location}}
                />
            </ul>
        </div>
        )

        const Divthree =({location})=>(
            <div>
                <h5>Apps</h5>
                <ul>
                    <Li 
                    icon={<FaStopwatch/>} 
                    info={{text:"Stopwatch",url:"/admin/apps/stopwatch",location}}
                    />
                    <Li 
                    icon={<FaGamepad/>} 
                    info={{text:"Toss",url:"/admin/apps/toss",location}}
                    />
                    <Li 
                    icon={<FaChartLine/>} 
                    info={{text:"Cupion",url:"/admin/apps/stopwatch",location}}
                    />
                </ul>
            </div>
            )
    
const Li = ({info, icon})=> <li 
style={{backgroundColor:info.location.pathname.includes(info.url)?"rgb(0,115,255,0.2)":"white"}}>
    <Link 
    style={{color:info.location.pathname.includes(info.url)?"rgb(0,115,255)":"black"}}
    to={info.url}>{icon} {info.text}</Link>
</li>


export default AdminSidebar
