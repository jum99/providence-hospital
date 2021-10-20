import React from 'react';
import './Banner.css';
import bg1 from '../../images/bg-1.jpg';
import bg2 from '../../images/bg-2.jpeg';
import bg3 from '../../images/bg-3.jpg';

const Banner = () => {
    return (
        <>

            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={bg1} class="d-block bg-w" alt="..." />
                        <div class="carousel-caption d-md-block">
                            <p className="banner-semi-title">Health Care </p>
                            <h3 className="banner-title">Get Trustable and Friendly Treatment </h3>
                            <p className="text-dark mt-3"> Our Providence Hospital is a modern center <br />which provides service here.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={bg2} class="d-block bg-w" alt="..." />
                        <div class="carousel-caption d-md-block">
                            <p className="banner-semi-title">Services </p>
                            <h3 className="banner-title">Get the best treatment from our hospital</h3>
                            <p className="text-dark mt-3">Our doctors and nurses will take care <br />of you according to your problems.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={bg3} class="d-block bg-w" alt="..." />
                        <div class="carousel-caption d-md-block">
                            <p className="banner-semi-title text-bolder">Providence Hospital</p>
                            <h3 className="banner-title">Dr. Sukumar Hasan</h3>
                            <p className="text-dark mt-3">MBBS, DMU and Children Specialist</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>


        </>
    );
};

export default Banner;