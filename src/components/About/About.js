import React from 'react';

const About = () => {
    return (
        <React.Fragment>
            <section id="about">
                <div className=" overlay2">
                    <div className="container-flex">
                        <div className="about-img   ">
                            <img src="https://deek.codes/assets/images/about-img.jpg" width="330" height="440" alt="" srcSet="" />
                        </div>
                        <div className="about-img-floid">
                            <img src="https://deek.codes/assets/images/about-img.jpg" width="200" height="440" alt="" srcSet="" />
                        </div>
                        <div className="text-intro ">
                            <h3>HELLO,</h3>
                            <p className="about-text">I am interested in <span
                                style={{fontWeight:'700'}}> web development </span>
                                and computer science I graduated from Al-Balqa' Applied University with a , <span
                                    style={{fontWeight:'700'}}>very good grade </span> in <span style={{fontWeight:'700'}} >
                                Computer Science</span> , I love creating websites, learning new technologies, and
                                sharing my knowledge with others.

                                I have high energy to add, great value to offer, a teamwork spirit, and a passion for
                                website development. I have leadership qualities, control qualities, and abilities for
                                self-learning.

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default About;
