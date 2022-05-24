import React from 'react';
import Login from './Login';
import Logout from './Logout';
import { useAuth } from './hooks/useAuth';

const Auth=()=>{
    
    const auth =useAuth();
    if(auth.auth)
    return(
        <div className='auth'>
            <Logout/>
        </div>
    )

    return(
        <div className='auth'> 
            <Login/>
        </div>
    )
}

export default Auth;
