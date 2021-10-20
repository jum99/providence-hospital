import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";

import { UserContext } from "../../App";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
    const { loggedInUser, setLoggedInUser, user, setUser } = useContext(UserContext);
    const history = useHistory();
    const [screenWidth, setScreenWidth] = useState();

    useEffect(() => {
        setScreenWidth(window.screen.width);
    }, []);

    const logOut = () => {
        setLoggedInUser({})
        setUser({
            isSignedIn: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            success: false,
            error: '',
            newUser: false,
        });
        sessionStorage.removeItem('login')
    }


    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-color px-0">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto mx-5">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/home">
                                <i class="fas fa-home "></i> Home <span class="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/aboutDetails" class="nav-link" href="#">
                                <i class="fas fa-info-circle"></i>About Us
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/serviceDetails" class="nav-link" href="#">
                                <i class="fas fa-info-circle"></i>Our Services
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/doctorsDetails" class="nav-link" href="#">
                                <i class="fas fa-users"></i>Doctors
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/blogDetails" class="nav-link" href="#">
                                <i class="fas fa-blog"></i> Blogs
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/dashboard" class="nav-link" href="#">
                                Dashboard
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/appointment" class="nav-link" href="#">
                                Appointment
                            </Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto mx-5">

                        {
                            JSON.parse(sessionStorage.getItem('login'))?.email ||
                                JSON.parse(sessionStorage.getItem('login'))?.name ?
                                <>
                                    <li class="nav-item">
                                        <p class="nav-link mb-0">
                                            {JSON.parse(sessionStorage.getItem('login'))?.name || JSON.parse(sessionStorage.getItem('login'))?.email?.split("@")[0]}
                                        </p>
                                    </li>

                                    <li class="nav-item">
                                        <Link to='/' onClick={() => logOut()} class="nav-link btn btn-sm btn-danger">
                                            Log Out
                                        </Link>
                                    </li>

                                </>
                                :
                                <li class="nav-item">
                                    <Link to="/login" class="nav-link btn btn-success">
                                        Login
                                    </Link>
                                </li>
                        }

                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
