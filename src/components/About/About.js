import React from 'react';
import './About.css';
import hospital from '../../images/hospital.jpg';
import img1 from '../../images/shape1.png';
import img2 from '../../images/shape2.png';

const About = () => {
    return (
        <div className='about py-5'>
            <div className='about-bg'>
                <img src={img1} alt='about bg' />
                <img src={img2} alt='about bg' />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={hospital} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <p className="banner-semi-title">About Us</p>
                        <h2 className="about-item">Providence Hospital</h2>
                        <p>Providence Hospital was borne to serve a complete and one-stop healthcare solution to the country people.Providence Hospital is formally inaugurated on April 4, 2012 with the promises of quality and effective medical services for all.</p>
                        <p>Providence Hospital is situated at Jindabazar, Sylhet one of the largest private sector healthcare facilities in the Sylhet city. With a capacity to house over 120 patients and established across a total covered area of over 71,500 sft, the hospital has arranged the state of art medical and other equipment to cater quality medical services.

                            Our departments of cardiology, gynaecology, orthopaedic, neurology, internal medical, general & laparoscopic surgery and paediatrics are staffed by the most esteemed doctors in their respective fields.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;