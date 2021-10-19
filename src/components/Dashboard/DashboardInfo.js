import React from 'react';
import { faUser, faPlus, faStethoscope } from '@fortawesome/free-solid-svg-icons'
import Info from './Info';

const Data = [
    {
        title: 'Total Patients',
        description: '500',
        icon: faUser,
        background: 'primary'
    },
    {
        title: 'Total Appointments',
        description: '200',
        icon: faPlus,
        background: 'dark'
    },
    {
        title: 'Total Doctors',
        description: '3',
        icon: faStethoscope,
        background: 'primary'
    }
]
const DashboardInfo = () => {
    return (
        <>
            <section className="">
                <div className="w-100 row">
                    {
                        Data.map(info => <Info info={info} key={info.title}></Info>)
                    }
                </div>
            </section>
        </>
    );
};

export default DashboardInfo;