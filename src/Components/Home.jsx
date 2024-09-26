import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
function Home(){
    return (
            <div className="home-container">
                <div className="header-text">
                    <h1>Hi, I am Pranali Valve</h1>
                    <p>Computer Engineer | Learner | Programmer</p>
                </div>
                <div className="head-btns">
                    <Link to='/about' className="btn btn-white">
                        <p className="btn-text">Know more about me</p>
                    </Link>
                    <Link to='/contact' className="btn btn-transparent">
                        <p className="btn-text">Connect with me</p>
                    </Link>
                </div>
                <div className="splash-image">
                    <img src="./Images/working-women.gif" alt="Animation" className="Home-anime"/>
                </div>
            </div>
    );
};
export default Home;