import React from 'react'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Header/Navbar';

function NotFound() {
    return (
        <div>

            <Navbar />

            <h1 className='display-4 text-danger my-5 text-center py-5'>404 <br />  Page Not Found </h1>

            <Footer />
        </div>
    )
}

export default NotFound;
