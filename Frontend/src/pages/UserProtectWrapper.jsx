import React, {useEffect} from 'react';
import { UserDataContext } from '../context/UserDataContext';
import { useNavigate } from 'react-router-dom';

const UserProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) {
            navigate('/login');
        }
    },[token,navigate]);
    return (
        <div>{children}</div>
     )
}

export default UserProtectWrapper