import React from "react";
import {Link} from "react-router-dom";
class Home extends React.Component {
    render() {
        return (
            <main id="home">
                <div id="Navlist-mobile" className="Navlist">

                    <div className="grid">
                        <Link id="våraGym" to="/ourGyms"> VÅRA GYM</Link>
                        <Link id="träna" to="/train"> TRÄNA</Link>
                        <Link id="företag" to=""> FÖRETAG</Link>
                        <Link id="abonnemang2" to="">ABONNEMANG</Link>
                        <Link id="kontakta" to="">KONTAKT</Link>

                        <button id="bliMedlem" className=" orangeButton" onClick={() => window.location.href = 'bli-medlem.html'}>
                            BLI MEDLEM
                        </button>
                    </div>

                </div>

                <section id="hero">
                    <video loop="loop"
                           playsInline="playsinline" muted="muted" autoPlay="autoplay">
                        <source src="/videos/stepin.mp4" type="video/mp4"/>
                    </video>

                    <div className="herotext appear">
                        <h1 className="HeaderText">KICKSTARTA DIN TRÄNING <br/>MED VÅR SENASTE KAMPANJ!</h1>
                        <button className="orangeButton" onClick={() => window.location.href = 'bli-medlem.html'}> BLI MEDLEM HÄR!
                        </button>

                    </div>


                </section>
                <section id="sida2">
                    <div className="slogan appear">
                        <h2 className="BlueHeaders"> Norra Sveriges största gymkedja</h2>

                    </div>
                    <div>
                        <ul className="cards">
                            <li id="card1" className="card"><Link to="">
                                <img className="shadow" src="/src/images/abonnemang.jpg" alt="bild på tjej som tränar"/>
                                <div className="cardText">
                                    <h3> VÅRA ABONNEMANG</h3>
                                    <p>HITTA DET SOM<br/>PASSAR DIG BÄST!</p>
                                </div>
                            </Link></li>
                            <li id="card2" className="card"><Link to="">
                                <img className="shadow" src="/src/images/aktuellt.jpg" alt="bild på en Boden Arena"/>
                                <div className="cardText">
                                    <h3>AKTUELLT JUST NU</h3>
                                    <p>SE VAD SOM HÄNDER<br/>PÅ DIN ANLÄGGNING!</p>
                                </div>
                            </Link></li>
                            <li id="card3" className="card"><Link to="/">
                                <img className="shadow" src="/src/images/ourGyms.jpg" alt="bild på backcity"/>
                                <div className="cardText">
                                    <h3> VÅRA GYM</h3>
                                    <p>HITTA GYMMET<br/>NÄRMAST DIG!</p>
                                </div>
                            </Link></li>
                        </ul>
                    </div>
                </section>

                <section id="sida3">
                    <div className="goActive">

                        <div className="items appear">


                            <h2> GO ACTIVE!</h2>
                            <p> Upptäck en smidigare gymupplevelse med vår app–
                                boka pass, följ din träningsstatistik och få personliga träningsprogram direkt i mobilen.
                                Hitta närmaste gym, håll koll på medlemskapet och få exklusiva erbjudanden.
                                <span>Ladda ner idag och ta din träning till nästa nivå!</span>
                            </p>

                            <button className=" orangeButton shadow"
                                    onClick={() => (window.location.pathname ='https://stepin.goactivebooking.com/buy-subscription?web-category=2')}>
                                LADDA NER HÄR
                            </button>
                        </div>

                        <div className="aboutAPP appear">
                            <div id="circle1" className="about">
                                <div className="circle">
                                    <span className="material-symbols-outlined symbol">key</span>
                                </div>
                                <p id="text1">In- och utpassering</p>

                            </div>
                            <div id="circle2" className="about">
                                <div className="circle">
                                    <span className="material-symbols-outlined symbol">calendar_today</span>
                                </div>
                                <p> Boka pass</p>
                            </div>

                            <div id="circle3" className="about">
                                <div className="circle">
                                    <span className="material-symbols-outlined symbol">license</span>
                                </div>
                                <p>Medlemskap</p>
                            </div>

                            <div id="circle4" className="about">
                                <div className="circle">
                                    <span className="material-symbols-outlined symbol">home</span>
                                </div>
                                <p>Anläggningar</p>

                            </div>

                            <div id="circle5" className="about">
                                <div className="circle">
                                    <span className="material-symbols-outlined symbol"> trending_up</span>
                                </div>
                                <p>Träningstatistik</p>
                            </div>
                            <div id="circle6" className="about">
                                <div className="circle">
                                    <span className="material-symbols-outlined symbol">redeem</span>
                                </div>
                                <p>Erbjudanden</p>
                            </div>
                        </div>
                        <div id="appimage">
                            <img src="/src/images/img.png" alt="bild på mobil med goActive appen"/>
                        </div>
                    </div>
                </section>

            </main>
    );
    }
}

export default Home;