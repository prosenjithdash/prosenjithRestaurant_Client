import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    
    if (loading) {
        return <progress className="progress w-56 text-center mt-10"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/logIn' state={{from:location}} replace></Navigate>
};

export default PrivetRoute;