const OrderCart = ({item}) => {
    const {image,name,price,recipe}=item;
    return (
        <div>
            <div className="card card-compact bg-base-100  shadow-xl">
                <figure><img src={image} className='h-[300px] w-full object-cover' alt="Shoes" /></figure>
                <p className="absolute right-2 top-2 bg-slate-800 text-white py-1 px-4 rounded-lg">${price}</p>
                <div className="card-body flex justify-center items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn text-[#BB8506] border-b-4 border-[#BB8506] border-0 hover:bg-black hover:border-black">add to cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OrderCart;