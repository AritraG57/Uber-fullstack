import React, {useContext, useEffect, useState} from 'react';
import { UserDataContext } from '../context/UserDataContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';

const UserProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const {user,setUser} = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(!token) {
            navigate('/login');
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers : {
                Authorization : `Bearer ${token}`
            }
        }).then((response) => {
            if(response.status === 200) {
                setUser(response.data);
                setIsLoading(false);
            }
        }).catch ((err) => {
            console.log(err);
            localStorage.removeItem('token');
            navigate('/login');
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token,navigate]);

    if(isLoading) {
        return(<div>
            <Loading></Loading>
        </div>)
    }
    return (
        <div>{children}</div>
     )
}

export default UserProtectWrapper