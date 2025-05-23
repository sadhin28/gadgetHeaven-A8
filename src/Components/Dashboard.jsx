import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Dashboard = () => {
    const dashboardData = useLoaderData()
    
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;