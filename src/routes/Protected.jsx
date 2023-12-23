import React, { useContext } from 'react';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Protected = ({children}) => {
    const {user}=useContext(AuthContext);
    
    const location = useLocation();
    console.log(user);
    if(user)
        return children;
    return <Navigate state={location.pathname} to={`/login`}></Navigate>

};

export default Protected;