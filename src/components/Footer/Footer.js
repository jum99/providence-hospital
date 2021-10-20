import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="feature">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-3 mt-5">
                                <h5>GET IN TOUCH</h5>
                                <h6 className="mt-4">ADDRESS:</h6>
                                <p className="mt-3">Jindabazar, Sylhet<br /> CNG Stand Opposite Site</p>
                                <h6 className="mt-4">PHONE:</h6>
                                <p className="mt-2">+880178888888</p>
                                <h6 className="mt-4">EMAIL:</h6>
                                <p className="mt-2">providence@gmail.com</p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;