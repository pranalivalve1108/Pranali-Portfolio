import Header from "./Header";
import './About.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import  SocialIcons from "./SocialIcons";
import HorizontalNavbar from "./HorizontalNavbar";




function About() {
  return (
    <div className="section-container">
      <Header Heading="About Me"
      subHeading="I am a recent computer engineering graduate with a strong foundation in programming languages, 
            and their functionalities. As a passionate and detail-oriented front-end developer, 
            I have a strong foundation in HTML, CSS, JavaScript, and modern front-end frameworks like React. 
            I am eager to contribute my skills in creating responsive, user-friendly web interfaces. 
            With a keen eye for design and a commitment to clean code, 
            I am enthusiastic about learning and growing in a collaborative team environment. 
            I have worked on multiple projects."/>

            <div className="education-accordian accordian-alignment">
            <Accordion className="accordians" style={{backgroundColor: "#84b4f7"}}>
                    <AccordionSummary className="accordian-summary"
                    expandIcon={<ExpandMoreIcon />}
                    
                    aria-controls="panel1a-content"
                    >
                    <Typography component={'span'} variant={'body2'} className="Accordian-heading" >
                                <h3>My Educational Details</h3>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography component={'span'} variant={'body2'}>
                            <div className="my-details">
                            <h2 className="about-sub-head">
                                Savitribai Phule Pune University (SPPU) :  <i> {' '}Jan’21 - July’23</i>
                            </h2>
                            <p className="about-deatils">
                                Bachelor of Engineering (Computer)	 <br/>		       	           
                                CGPA: <strong>8.88/10 (First Class with Distinction) </strong> <br/>
                            </p>

                            <h2 className="about-sub-head">
                                Matoshri Aasrabai Polytechnic - Maharashtra State Board : <i>  Aug’17 - Nov’20</i>
                            </h2>
                            <p className="about-deatils">
                                Diploma of Computer Engineering	 <br/>		       	           
                                Percentage: <strong>87.43%</strong>  <br/>
                            </p>

                            <h2 className="about-sub-head">
                                Pushpawati Rungta Kanya Vidyalaya - Maharashtra State Board  : <i> Mar’17</i>
                            </h2>
                            <p className="about-deatils">
                                10th 	 <br/>		       	           
                                Percentage: <strong>80%</strong>  <br/>
                            </p>
                        </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
                <div className="education-accordian">            
                <Accordion className="accordians" style={{backgroundColor: "#84b4f7"}}>
                <AccordionSummary className="accordian-summary"
                    expandIcon={<ExpandMoreIcon />}
                    
                    aria-controls="panel1a-content"
                    >
                        <Typography component={'span'} variant={'body2'} className="Accordian-heading">
                        <h3>My Personal Details</h3>
                        </Typography>
                        </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography component={'span'} variant={'body2'}>
                            <div className="my-details personal-details ">
                            <h2 className="about-sub-head ">
                                Name: <i>Pranali Namdev Valve</i>
                            </h2>
                            <h2 className="about-sub-head ">
                                Personal Email: <i>pranalivalve2001@gmail.com</i>
                            </h2>
                            <h2 className="about-sub-head ">
                            Current Address:<i> Nashik, Maharashtra, India - 422003</i>
                            </h2>
                            <h2 className="about-sub-head ">
                                Known Languages: <i>English, Hindi, Marathi</i>
                            </h2>
                            <h2 className="about-sub-head ">
                            Interpersonal Skills: <i>Hard Work, Dedication, Quick learner, Friendly nature</i>
                            </h2>
                        </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <SocialIcons/>

            <HorizontalNavbar/>
                    
            </div>

        

    
  )
}

export default About;













