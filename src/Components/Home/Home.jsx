
import image from '../../assets/banner.jpg'
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';
const Home = () => {
    const category= useLoaderData()
    return (
        <div className=''>
           
           <div className='mb-10 text-white text-center  rounded-b-2xl bg-[#9538E2] h-[410px] md:h-[610px]' >
               <h1 className='text-2xl md:text-6xl relative top-10'>Explore the Future <br></br> Today with GadgetHeaven ⚡️</h1>
               <div>
                  <p className=' text-2xl relative  md:top-20 top-15'>Shop the latest laptops, phones, smartwatches, and accessories  all in one place.</p>
               </div>
               <div className='relative md:top-30 top-25'>
                 <Link  to='gadeget/All'> <button  className='btn rounded-2xl text-[#9538E2]'>Shop Now</button></Link>
               </div>
           </div>
            <div id='banner' className=' w-9/12 mx-auto md:h-120 h-50  relative bottom-35 md:bottom-70'>
                <img className='w-full rounded-2xl h-full' src={image} alt="" />
            </div>
             <h1 className='text-center  md:text-4xl font-bold relative md:bottom-35 bottom-20 text-2xl '>Explore Cutting-Edge Gadgets</h1>
            <div  className='flex gap-10 '>
                
                    <div className=' w-3/12 '>
                       <div id='gadeget-container' className='grid sticky top-25  gap-5 justify-items-center'>
                           {
                           category.map(data=><NavLink   className='bg-blue-100  hover:text-white hover:bg-[#9538E2] text-center card py-2 w-30' key={data.category} to={`/gadeget/${data.category}`}>{data.category}</NavLink>)
                            }
                       </div>
                    </div>
                    <div className=' w-full card'>
            
                         <div>
                            <Outlet></Outlet>
                         </div>
                    </div>
            </div>
        </div>
    );
};

export default Home;