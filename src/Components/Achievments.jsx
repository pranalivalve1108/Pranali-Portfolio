import React from 'react'
import Header from './Header'
import HorizontalNavbar from './HorizontalNavbar'
import SocialIcons from './SocialIcons'


import {achievements} from '../assets/achievements'


import './Achievments.css'
const Achievments = ()=>{
    return(
        <div className="section-container">
            <Header Heading="My Achievements" 
            subHeading="Here are some notable achievements of mine!" />
            <div className="achievements-main">
                <div className="achievements-list">
                    {
                        achievements.map((achievement,i)=>{
                            return(
                                <div className="achievement-name" key={i}>
                                    <ul>
                                        <li className="achiement-title">
                                            {achievement.achievementName}
                                           <p> <i>{achievement.achievementDate}</i></p>
                                        </li>
                                       

                                    </ul>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
            
            <SocialIcons/>
            <HorizontalNavbar/>
            
        </div>
    )
}

export default Achievments