import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';

const ProtectedRoute = ({ element: Element, ...rest }) => {
    const { currentUser } = useContext(AuthContext);

    return currentUser ? <Element {...rest} /> : <Navigate to="/bon-appetit/login" />;
};

export default ProtectedRoute;
