import React from 'react';
// import { Link } from 'react-router-dom';
import './Event.css';
const Event = (props) => {
    const { img, name, description } = props.event;
    return (
        <div className='service-card mb-4'>

            <div class="card pt-2 bottom">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <i class="fas fa-stethoscope icon"></i>
                <div class="card-body">
                    <div className="service-details-image">
                        <img className="w-100" src={img} alt="" />
                    </div>
                    <h5 class="card-title mt-3 text-center font-weight-bold">{name}</h5>
                    <p class="card-text text-center">{description}</p>
                    <button className="details-button d-block mx-auto py-1 px-4 mt-3">See Details</button>
                </div>
            </div>

        </div>
    );
};

export default Event;