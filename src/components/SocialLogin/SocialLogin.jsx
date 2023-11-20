import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const handleGooglelogin = () => {
        googleSignIn()
            .then((result) => {
                Swal.fire({
                    title: "Login successfully.",
                    showClass: {
                        popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                    },
                    hideClass: {
                        popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                    }
                });
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users',userInfo)
                .then(res => {
                    console.log(res.data)
                })
                navigate(from,{replace: true})
            })
            .catch(err => {
                Swal.fire({
                    title: 'Error!',
                    text: `${err.message}`,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }
    return (
        <div>
            <button onClick={handleGooglelogin} className='btn btn-secondary'><FaGoogle></FaGoogle>Google</button>
        </div>
    );
};

export default SocialLogin;