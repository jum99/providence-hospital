
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Headbar from '../../components/Header/Headbar';
import Navbar from '../../components/Header/Navbar';
import LogInForm from './LoginForm';

const LogIn = () => (
    <>
        <Headbar />
        <Navbar />
        <LogInForm />
        <Footer />
    </>
);

export default LogIn;
