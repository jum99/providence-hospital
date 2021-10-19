import React from 'react';
import DashboardBody from '../components/Dashboard/DashboardBody/DashboardBody';
import DashboardInfo from '../components/Dashboard/DashboardInfo';
import Footer from '../components/Footer/Footer';
import Headbar from '../components/Header/Headbar';
import Navbar from '../components/Header/Navbar';

const Dashboard = () => {
    return (
        <>
            <Headbar />
            <Navbar />
            <section>
                <h1 className='text-center my-4'>Dashboard</h1>
                <div className="row justify-content-center">
                    <div className="col-md-10 col-sm-12 col-12">
                        <DashboardInfo />
                        <DashboardBody />
                    </div>

                </div>
            </section>
            <Footer />

        </>
    );
};

export default Dashboard;