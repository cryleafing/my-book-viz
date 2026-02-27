import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
const COLORS = ['#0088FE', '#00C49F']; // blue for one, green for the other

const GenrePieChart = ({ data }) => {
    // process data to count fiction vs non-fiction
    const processData = (rawData) => {
        const counts = rawData.reduce((acc, book) => {
            acc[book.Genre] = (acc[book.Genre] || 0) + 1;
            return acc;
        }, {});
        return Object.keys(counts).map(key => ({ 
            name: key, value: counts[key] }));
    };

    const chartData = processData(data);

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60} // Makes it a "Donut" chart (looks cleaner!)
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        label
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GenrePieChart;
