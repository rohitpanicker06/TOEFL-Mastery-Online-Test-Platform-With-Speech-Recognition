import { Button } from '@mui/material'
import React from 'react'
import Session from "../../SessionManagement/Session";
import { useNavigate } from 'react-router-dom';

const DropDownProfile=() => {

    let navigate = useNavigate();
    const logoutRoute = () => {
        let path = '/login';
        Session.handleLogout();
        navigate(path);


    }
    return (
        <div className='flex flex-col dropDownProfile'>
            <ul className='flex flex-col gap-4'>
                <p></p>
                <Button onClick={logoutRoute}>Logout</Button>
                
            </ul>
        </div>
    )
}

export default DropDownProfile