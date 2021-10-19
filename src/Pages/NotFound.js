import React from 'react'
import Footer from '../components/Footer/Footer';
import Headbar from '../components/Header/Headbar';
import Navbar from '../components/Header/Navbar';

function NotFound() {
    return (
        <div>
            <Headbar />
            <Navbar />

            <h1 className='display-4 text-danger text-center py-5'>404 <br />  Page Not Found </h1>

            <Footer />
        </div>
    )
}

export default NotFound;
