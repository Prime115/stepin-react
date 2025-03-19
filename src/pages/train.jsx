import React from "react";
import {Link} from "react-router-dom";
class Train extends React.Component {
    render() {
        return (
            <main id ="trainPage">
                <div id="Navlist-mobile" className="Navlist">

                    <div className="grid">
                        <Link id="våraGym" to="/ourGyms"> VÅRA GYM</Link>
                        <Link id="train" to="/"> TRÄNA</Link>
                        <Link id="företag" to="#"> FÖRETAG</Link>
                        <Link id="abonnemang2" to="#">ABONNEMANG</Link>
                        <Link id="kontakta" to="#">KONTAKT</Link>

                        <button id="bliMedlem" className=" orangeButton"
                                onClick={() => window.location.href = '#'}>
                            BLI MEDLEM
                        </button>
                    </div>

                </div>
                <div id="logga-inRuta" className="logga-inRuta shadow">
                    <form>
                        <input type="email" name="E-post" id="logga-inEpost" placeholder="E-postadress"/>
                        <input type="password" name="password" id="logga-inPass" placeholder="Password"/>
                        <input type="submit" value="Logga in" id="logga-inSubmit"/>
                    </form>
                </div>
                <section id="hero">

                    <div className="heroimage">
                        <div className="dimoverlay"></div>
                        <div className="herotext">
                            <h1 className="HeaderText">TRÄNA</h1>
                        </div>

                    </div>

                </section>
                <section id="trainsida2">

                    <div id="grouptraining-train" className="trainForm">

                        <div className="traintext">
                            <h2>Gruppträning</h2>
                            <h3>Styrka i gemenskap</h3>
                            <p>Hos oss hittar du ett brett utbud av grupptrainpass för alla nivåer. <br/>
                                Från energifyllda Body Pump och Functional Fitness till Les Mills, <br/>
                                spinning, seniorgympa och yoga – vi erbjuder något för alla. <br/> <br/>
                                Oavsett om du vill bygga styrka, förbättra rörligheten <br/>
                                eller hitta ditt inre lugn, finns här ett pass som passar just dig.<br/>
                                Träna i gemenskap, motivera varandra och nå dina mål tillsammans.</p>
                            <div className="facilities-pil">
                                <Link to="/"> 11 Anläggningar har detta</Link>
                                <span className="material-symbols-outlined">east</span>
                            </div>
                        </div>
                        <div className="trainbild">
                            <img src="/src/images/grouptraining.jpg"
                                 alt=" personer efter ett grupptrainpass"/>

                        </div>
                    </div>

                    <div id="gym-train" className="trainForm">

                        <div className="traintext">
                            <h2>Gym</h2>
                            <h3>Träna hårt, se resultat</h3>
                            <p>Vårt gym erbjuder allt du behöver för att ta din träning till nästa nivå.<br/>
                                Med moderna maskiner, fria vikter och öppna ytor kan du anpassa<br/>
                                varje pass efter dina egna mål.<br/><br/>
                                Oavsett om du vill bygga styrka, öka uthålligheten eller förbättra din<br/>
                                teknik,är vi här för att stötta dig på vägen.</p>
                            <div className="facilities-pil">
                                <Link to=""> 11 Anläggningar har detta</Link>
                                <span className="material-symbols-outlined">west</span>
                            </div>
                        </div>
                        <div className="trainbild">
                            <img src="/src/images/gym.jpg"
                                 alt="hantlar med en tjej i bakgrunden"/>

                        </div>
                    </div>

                    <div id="padel-train" className="trainForm">

                        <div className="traintext">
                            <h2>Padel</h2>
                            <h3>Hitta din nya utmaning</h3>
                            <p>Vår padelhall erbjuder den perfekta miljön för både spel och träning.<br/>
                                Med bokningsbara bana kan du finslipa din teknik eller bara ha kul med vänner.<br/>
                                Oavsett om du spelar för att vinna eller bara för att ha roligt, finns här alla<br/>
                                möjligheter att utvecklas och ha kul på samma gång.<br/><br/>

                                Kom och upptäck padel – spelet som håller dig aktiv och motiverad.</p>
                            <div className="facilities-pil">
                                <Link to=""> 1 Anläggning har detta</Link>
                                <span className="material-symbols-outlined">east</span>
                            </div>
                        </div>
                        <div className="trainbild">
                            <img src="/src/images/padel.jpeg"
                                 alt="padelrack"/>

                        </div>
                    </div>

                    <div id="train-online-train" className="trainForm">

                        <div className="traintext">
                            <h2>Träna online</h2>
                            <h3>Träna när och var du vill</h3>
                            <p>Med våra online-pass får du friheten att träna hemma eller på<br/>
                                resande fot.<br/>
                                Välj mellan olika trainForm, från styrka och kondition till yoga<br/>
                                och rörlighet.<br/>
                                Oavsett om du är på jakt efter ett intensivt pass eller något mer<br/>
                                avslappnande, har vi något för alla nivåer och mål. <br/><br/>

                                Träna på dina egna villkor, när det passar dig bäst.</p>
                            <div className="facilities-pil">
                                <Link to=""> Läs mer här</Link>
                                <span className="material-symbols-outlined">west</span>
                            </div>
                        </div>
                        <div className="trainbild">
                            <img src="/src/images/online.jpg"
                                 alt="Bild på ett par blåa skor med två handlar och ett rep runt om"/>

                        </div>
                    </div>

                </section>


            </main>
        );
    }
}
export default Train;