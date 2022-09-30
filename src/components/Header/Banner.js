import React from 'react';
import './Banner.css';
import banner1 from '../../images/banner1.png';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';

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
                        <img src={banner1} class="d-block bg-w" alt="..." />
                        <div class="carousel-caption d-md-block">
                            <h1 className="mb-3" style={{ textTransform: 'uppercase', fontWeight: '700', fontSize: '40px' }}>Get the best <span style={{ color: 'darkblue' }}>Treatment</span> <br /> from our hospital</h1>
                            <p>Our doctors and nurses will take care <br />of you according to your problems.</p>

                        </div>
                    </div>

                    <div class="carousel-item">
                        <img src={banner2} class="d-block bg-w" alt="..." />
                        <div class="carousel-caption d-md-block">
                            <h1 className="mb-3" style={{ textTransform: 'uppercase', fontWeight: '700', fontSize: '40px' }}>Get <span style={{ color: 'darkblue' }}>Trustable</span> and <br /> Friendly Treatment</h1>
                            <p>Our Providence Hospital is a modern center <br />which provides service here.</p>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={banner3} class="d-block bg-w" alt="..." />
                        <div class="carousel-caption d-md-block">
                            <h1 className="mb-3" style={{ textTransform: 'uppercase', fontWeight: '700', fontSize: '40px' }}>Dr. <span style={{ color: 'darkblue' }}>Sukumar</span> Hasan</h1>
                            <p>MBBS, DMU and Children Specialist</p>

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