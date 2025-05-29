import React from 'react'
import { Pie, PieChart, Cell, Tooltip, ResponsiveContainer, Legend, } from "recharts";
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';
import RenderCenterLabel from './renderCenterLabel';
const CustomPieChart = ({
    data,
    label,
    totalAmount,
    colors,
    showTextAnchor
}) => {
    return (

        <ResponsiveContainer width="100%" height={380}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="amount"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={130}
                    innerRadius={100}
                    labelLine={false}
                    label={showTextAnchor ? () => <RenderCenterLabel label={label} totalAmount={totalAmount} /> : false}

                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]}
                        />
                    ))}
                </Pie>
                <Tooltip content={CustomTooltip} />
                <Legend content={CustomLegend} />

            </PieChart>
        </ResponsiveContainer>
    )
}

export default CustomPieChart
