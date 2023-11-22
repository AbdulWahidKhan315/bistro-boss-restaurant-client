import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin/useAdmin";
import useAuth from "../hooks/useAuth/useAuth";
import Loader from "../components/Loader/Loader";

const AdminRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    const loaction = useLocation();

    if (loading || isAdminLoading) {
        return <Loader></Loader>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: loaction }} replace></Navigate>
};

export default AdminRoutes;