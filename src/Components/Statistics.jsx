
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = useLoaderData()
    console.log(data)
    return (
      <div className='mt-30'>
         <ResponsiveContainer width="100%" height={400}>
 <BarChart   width={500}
          height={400}
          data={data}>
               <XAxis dataKey='name'></XAxis>
               <YAxis dataKey=""></YAxis>
               <Bar width={150} dataKey='price'></Bar>
          </BarChart>
         </ResponsiveContainer>
         
      
      </div>
    );
};

export default Statistics;