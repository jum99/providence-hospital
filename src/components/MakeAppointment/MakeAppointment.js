import React from 'react';
import { Link } from 'react-router-dom';
import './MakeAppointment.css';


const MakeAppointment = () => {
    return (
        <>
            <div className="service-form mb-5">
                <div className="container">
                    <p className="text-white text-center text-uppercase mt-5">Need A Doctor?</p>
                    <h4 className="my-4 text-center banner-title">BOOK AN APPOINTMENT</h4>
                    <Link to="/appointment"><button className="main-button d-block mx-auto mb-5">MAKE AN APPOINTMENT</button></Link>
                </div>
            </div>
        </>
    );
};

export default MakeAppointment;