import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Shared/Spinner";

const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
   console.log(loading)
    const location = useLocation()
    if(loading){
        return <Spinner></Spinner>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default InstructorRoute;