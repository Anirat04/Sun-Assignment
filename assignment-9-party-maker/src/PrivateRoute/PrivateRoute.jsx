import { useContext } from "react";
import { ProviderContext } from "../provider/provider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(ProviderContext)
    if (loading) {
        return <>
            <div className="min-h-screen max-w-[1200px] mx-auto flex justify-center">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        </>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}