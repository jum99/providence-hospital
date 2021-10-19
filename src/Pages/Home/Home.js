import React from 'react';
import About from '../../components/About/About';
import Blog from '../../components/Blog/Blog';
import Doctors from '../../components/Doctors/Doctors';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Header/Banner';
import Headbar from '../../components/Header/Headbar';
import Navbar from '../../components/Header/Navbar';
import MakeAppointment from '../../components/MakeAppointment/MakeAppointment';
import Services from '../../components/Services/Service';

const Home = () => {
    return (
        <>
            <Headbar />
            <Navbar />
            <Banner />
            <About />
            <Services />
            <Doctors />
            <MakeAppointment />
            <Blog />
            <Footer />
        </>
    );
};

export default Home;