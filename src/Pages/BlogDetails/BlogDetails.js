import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import Blog from '../../components/Blog/Blog';

const BlogDetails = () => {
    return (
        <>

            <Navbar />
            <Blog />
            <div className="appointment-banner">
                <div className="appointment-feature">
                    <div className="title">
                        <h1 className="">Blog</h1>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default BlogDetails;