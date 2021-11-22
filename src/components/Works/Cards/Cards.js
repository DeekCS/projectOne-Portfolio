import React from 'react';

const Cards = (props) => {
    return (

                    <div className="col-lg-4 col-md-6 col-12   mix all web" data-aos="fade-up">
                    <div className="card-imG webDev">
                        <img src={props.src} alt="" />
                        {console.log(props.src)}
                        <div className="overlay-hover">
                            <div className="text-hover"><span>{props.name}</span> <br />
                                <a href={props.link} target="_blank">
                                    <i className="fas fa-link"></i> Live Preview</a>
                            </div>
                        </div>
                    </div>
                     </div>

    );
};

export default Cards;
