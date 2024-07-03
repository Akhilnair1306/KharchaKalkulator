import React from 'react'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function BarChartDashboard({budgetList}) {
  return (
    <div className='border rounded-lg p-5'>
        <h2 className='font-bold text-lg'>Activity</h2>
        <ResponsiveContainer width={'80%'} height={300}>
        <BarChart
        width={400}
        height={300}
        data={budgetList}
        margin={{
            top:5,
            right:5,
            left:5,
            bottom:5,
            top:7
        }}>
            <XAxis dataKey= 'name' />
            <YAxis />
            <Tooltip />
            <Legend/>
            <Bar dataKey='totalSpend' stackId='a' fill=' #F57C00'/>
            <Bar dataKey='amount' stackId='a' fill='#FFCC80'/>
        </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default BarChartDashboard