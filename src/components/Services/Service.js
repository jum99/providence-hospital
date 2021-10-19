import React, { useEffect, useState } from 'react';
import FakeData from '../../FakeData/FakeData';
import Event from './Event';
import './Service.css';


const Service = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        setServices(FakeData)
    }, [])

    return (
        <>
            <div className="service-form py-5">
                <div className="mx-md-5">
                    <h1 className="about-item mb-5 text-center text-white">আমাদের সেবাসমূহ</h1>
                    <div className="row">

                        {
                            services.map(event => <div className="col-sm-6 col-lg-4"><Event event={event}></Event></div>)
                        }

                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;