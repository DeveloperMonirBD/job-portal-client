import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    console.log(location)

    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>
    }

    if (user) {
        return children
    }
    
    return <Navigate to="/signIn" state={location?.pathname} />
};

export default PrivetRoute;