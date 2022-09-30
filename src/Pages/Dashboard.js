import React from 'react';
import DashboardBody from '../components/Dashboard/DashboardBody/DashboardBody';
import DashboardInfo from '../components/Dashboard/DashboardInfo';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <>
            <section>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-10 col-sm-12 col-12">
                        <DashboardInfo />
                        <DashboardBody />
                    </div>

                </div>
            </section>

        </>
    );
};

export default Dashboard;