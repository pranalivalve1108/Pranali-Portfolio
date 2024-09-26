import React from 'react'
import './Projects.css'

import Header from "./Header";
import  SocialIcons from "./SocialIcons";
import HorizontalNavbar from "./HorizontalNavbar";
import {projectsData} from '../assets/projectsData'
import ProjectCard from './ProjectCard';


function Projects() {
  return (
    <div className="section-container">
             <Header Heading="My Projects" 
            subHeading="Passionate about new technologies, I keep exploring stuff. Here are some of my personal projects!" />
  
            <div className="project-cards-container">
                    {
                        projectsData.map((project,i)=>{
                            return (<ProjectCard key={i} projectName={project.projectName} 
                                projectDescription={project.projectDescription} 
                                projectUrl={project.projectUrl}
                                projectSkills={project.projectSkills}
                                projectDuration = {project.projectDuration}
                                />)
                        })
                    }
            </div>
            <SocialIcons/>
            <HorizontalNavbar/>
            </div>
  )
}

export default Projects;