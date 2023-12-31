import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    const onSubmit = async(data) => {
        const imageFile = {image: data.image[0]}
        const res =await axiosPublic.post(image_hosting_api,imageFile,{
            headers: {
                'content-type':'multipart/form-data'
            }
        })
        if(res.data.success){
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu',menuItem);
            if(menuRes.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.recipeName} Added Successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                reset();
            }
        }
        // console.log(res.data);
    }
    return (
        <div>
            <SectionTitle heading={'Add an Item'} subHeading={"What's new?"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input
                            {...register("name", {required: true})}
                            type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
                    </div>

                    <div className="flex gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue='default' {...register("category", {required: true})} className="select select-bordered w-full">
                                <option disabled value='default'>Select a category..</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                {...register("price", {required: true})}
                                type="number" placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Details*</span>
                            </label>
                            <textarea {...register("recipe")} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                        </div>
                    </div>
                    <div className="form-control w-full my-6">
                        <input {...register("image", {required: true})} type="file" className="file-input file-input-secondary w-full max-w-xs" />
                    </div>
                        <button className="btn bg-gradient-to-r from-orange-400 to-orange-600">
                            Add Item <FaUtensils></FaUtensils>
                        </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;