import img1 from '../../../assets/home/chef-service.jpg'
const ChefService = () => {
    return (
        <div className='my-16 relative'>
            <img src={img1} alt="" />
            <div className='text-center border  flex flex-col justify-center items-center'>
                <div className=' max-w-screen-lg bg-white absolute top-32 p-12 space-y-4'>
                    <h1 className='text-3xl'>Chef Service</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam amet nulla illo consequuntur ipsa consectetur quisquam id mollitia et voluptate nobis eos minus voluptas explicabo, voluptatum expedita nihil pariatur. Soluta vel eaque neque impedit vero quam repellendus cumque aliquid.</p>
                </div>
            </div>
        </div>
    );
};

export default ChefService;