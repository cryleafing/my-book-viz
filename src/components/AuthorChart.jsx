import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
                 .slice(0, 10); 
};

// destructure 'data' from the props passed by App.js
const AuthorChart = ({ data }) => {
    // run the helper on the NEW data every time the component re-renders
    const chartData = getAuthorData(data);

    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <BarChart
                    data={chartData}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="author" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#4f46e5" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AuthorChart;