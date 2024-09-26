import React from 'react';
import { useNavigate } from 'react-router-dom';

import './GoHome.css'


function GoHome(){
    const navigate = useNavigate();

    const navigateToHome=()=>{
        navigate("/");
    };
    
        
        return(
            <div>
            <button className="go-home-btn" onClick={navigateToHome}>
                <img className="home-icon"
                alt="home-icon"
                src="./Images/home_black.png" >
                </img>
            </button>
            </div>
        )
    }


export default GoHome;







        