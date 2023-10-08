import { useContext } from "react";
import { UserAuth } from "../../components/auth-provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(UserAuth);
    if(loading){
        <span className="loading loading-infinity loading-lg"></span>
        return;
    }
    if(user){
        return children;
    }
    return (
        <>
            <Navigate to={`/login`}></Navigate>
        </>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;