import React, {useState} from "react";
import '../styles/about.css';
import pbPic from '../assets/images/pbpic.png';
import gaming from '../assets/images/hobbys/gaming.png';
import music from '../assets/images/hobbys/music.png';



const About = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        buttonClicked();
    }

    function buttonClicked(){
        const hover = document.getElementById('hover-container')

        if(!isActive){
            hover.style.visibility = 'visible';
        }else{
            hover.style.visibility = 'hidden';
        }
    }


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
                                <table>
                                    <thead>
                                        <tr>
                                            <th colSpan={2}>Coding/Programming</th>
                                        </tr>
                                    </thead>
                                    <thead>
                                        <tr>    
                                            <th>Kenntnisse</th>
                                            <th>Bewertung</th>
                                        </tr>
                                    </thead>
                                    <tbody>   
                                        <tr>
                                            <td>HTML/CSS</td>
                                            <td>sehr gut</td>
                                        </tr>
                                        <tr>
                                            <td>Python</td>
                                            <td>gut</td>
                                        </tr>
                                        <tr>
                                            <td>C#</td>
                                            <td>Grundkenntnisse</td>
                                        </tr>
                                        <tr>
                                            <td>MySQL/MariaDB</td>
                                            <td>gut</td>
                                        </tr>
                                        <tr>
                                            <td>JavaScript</td>
                                            <td>Grundkenntnisse</td>
                                        </tr>
                                        <tr>
                                            <td>JSON</td>
                                            <td>Grundkenntnisse</td>
                                        </tr>
                                    </tbody>
                                    <thead>
                                        <tr>
                                            <th colSpan={2}>Sprachen</th>
                                        </tr>
                                    </thead>
                                    <thead>
                                        <tr>    
                                            <th>Kenntnisse</th>
                                            <th>Bewertung</th>
                                        </tr>
                                    </thead>
                                    <tbody>   
                                        <tr>
                                            <td>Deutsch</td>
                                            <td>Muttersprache</td>
                                        </tr>
                                        <tr>
                                            <td>Englisch</td>
                                            <td>gut</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circle-container">
                    <div className="circle-container-top">
                        <button className={`button-hobbys ${isActive ? "button-hobbys-active" : "button-hobbys"}`}
                        onClick={handleClick} id="button-top">
                                <p className={`hobby-text ${isActive ? "hobby-text-active" : ""}`}>
                                    For <br/> Hobbys, <br/> click <br/> me!
                                </p>
                        </button> 
                    </div>
                    <div className="circle-container-bot">
                        <div className="hobby-img">
                            <div className="hover-container" id="hover-container">
                                <div className="gaming">
                                    <img src={gaming} alt="gaming"/>
                                    <p className="tooltip">Gaming</p>
                                </div>
                                <div className="music">   
                                    <img src={music} alt="music headphones"/>
                                    <p className="tooltip">Musik hören</p>
                                </div>
                            </div>                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;   