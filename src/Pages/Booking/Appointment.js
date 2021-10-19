import React from 'react';
import AppointmentBanner from '../../components/GetAppointment/AppointmentBanner';
import AppointmentForm from '../../components/GetAppointment/AppointmentForm';
import Headbar from '../../components/Header/Headbar';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';

const Appointment = () => {
    return (
        <>
            <Headbar />
            <Navbar />
            <AppointmentBanner />
            <AppointmentForm />
            <Footer />
        </>
    );
};

export default Appointment;