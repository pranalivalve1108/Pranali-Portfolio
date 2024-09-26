import React from 'react';
import './Skills.css';
import Header from "./Header";

import SkillCard from './SkillCard';
import {skillList} from '../../public/Images/skillsData'
import  SocialIcons from "./SocialIcons";
import HorizontalNavbar from "./HorizontalNavbar";

const Skills = ()=>{
    return( 
        <div className="section-container">
            <Header Heading="My Skills" 
            subHeading="I have the ability to turn business ideas into technical solutions. Here's the tech stack I have worked with! " />

           

            <div className="skill-card-container">
                { skillList.map((skills,i)=>{
                    return(<SkillCard key={i} skillName={skills.skillName} skillUrl={skills.skillUrl} />)
                }) }
            </div>

            <div className="skills-vector-frame">
                <img src="./Images/skills_vector.png" className="skills-vector" alt="skills" />
            </div>

            <SocialIcons/>
            <HorizontalNavbar/>

        </div>
    )
}

export default Skills;