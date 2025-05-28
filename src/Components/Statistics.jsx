import React, { PureComponent } from 'react';
import { useLoaderData } from "react-router-dom";

import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
    BarChart,
    LineChart,
} from 'recharts';

const Statistics = () => {

    const data = useLoaderData()

    return (
        
     <ResponsiveContainer width='100%' height='100%'>
        <BarChart  data={data}>
            <XAxis dataKey="name"></XAxis>
             <YAxis dataKey=""/>
               
        </BarChart>
     </ResponsiveContainer>
      

    );
};

export default Statistics;