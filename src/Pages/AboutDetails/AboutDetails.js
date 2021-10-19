import React from 'react';
import Headbar from '../../components/Header/Headbar';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About';

const AboutDetails = () => {
    return (
        <>
            <Headbar />
            <Navbar />
            <About />
            <Footer />
            <div className="appointment-banner">
                <div className="appointment-feature">
                    <div className="title">
                        <h1 className="">About</h1>
                    </div>
                </div>

            </div>
            <About />
            <Footer />
        </>
    );
};

export default AboutDetails;
