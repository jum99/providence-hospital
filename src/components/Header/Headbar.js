import React, { useEffect, useState } from "react";
import "./Headbar.css";
import logo from "../../images/logo.png";

const Headbar = () => {
    const [screenWidth, setScreenWidth] = useState();

    useEffect(() => {
        setScreenWidth(window.screen.width);
    }, []);

    return (
        <>

            <div className="row justify-content-center mx-md-5 mx-2 pb-2">
                {screenWidth > 767 && (
                    <div className="col-lg-2 col-md-3 px-0">
                        <img src={logo} className="w-50 d-block mx-auto mx-lg-0" alt="" />
                    </div>
                )}

                <div className="col-md-9 col-lg-10">
                    <div className="p-0 d-flex flex-wrap justify-content-lg-end justify-content-between px-0">
                        <p className="mt-md-4 mt-2 px-md-3 mb-1 text-center header-title">
                            Saturday -
                            Thursday (11:00 AM - 11:30 PM)
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Headbar;
