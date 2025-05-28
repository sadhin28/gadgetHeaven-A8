
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = useLoaderData()
    console.log(data)
    return (
      <ResponsiveContainer width="100%" height="100%">
          <BarChart   width={500}
          height={400}
          data={data}>
               <XAxis dataKey='name'></XAxis>
               <YAxis dataKey=""></YAxis>
               <Bar dataKey='price'></Bar>
          </BarChart>
      </ResponsiveContainer>
    );
};

export default Statistics;