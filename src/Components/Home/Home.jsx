import './Home.css'
import image from '../../assets/banner.jpg'
const Home = () => {
    return (
        <div className=''>
           
           <div className='mb-10 text-white text-center  rounded-b-2xl bg-[#9538E2] h-[410px] md:h-[610px]' >
               <h1 className='text-2xl md:text-6xl relative top-10'>Explore the Future <br></br> Today with GadgetHeaven ⚡️</h1>
               <div>
                  <p className=' ext-2xl md:text-4xl relative top-20'>Shop the latest laptops, phones, smartwatches,  and accessories  all in one place.</p>
               </div>
               <div className='relative top-30'>
                  <button className='btn rounded-2xl text-[#9538E2]'>Shop Now</button>
               </div>
           </div>
            <div id='banner' className=' w-9/12 mx-auto md:h-120 h-50  relative bottom-35 md:bottom-70'>
                <img className='w-full rounded-2xl h-full' src={image} alt="" />
            </div>
            <div className='flex gap-10 '>
                    <div className=' h-70 border w-3/12'>

                    </div>
                    <div className='border w-full'>
                        <h1 className='text-center font-bold md:text-2xl '>Explore Cutting-Edge Gadgets</h1>
                    </div>
            </div>
        </div>
    );
};

export default Home;