import React from 'react';
import Headbar from '../../components/Header/Headbar';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import Doctors from '../../components/Doctors/Doctors';

const DoctorsDetails = () => {
    return (
        <>
            <Headbar />
            <Navbar />
            <Doctors />
            <Footer />
        </>
    );
};

export default DoctorsDetails;