import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="feature">
                    <div className="container">
                        <div className="row row-cols-md-2 row-cols-lg-3 row-cols-sm-1">

                            <div className="col-6 d-flex justify-content-center">
                                <div className=''>
                                    <h3 className='mb-4'>Location and Contact</h3>
                                    <p> <i class="fas fa-map-marker"></i> Zindabazar, Sylhet</p>
                                    <h6> <i class="fas fa-phone-alt"></i> +871-888-88888</h6>

                                </div>
                            </div>
                            <div className="col-6 d-flex justify-content-center">
                                <div>
                                    <h3 className='mb-4'>Departments</h3>
                                    <h6>Medicine</h6>
                                    <h6>Surgery</h6>
                                    <h6>Neurology</h6>
                                </div>
                            </div>
                            <div className="col-6 d-flex justify-content-center">
                                <div>
                                    <h3 className='mb-4'>About Us</h3>
                                    <h6>Opening Hours</h6>
                                    <h6>Our Patients</h6>
                                    <h6>Help&Support</h6>
                                </div>
                            </div>

                        </div>
                        <div>
                            <p className="text-center mt-5">&copy; Providence Hospital | All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Footer;