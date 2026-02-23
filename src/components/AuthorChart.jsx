import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import bestsellers from '../data/bestsellers.json';

const getAuthorData = (data) => {
    const authorCounts = {};
    data.forEach(book => {
        authorCounts[book.Author] = (authorCounts[book.Author] || 0) + 1;
    });

    return Object.keys(authorCounts)
                 .map(author => ({
                     author,
                     count: authorCounts[author]
                 }))
                 .sort((a, b) => b.count - a.count)
                 .slice(0, 10); // Show top 10 authors
};

const AuthorChart = () => {
    const data = getAuthorData(bestsellers);

    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="author" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AuthorChart;