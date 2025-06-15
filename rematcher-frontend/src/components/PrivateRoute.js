import React, { Children } from "react";
import {Navigate} from 'react-router-dom';

const PrivateRoute=({children})=>{
    const token=localStorage.getItem('authToken');
    return token ? children:<Navigate to="/admin/login" />;
};
export default PrivateRoute;