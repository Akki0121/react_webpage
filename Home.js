import React from 'react'
import {  BsTextCenter, BsWallet2}from 'react-icons/bs'
import {CgShoppingBag  } from "react-icons/cg";
 import {AiOutlineDollar} from 'react-icons/ai';
 import { RiFileList3Fill} from 'react-icons/ri';
 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart } 
 from 'recharts';
// import { Doughnut } from 'react-chartjs-2';
// import Table from './table';

function Home() {

    const data = [

        {
          name: 'Jan',
          uv: 3000,
        },
        {
          name: 'Feb',
          uv: 2000,
        },
        {
          name: 'Mar',
          uv: 2780,
        },
        {
          name: 'Apr',
          uv: 1890,
        },
        {
          name: 'May',
          uv: 2390,
        },
        {
          name: 'Jun',
          uv: 3490,
        },
        {
            name: 'Jul',
            uv: 2200,
          },
        {
            name: 'Aug',
            uv: 3900,
        },
        {
            name: 'Sep',
            uv: 4000,
        },
        {
            name: 'Oct',
            uv: 3800,
        },
        {
            name: 'Nov',
            uv: 3600,
          },
          {
            name: 'Dec',
            uv: 3200,
        },
      ];
     
  return (
    <main className='main-container'>
        {/* <div className='main-title'>
            <h3>Hello ANKIT</h3>
        </div> */}

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <AiOutlineDollar className='card_icon'/>
                    <h1>$128k</h1>                    
                </div>
                <h3>Earning</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <RiFileList3Fill className='card_icon'/>
                    <h1>$4.6k</h1>
                </div>
                <h3>Orders</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <BsWallet2 className='card_icon'/>
                    <h1>$3.2k</h1>
                </div>
                <h3>Balance</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <CgShoppingBag className='card_icon'/>
                    <h1>$109k</h1>
                </div>
                <h3>Total Sales</h3>
            </div>
        </div>
        
        
        <div className='charts'>
            <div className='chart-inner'>
              <h2>Overview</h2>
              <h5>Monthly Income</h5>
              
            </div>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={600}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <XAxis dataKey="name" />
                <Legend />
                <Bar className="bar" dataKey="uv" fill=" rgb(73, 22, 118)" />
                </BarChart>
            </ResponsiveContainer>
            {/* <Table /> */}
        </div>
        
      {/* <div className='table'>
        <Table />
      </div> */}
    </main>
    
  )
}

export default Home