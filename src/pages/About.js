import React from "react";
import pbPic from '../assets/images/pbpic.png';

const About = () => {
    return( 
        <div className="about">
            <div className="about-container">
                <div className="about-card-container">
                    <div className="about-card">
                        <div className="about-card-inside">
                            <div className="card-head">
                                <div className="card-pic">
                                    <img className="pbPic" src={pbPic} alt="profilpic"></img>
                                </div>
                                <div className="card-name">
                                    Name: Kai-Uwe<br/>
                                    Herkunft: NRW/Deutschland<br/>
                                    Alter: 35 Jahre<br/>
                                    Infotext....
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="card-body-left">

                                </div>
                                <div className="card-body-right">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circle-container">
                    <div className="circle-border">
                        <div className="circle">
                                <div className="circle-text"> Hover me! </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;   