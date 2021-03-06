import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About';

const AboutDetails = () => {
    return (
        <>

            <Navbar />
            <div className="appointment-banner">
                <div className="appointment-feature">
                    <div className="title">
                        <h1 className="text-center">About</h1>
                    </div>
                    <About />
                </div>

            </div>
            <Footer />
        </>
    );
};

export default AboutDetails;
