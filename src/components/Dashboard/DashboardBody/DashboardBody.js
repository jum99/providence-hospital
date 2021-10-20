import React from 'react';

import CalenderPart from '../CalendarPart/CalendarPart';

import DoctorsInfo from '../DoctorsInfo/DoctorsInfo';

import ServiceTime from '../ServiceTime/ServiceTime';

const DashboardBody = () => {
    return (
        <>
            <div className="row ml-2">
                <div className="col-md-4 mt-5">
                    <DoctorsInfo />
                </div>
                <div className="col-md-4 mt-5 ">
                    <CalenderPart />
                </div>
                <div className="col-md-4 mt-5">
                    <ServiceTime />
                </div>
            </div>
        </>
    );
};

export default DashboardBody;