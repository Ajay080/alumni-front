import React from 'react'
import On1 from '../Images/Onboarding-header2.avif'
import "./Onboarding.css"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Slider from '../Components/OnboardingSlider'
// import * as React from "react";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <>
    {<Header/>}
    <section className="Onboarding container">
        
        <div className="Onboard-head">
            <div className="Onboard-head-left">
                <div className="Head-Content">
                    <h1> Jobs, Internships & Hiring Challenges</h1>
                    <p>Apply to a plethora of hiring opportunities &
                        work with your dream companies!
                    </p>
                    <div className="Onboard-button"> 
                        <button type="button">Explore</button>
                        <button type="button">Post</button>
                    </div>
                </div>
            </div>
            <div className="Onboard-head-right">
                <img src={On1}/>
            </div>
        </div>

        <div className="Onboarding-jobs">
            <div className="job-head">
                <h2>Jobs</h2>
                <p>Apply for full-time & part-time in-office, work-from-home & hybrid jobs!</p>
            </div>
            <div className="job-cards">
                <Link className="job-card job-full" to="/full-job">Full-Time</Link>
                <a className="job-card  job-office" to="/office-job">In-Office</a>
                <a className="job-card job-virtual" to="/virtual-job">Virtual</a>
            </div>
        </div>
        <br/>
        <div className="Onboarding-internship">
            <div className="internship-head">
                <h2>Internship</h2>
                <p>Apply for full-time & part-time in-office, work-from-home & hybrid Internships!</p>
            </div>
            <div className="internship-cards">
                <a className="job-card intern-paid">Paid</a>
                <a className="job-card  intern-virtual">Virtual</a>
                <a className="job-card intern-certificate">Certificate</a>
            </div>
        </div>
        {<Slider/>}

        
    </section>
    {<Footer/>}
    </>
  )
}

export default Onboarding