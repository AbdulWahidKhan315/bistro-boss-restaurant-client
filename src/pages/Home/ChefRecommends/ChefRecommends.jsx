import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const ChefRecommends = () => {
    return (
        <div>
            <SectionTitle subHeading={'Should Try'} heading={'chef recommends'}></SectionTitle>
            <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card card-compact bg-base-100  shadow-xl">
                    <figure><img src={slider1} className='h-[300px] w-full object-cover' alt="Shoes" /></figure>
                    <div className="card-body flex justify-center items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken <br />  Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn text-[#BB8506] border-b-4 border-[#BB8506] border-0 hover:bg-black">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100  shadow-xl">
                    <figure><img src={slider2} className='h-[300px] w-full object-cover' alt="Shoes" /></figure>
                    <div className="card-body flex justify-center items-center text-center">
                        <h2 className="card-title">Caeser Pizza</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken <br />  Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn text-[#BB8506] border-b-4 border-[#BB8506] border-0 hover:bg-black">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100  shadow-xl">
                    <figure><img src={slider3} className='h-[300px] w-full object-cover' alt="Shoes" /></figure>
                    <div className="card-body flex justify-center items-center text-center">
                        <h2 className="card-title">Caeser Soup</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken <br />  Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn text-[#BB8506] border-b-4 border-[#BB8506] border-0 hover:bg-black">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommends;