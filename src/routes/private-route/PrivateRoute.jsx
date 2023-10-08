import { useContext } from "react";
import { UserAuth } from "../../components/auth-provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
    const {user} = useContext(UserAuth);
    return (
        <>
            {
                user ? children : <Navigate to={`/`}></Navigate>
            }
        </>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;