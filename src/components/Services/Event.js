import React from 'react';
import { Link } from 'react-router-dom';
import './Event.css';
const Event = (props) => {
    const { img, name, description } = props.event;
    return (
        <div className='service-card mb-4'>
            <Link to="/serviceDetailsFull">
                <div class="card bottom h-100">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i class="fas fa-stethoscope icon"></i>
                    <div class="card-body text-dark">
                        <div className="service-details-image">
                            <img className="w-100" src={img} alt="" />
                        </div>
                        <h5 class="card-title text-center font-weight-bold">{name}</h5>
                        <p class="card-text text-center">{description}</p>
                        <button className="main-button d-block mx-auto mb-5">See Details</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Event;