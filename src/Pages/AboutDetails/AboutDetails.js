import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About';

const AboutDetails = () => {
    return (
        <>

            <Navbar />
            <About />
            <div className="appointment-banner">
                <div className="appointment-feature">
                    <div className="title">
                        <h1 className="">About</h1>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default AboutDetails;
