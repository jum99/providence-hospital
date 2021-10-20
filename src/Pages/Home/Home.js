import React from 'react';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Header/Banner';
import Navbar from '../../components/Header/Navbar';
import Services from '../../components/Services/Service';


const Home = () => {
    return (
        <>

            <Navbar />
            <Banner />
            <Services />
            <Footer />
        </>
    );
};

export default Home;