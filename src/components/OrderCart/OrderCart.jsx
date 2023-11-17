import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import useCart from "../../hooks/useCart/useCart";

const OrderCart = ({ item }) => {
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const { image, name, price, recipe, _id } = item;

    const handleAddToCart = () => {
        if (user && user.email) {
            //send cart items into db
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} Added to your Cart!`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
        } else {
            Swal.fire({
                title: "Your are not Logged In",
                text: "Please login to add to cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div>
            <div className="card card-compact bg-base-100  shadow-xl">
                <figure><img src={image} className='h-[300px] w-full object-cover' alt="Shoes" /></figure>
                <p className="absolute right-2 top-2 bg-slate-800 text-white py-1 px-4 rounded-lg">${price}</p>
                <div className="card-body flex justify-center items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button
                            onClick={handleAddToCart}
                            className="btn text-[#BB8506] border-b-4 border-[#BB8506] border-0 hover:bg-black hover:border-black">add to cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OrderCart;