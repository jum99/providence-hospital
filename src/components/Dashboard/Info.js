import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Info.css'

const Info = ({ info }) => {
    return (
        <>
            <div className="col-md-4 text-white info-card">
                <div className={`d-flex justify-content-center info-container info-${info.background}`}>
                    <div className="mr-3">
                        <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
                    </div>
                    <div>
                        <h5>{info.title}</h5>
                        <h6>{info.description}</h6>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Info;