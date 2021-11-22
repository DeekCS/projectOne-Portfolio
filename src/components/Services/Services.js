import React from 'react';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const Card = [
    {
            id: 1,
            title:'Web Design',
            desc:'Re build your website in modern design.'
    },
    {
        id: 2,
        title:'Mobile Application',
        desc:'Re build your Apps in modern design.'
    },
    {
        id: 3,
        title:'Wordpress',
        desc:'Re build your website in modern design.'
    },
]

const Services = () => {
    return (
        <React.Fragment>
            <section id="services">
                <div className="services-img">
                    <div className="overlay" id="overlay-light">
                        <h3>Services</h3>
                        <div className="container-flex">
                            <div className="serv-content">
                                {Card.map((card,index)=>{
                                    return(
                                        <div className="card" key={index.id}>
                                            <div className="box">
                                                <div className="text">{card.title}</div>
                                                <p>{card.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Services;
