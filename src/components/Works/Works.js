import React from 'react';
import Cards from "./Cards/Cards";
const dataFilter = [
    {
        name : 'All',
        filter: '.all'
    },
    {
        name : 'Front End',
        filter: '.web'
    },
    {
        name : 'Mobile',
        filter: '.webDev'
    },
    {
        name : 'WordPress',
        filter: '.wordpress'
    }
]

const cardData = [
    {
        id:1,
        name:'Clever Team',
        src:'./images/clever-team.png',
        link:'https://clever-team.com/',
    },
    {
      id: 2,
      name: 'Math Game',
        src: './images/math-game.png',
        link: 'https://clever-team.com/',
    }
]

const Works = () => {
    return (
        <>
            <section id="works">
                <div className="works-img">
                    <div className="overlay">
                        <div className="works-content">
                            <h3 className="mb-3">Works</h3>
                            <div className="text-center works-item">
                                <ul className="portfolio-sorting list-unstyled text-center kayo-taps">
                                    <li className="active mixitup-control-active" data-filter=".all">All</li>
                                    {
                                        dataFilter.map((item, index) => {
                                            return (
                                                <li key={index} className="mixitup-control" data-filter={item.filter}>{item.name}</li>
                                            )
                                        })
                                    }
                                </ul>

                            </div>
                            </div>
                        <div className="container box-mix" id="container">
                            <div className="row">
                        {cardData.map((item, index) => {
                            return (
                                <Cards key={index} name={item.name} src={item.src} link={item.link}/>
                            )
                        })}
                    </div>
                </div>
                        </div>
                    </div>
            </section>

        </>
    );
};

export default Works;
