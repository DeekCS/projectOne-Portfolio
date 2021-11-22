import React from 'react';
// import bannerImg from '../../../images/1f44b.png';

const Banner = () => {
    return (
        <div className="banner" id="home">
            <div className="overlay" id="overlay-light">
                <div className="container">
                    <div className="banner-text">
                        <div className="banner-heading">
                            HI, I AM <img className="wave" src="" alt="" srcSet="" />
                        </div>
                        <div className="banner-sub-heading">Abdulkareem Al-deek</div>
                        <h4 className="kayo-work-description">&nbsp;<span className="kayo-work" />
                            <span className="typed-cursor "/>
                        </h4>
                        <div className="button2 mt-3">
                            <a className=" btn-banner btn1" href="./contact.html"><i
                                className="fa fa-rocket"> </i> Hire Me </a>
                            <a className=" btn-banner btn2"
                               href="https://drive.google.com/uc?export=download&amp;id=1X0SLxdlUedSkrxQ1SdCl3D5ot0Z-kcxa"><i
                                className="fa fa-download"> </i> My Resume </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
