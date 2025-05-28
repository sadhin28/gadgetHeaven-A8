
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Statistics = () => {
     const getPath = (x, y, width, height) => (
        `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
    );

    const TriangleBar = (props) => {
        const {
            fill, x, y, width, height,
        } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const renderCustomBarLabel = ({ x, y, width, value }) => {
        return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-10}>{`${value}`}</text>;
    };
    const data = useLoaderData()

    return (
        <div className='mt-30'>
            <ResponsiveContainer width="100%" height={400}>
              
                  <BarChart width={500}
                    height={400}
                    data={data}>
                    <XAxis dataKey='name'></XAxis>
                    <YAxis dataKey=""></YAxis>
                      <Bar shape={TriangleBar} dataKey="price" fill="#93C837FF" label={renderCustomBarLabel} barGap={150}></Bar>
                      
                </BarChart>
  
            </ResponsiveContainer>


        </div>
    );
};

export default Statistics;