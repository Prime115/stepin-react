import React from "react";
import {Link} from "react-router-dom";
class OurGyms extends React.Component {
    render() {
        return (
            <main id="our-gym">
                <div id="Navlist-mobile" className="Navlist">

                    <div className="grid">
                        <Link id="ourGyms" to="/"> VÅRA GYM</Link>
                        <Link id="train" to="/train"> TRÄNA</Link>
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
                            <h1 className="HeaderText">Våra gym</h1>
                        </div>

                    </div>
                </section>
                <section className="ourGyms-sida2">

                    <div className="gymcontainer">
                        <div id="search" className="searchcontainer">
                            <form className="computer-searchgym">
                                <h2>HITTA ANLÄGGNINGEN NÄRMAST DIG</h2>
                                <input type="text" placeholder="Sök via region, stad, postnummer..."/>
                            </form>

                            <div className="allgyms">
                                <div className="gym" id="Anderstorp">
                                    <h3 className="gymheader">Anderstorp</h3>
                                    <div className="cardinfo">
                                        <div className="adress gymkategori">
                                            <h4>Adress</h4>
                                            <p>Gymnasievägen 14C,<br/>
                                                931 57 Skellefteå</p>
                                        </div>
                                        <div className="E-post gymkategori">
                                            <h4>E-post</h4>
                                            <p>Info.anderstorp@stepin.se</p>
                                        </div>
                                        <div className="bemanningstider gymkategori">
                                            <h4>Bemanningstider</h4>
                                            <p>Mån-Fre: 10:00-19:00<br/>
                                                Lördag: &nbsp;&nbsp;09:00-13.00<br/>
                                                Söndag:&nbsp;&nbsp;15:00-20:00
                                            </p>
                                        </div>
                                    </div>

                                    <div className="lasmer">
                                        <button className="orangeButton"
                                                onClick={() => window.location.href='/anderstorp'}>
                                            Läs mer
                                        </button>

                                    </div>
                                    <div className="symbolcontainer">
                                        <div className="klocka gymsymboler">
                                            <span className="fa-solid fa-clock"></span>
                                            <p>Öppet 24/7</p>
                                        </div>
                                        <div className="hantel gymsymboler">
                                            <span className="fa-solid fa-dumbbell"></span>
                                            <p>Gym</p>
                                        </div>
                                        <div className="parkering gymsymboler">
                                            <span className="fa-solid fa-square-parking"></span>
                                            <p>Fri Parkering</p>
                                        </div>
                                        <div className="grouptraining gymsymboler"><span
                                            className="fa-solid fa-user-group"></span>
                                            <p>Gruppträning</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="gym " id="Centrum">
                                    <h3 className="gymheader">Centrum</h3>
                                    <div className="cardinfo">
                                        <div className="adress gymkategori">
                                            <h4>Adress</h4>
                                            <p>Stationsgatan 9,<br/>
                                                931 31 Skellefteå</p>
                                        </div>
                                        <div className="E-post gymkategori">
                                            <h4>E-post</h4>
                                            <p> info.skelleftea@stepin.se</p>
                                        </div>
                                        <div className="bemanningstider gymkategori">
                                            <h4>Bemanningstider</h4>
                                            <p>Mån-Tor: 10:00-18:00<br/>
                                                Fredag: &nbsp;&nbsp;10:00-16:00<br/>
                                                Lördag: &nbsp;&nbsp;10:00-14.00<br/>
                                                Söndag: &nbsp;&nbsp;Obemannat
                                            </p>
                                        </div>
                                    </div>

                                    <div className="lasmer">
                                        <button className="orangeButton" onClick={() => window.location.href='#'}>
                                            Läs mer
                                        </button>
                                    </div>
                                    <div className="symbolcontainer">
                                        <div className="klocka gymsymboler">
                                            <span className="fa-solid fa-clock"></span>
                                            <p>Öppet 24/7</p>
                                        </div>
                                        <div className="hantel gymsymboler">
                                            <span className="fa-solid fa-dumbbell"></span>
                                            <p>Gym</p>
                                        </div>
                                        <div className="parkering gymsymboler">
                                            <span className="fa-solid fa-square-parking"></span>
                                            <p>Fri Parkering</p>
                                        </div>
                                        <div className="grouptraining gymsymboler"><span
                                            className="fa-solid fa-user-group"></span>
                                            <p>Gruppträning</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="gym" id="Bodenarena">

                                    <h3 className="gymheader">Boden Arena</h3>
                                    <div className="cardinfo">
                                        <div className="adress gymkategori">
                                            <h4>Adress</h4>
                                            <p>Komponentvägen 2,<br/>
                                                961 43 Boden</p>
                                        </div>
                                        <div className="E-post gymkategori">
                                            <h4>E-post</h4>
                                            <p>info.boden@stepin.se</p>
                                        </div>
                                        <div className="bemanningstider gymkategori">
                                            <h4>Bemanningstider</h4>
                                            <p>Mån-Tor: 10:00-19:00<br/>
                                                Fredag: &nbsp;&nbsp;10:00-17:00<br/>
                                                Lördag: &nbsp;&nbsp;09:00-13.00<br/>
                                                Söndag: &nbsp;&nbsp;15:00-19:00
                                            </p>
                                        </div>
                                    </div>

                                    <div className="lasmer">
                                        <button className="orangeButton" onClick={() => window.location.href='#'}>
                                            Läs mer
                                        </button>

                                    </div>
                                    <div className="symbolcontainer">
                                        <div className="klocka gymsymboler">
                                            <span className="fa-solid fa-clock"></span>
                                            <p>Öppet 24/7</p>
                                        </div>
                                        <div className="hantel gymsymboler">
                                            <span className="fa-solid fa-dumbbell"></span>
                                            <p>Gym</p>
                                        </div>
                                        <div className="parkering gymsymboler">
                                            <span className="fa-solid fa-square-parking"></span>
                                            <p>Fri Parkering</p>
                                        </div>
                                        <div className="grouptraining gymsymboler"><span
                                            className="fa-solid fa-user-group"></span>
                                            <p>Gruppträning</p>
                                        </div>
                                        <div className="utegym gymsymboler"><span
                                            className="fa-solid fa-weight-hanging"></span>
                                            <p>Utegym</p>
                                        </div>
                                        <div className="padel gymsymboler"><span
                                            className="fa-solid fa-baseball"></span>
                                            <p>Padel</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="gym" id="Bodenwinternet">

                                    <h3 className="gymheader">Boden Winternet</h3>
                                    <div className="cardinfo">
                                        <div className="adress gymkategori">
                                            <h4>Adress</h4>
                                            <p>Intendenturvägen 11,<br/>
                                                961 36 Boden</p>
                                        </div>
                                        <div className="E-post gymkategori">
                                            <h4>E-post</h4>
                                            <p>info.boden@stepin.se</p>
                                        </div>
                                        <div className="bemanningstider gymkategori">
                                            <h4>Bemanningstider</h4>
                                            <p>Måndag 16:30-18:30<br/>
                                                Onsdag: &nbsp;&nbsp;16:30-18.30<br/>
                                                Fredag: &nbsp;&nbsp;16:30-18:30<br/>

                                            </p>
                                        </div>
                                    </div>

                                    <div className="lasmer">
                                        <button className="orangeButton" onClick={() => window.location.href='#'}>
                                            Läs mer
                                        </button>

                                    </div>
                                    <div className="symbolcontainer">
                                        <div className="klocka gymsymboler">
                                            <span className="fa-solid fa-clock"></span>
                                            <p>Öppet 24/7</p>
                                        </div>
                                        <div className="hantel gymsymboler">
                                            <span className="fa-solid fa-dumbbell"></span>
                                            <p>Gym</p>
                                        </div>
                                        <div className="parkering gymsymboler">
                                            <span className="fa-solid fa-square-parking"></span>
                                            <p>Fri Parkering</p>
                                        </div>
                                        <div className="grouptraining gymsymboler"><span
                                            className="fa-solid fa-user-group"></span>
                                            <p>Gruppträning</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="gym" id="Furunäset">

                                    <h3 className="gymheader">Piteå Furunäset</h3>
                                    <div className="cardinfo">
                                        <div className="adress gymkategori">
                                            <h4>Adress</h4>
                                            <p>Furunäsvägen 100,<br/>
                                                941 52 Piteå</p>
                                        </div>
                                        <div className="E-post gymkategori">
                                            <h4>E-post</h4>
                                            <p>info.furunaset@stepin.se</p>
                                        </div>
                                        <div className="bemanningstider gymkategori">
                                            <h4>Bemanningstider</h4>
                                            <p>Mån-Tor: 08:00-17:00 <br/>
                                                Fredag: &nbsp;&nbsp;&nbsp;08:00-11:30<br/>

                                            </p>
                                        </div>
                                    </div>

                                    <div className="lasmer">
                                        <button className="orangeButton" onClick={() => window.location.href='#'}>
                                            Läs mer
                                        </button>

                                    </div>
                                    <div className="symbolcontainer">
                                        <div className="klocka gymsymboler">
                                            <span className="fa-solid fa-clock"></span>
                                            <p>Öppet 24/7</p>
                                        </div>
                                        <div className="hantel gymsymboler">
                                            <span className="fa-solid fa-dumbbell"></span>
                                            <p>Gym</p>
                                        </div>
                                        <div className="parkering gymsymboler">
                                            <span className="fa-solid fa-square-parking"></span>
                                            <p>Fri Parkering</p>
                                        </div>
                                        <div className="grouptraining gymsymboler"><span
                                            className="fa-solid fa-user-group"></span>
                                            <p>Gruppträning</p>
                                        </div>
                                        <div className="sjukgymnast gymsymboler"><span
                                            className="fa-solid fa-user-doctor"></span>
                                            <p>Sjukgymnast</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="gym" id="Backcity">

                                    <h3 className="gymheader">Piteå Backcity</h3>
                                    <div className="cardinfo">
                                        <div className="adress gymkategori">
                                            <h4>Adress</h4>
                                            <p>Fläktgatan 14,<br/>
                                                941 47 Piteå</p>
                                        </div>
                                        <div className="E-post gymkategori">
                                            <h4>E-post</h4>
                                            <p>info.backcity@stepin.se</p>
                                        </div>
                                        <div className="bemanningstider gymkategori">
                                            <h4>Bemanningstider</h4>
                                            <p>Mån-Tor: 11:00-19:00 <br/>
                                                Fredag: &nbsp;&nbsp;11:00-17:00<br/>
                                                Lördag: &nbsp;&nbsp; 08:00-12:00<br/>
                                                Söndag: &nbsp;&nbsp;15:00-19:00<br/>

                                            </p>
                                        </div>
                                    </div>

                                    <div className="lasmer">
                                        <button className="orangeButton" onClick={() => window.location.href='#'}>
                                            Läs mer
                                        </button>

                                    </div>
                                    <div className="symbolcontainer">
                                        <div className="klocka gymsymboler">
                                            <span className="fa-solid fa-clock"></span>
                                            <p>Öppet 24/7</p>
                                        </div>
                                        <div className="hantel gymsymboler">
                                            <span className="fa-solid fa-dumbbell"></span>
                                            <p>Gym</p>
                                        </div>
                                        <div className="parkering gymsymboler">
                                            <span className="fa-solid fa-square-parking"></span>
                                            <p>Fri Parkering</p>
                                        </div>
                                        <div className="grouptraining gymsymboler"><span
                                            className="fa-solid fa-user-group"></span>
                                            <p>Gruppträning</p>
                                        </div>
                                        <div className="utegym gymsymboler"><span className="fa-solid fa-tree"></span>
                                            <p>Utegym</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="gym" id="LyckseleC">

                                    <h3 className="gymheader">Lycksele Centrum</h3>
                                    <div className="cardinfo">
                                        <div className="adress gymkategori">
                                            <h4>Adress</h4>
                                            <p>Grubbgatan 21,<br/>
                                                921 31 Lycksele</p>
                                        </div>
                                        <div className="E-post gymkategori">
                                            <h4>E-post</h4>
                                            <p>info.lycksele@stepin.se</p>
                                        </div>
                                        <div className="bemanningstider gymkategori">
                                            <h4>Bemanningstider</h4>
                                            <p>Måndag: 11:00-19:00 <br/>
                                                Onsdag: 11:00-19:00<br/>
                                                Fredag: &nbsp;&nbsp;12:00-15:30<br/>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="lasmer">
                                        <button className="orangeButton" onClick={() => window.location.href='#'}>
                                            Läs mer
                                        </button>

                                    </div>
                                    <div className="symbolcontainer">
                                        <div className="klocka gymsymboler">
                                            <span className="fa-solid fa-clock"></span>
                                            <p>Öppet 24/7</p>
                                        </div>
                                        <div className="hantel gymsymboler">
                                            <span className="fa-solid fa-dumbbell"></span>
                                            <p>Gym</p>
                                        </div>
                                        <div className="parkering gymsymboler">
                                            <span className="fa-solid fa-square-parking"></span>
                                            <p>Fri Parkering</p>
                                        </div>
                                        <div className="grouptraining gymsymboler"><span
                                            className="fa-solid fa-user-group"></span>
                                            <p>Gruppträning</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="gym" id="Gammelstad">

                                    <h3 className="gymheader">Luleå Gammelstad</h3>
                                    <div className="cardinfo">
                                        <div className="adress gymkategori">
                                            <h4>Adress</h4>
                                            <p>Stadsötorget 9,<br/>
                                                954 31 Luleå</p>
                                        </div>
                                        <div className="E-post gymkategori">
                                            <h4>E-post</h4>
                                            <p>info.gammelstad@stepin.se</p>
                                        </div>
                                        <div className="bemanningstider gymkategori">
                                            <h4>Bemanningstider</h4>
                                            <p>Måndag: 17:30-19:30 <br/>
                                                Onsdag: &nbsp;15:30-18:30<br/>
                                                Fredag: &nbsp;&nbsp;12:00-15:30<br/>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="lasmer">
                                        <button className="orangeButton" onClick={() => window.location.href='#'}>
                                            Läs mer
                                        </button>
                                    </div>
                                    <div className="symbolcontainer">
                                        <div className="klocka gymsymboler">
                                            <span className="fa-solid fa-clock"></span>
                                            <p>Öppet 24/7</p>
                                        </div>
                                        <div className="hantel gymsymboler">
                                            <span className="fa-solid fa-dumbbell"></span>
                                            <p>Gym</p>
                                        </div>
                                        <div className="parkering gymsymboler">
                                            <span className="fa-solid fa-square-parking"></span>
                                            <p>Fri Parkering</p>
                                        </div>


                                    </div>
                                </div>
                                <div className="gym" id="Porsön">

                                    <h3 className="gymheader">Luleå Porsön</h3>
                                    <div className="cardinfo">
                                        <div className="adress gymkategori">
                                            <h4>Adress</h4>
                                            <p>Professorsvägen 7,<br/>
                                                977 51 Luleå</p>
                                        </div>
                                        <div className="E-post gymkategori">
                                            <h4>E-post</h4>
                                            <p>info.porson@stepin.se</p>
                                        </div>
                                        <div className="bemanningstider gymkategori">
                                            <h4>Bemanningstider</h4>
                                            <p>Måndag: 16:00-18:30 <br/>
                                                Onsdag: &nbsp;15:30-18:30<br/>
                                                Fredag: &nbsp;&nbsp;12:00-15:30<br/>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="lasmer">
                                        <button className="orangeButton" onClick={() => window.location.href='#'}>
                                            Läs mer
                                        </button>
                                    </div>
                                    <div className="symbolcontainer">
                                        <div className="klocka gymsymboler">
                                            <span className="fa-solid fa-clock"></span>
                                            <p>Öppet 24/7</p>
                                        </div>
                                        <div className="hantel gymsymboler">
                                            <span className="fa-solid fa-dumbbell"></span>
                                            <p>Gym</p>
                                        </div>
                                        <div className="parkering gymsymboler">
                                            <span className="fa-solid fa-square-parking"></span>
                                            <p>Fri Parkering</p>
                                        </div>


                                    </div>
                                </div>
                                <div className="gym" id="LyckseleN">

                                    <h3 className="gymheader">Lycksele Norrmalm</h3>
                                    <div className="cardinfo">
                                        <div className="adress gymkategori">
                                            <h4>Adress</h4>
                                            <p>Tallvägen 4,<br/>
                                                921 41 Lycksele</p>
                                        </div>
                                        <div className="E-post gymkategori">
                                            <h4>E-post</h4>
                                            <p>info.lycksele@stepin.se</p>
                                        </div>
                                        <div className="bemanningstider gymkategori">
                                            <h4>Bemanningstider</h4>
                                            <p>Tisdag: &nbsp;&nbsp;15:00-18:00<br/>
                                                Torsdag: 15:00-18:00
                                            </p>
                                        </div>
                                    </div>

                                    <div className="lasmer">
                                        <button className="orangeButton" onClick={() => window.location.href='#'}>
                                            Läs mer
                                        </button>

                                    </div>
                                    <div className="symbolcontainer">
                                        <div className="klocka gymsymboler">
                                            <span className="fa-solid fa-clock"></span>
                                            <p>Öppet 24/7</p>
                                        </div>
                                        <div className="hantel gymsymboler">
                                            <span className="fa-solid fa-dumbbell"></span>
                                            <p>Gym</p>
                                        </div>
                                        <div className="parkering gymsymboler">
                                            <span className="fa-solid fa-square-parking"></span>
                                            <p>Fri Parkering</p>

                                        </div>
                                        <div className="grouptraining gymsymboler">
                                            <span className="fa-solid fa-user-group"></span>
                                            <p>Gruppträning</p>
                                        </div>


                                    </div>
                                </div>
                                <div className="gym" id="Björksgatan">

                                    <h3 className="gymheader">Luleå Björksgatan</h3>
                                    <div className="cardinfo">
                                        <div className="adress gymkategori">
                                            <h4>Adress</h4>
                                            <p>Väderleden 43-45,<br/>
                                                976 33 Luleå</p>
                                        </div>
                                        <div className="E-post gymkategori">
                                            <h4>E-post</h4>
                                            <p>info.bjorksgatan@stepin.se</p>
                                        </div>
                                        <div className="bemanningstider gymkategori">
                                            <h4>Bemanningstider</h4>
                                            <p>Tisdag: &nbsp;&nbsp;16:30-18:30<br/>
                                                Torsdag: 16:30-18:30
                                            </p>
                                        </div>
                                    </div>

                                    <div className="lasmer">
                                        <button className="orangeButton" onClick={() => window.location.href='#'}>
                                            Läs mer
                                        </button>

                                    </div>
                                    <div className="symbolcontainer">
                                        <div className="klocka gymsymboler">
                                            <span className="fa-solid fa-clock"></span>
                                            <p>Öppet 24/7</p>
                                        </div>
                                        <div className="hantel gymsymboler">
                                            <span className="fa-solid fa-dumbbell"></span>
                                            <p>Gym</p>
                                        </div>
                                        <div className="parkering gymsymboler">
                                            <span className="fa-solid fa-square-parking"></span>
                                            <p>Fri Parkering</p>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="map">
                            <form className="mobile-searchgym">
                                <h2>HITTA ANLÄGGNINGEN NÄRMAST DIG</h2>
                                <input type="text" placeholder="Sök via region, stad, postnummer..."/>
                            </form>
                            <div id="map">

                            </div>
                        </div>

                    </div>

                </section>


            </main>
        )
    }
}
export default OurGyms;