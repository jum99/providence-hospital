import React from 'react';
import Headbar from '../../components/Header/Headbar';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import Blog from '../../components/Blog/Blog';

const BlogDetails = () => {
    return (
        <>
            <Headbar />
            <Navbar />
            <Blog />
            <Footer />
            <div className="appointment-banner">
                <div className="appointment-feature">
                    <div className="title">
                        <h1 className="">Blog</h1>
                    </div>
                </div>

            </div>
            <Blog />
            <Footer />
        </>
    );
};

export default BlogDetails;