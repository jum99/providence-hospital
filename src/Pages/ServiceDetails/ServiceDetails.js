import React from 'react';
import Footer from '../../components/Footer/Footer';
import Headbar from '../../components/Header/Headbar';
import Navbar from '../../components/Header/Navbar';
import Services from '../../components/Services/Service';

const ServiceDetails = () => {
    return (
        <>
            <Headbar />
            <Navbar />
            <div className="appointment-banner">
                <div className="appointment-feature">
                    <div className="title">
                        <h1 className="">Services</h1>
                    </div>
                </div>
            </div>
            <Services />
            <Footer />
        </>
    );
};

export default ServiceDetails;