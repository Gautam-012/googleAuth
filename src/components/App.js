import React from 'react';
import Auth from './Auth.js';

const App = () => {
    return(
        <div className='hero' 
        style={{ position: 'fixed',
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "100px",
            height: "100px", }}>
            
            <Auth/>
        </div>
    )
}

export default App;