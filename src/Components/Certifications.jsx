import React from 'react';
import Header from './Header';
import HorizontalNavbar from './HorizontalNavbar';
import SocialIcons from './SocialIcons';
import { certificationsInfo } from '../../public/Images/CertificationsInfo';

import './Certifications.css'
import CertificationCard from './CertificationCard';

const Certifications = ()=>{

    return(
        <div className="section-container">
            <Header Heading="My Certifications" 
            subHeading="“An investment in knowledge always pays the best interest.” " />

            <div className="certificate-cards-container">
                    {
                        certificationsInfo.map((certificate,i)=>{
                            return (<CertificationCard key={i} certificationName={certificate.certificationName} 
                                issuedOn={certificate.issuedOn} 
                                issuingOrganization={certificate.issuingOrganization}
                                imageUrl={certificate.imageUrl}
                                credentialUrl={certificate.credentialUrl}/>)
                        })
                    }
            </div>
        <SocialIcons/>
        <HorizontalNavbar/>
    
        </div>
    )
}

export default Certifications;