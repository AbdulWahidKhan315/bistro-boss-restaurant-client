import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
    return (
        <div className="my-20 bg-fixed featured-item text-white pt-6">
            <SectionTitle subHeading={'Check it out'} heading={'Featured'}></SectionTitle>
            <div className="flex justify-center items-center pb-20 mt-12 px-36 bg-slate-400 bg-opacity-40">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>nov 12, 2023</p>
                    <h4 className="uppercase">Where can i get some?</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus totam cumque adipisci nulla nemo labore voluptatem ut maiores magni maxime recusandae, aliquid commodi voluptas pariatur? Architecto voluptatum quaerat officia ex nemo, animi nesciunt dicta neque saepe laboriosam nobis reprehenderit tempore numquam reiciendis sit velit tenetur dolores quibusdam incidunt odit eos!</p>
                    <button className="btn btn-outline border-b-4 border-0 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;