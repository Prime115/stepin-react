import React from "react";
class Anderstorp extends React.Component{
    render(){
        return (
            <main id="anderstorp" className="thegyms">
                <div id="Navlist-mobile" className="Navlist">

                    <div className="grid">
                        <a id="våraGym" href="våra-gym.html"> VÅRA GYM</a>
                        <a id="träna" href="Träna.html"> TRÄNA</a>
                        <a id="företag" href=""> FÖRETAG</a>
                        <a id="abonnemang2" href="">ABONNEMANG</a>
                        <a id="kontakta" href="">KONTAKT</a>

                        <button id="bliMedlem" className=" orangeButton"
                                onClick="window.location.href='bli-medlem.html'">
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
                            <h1 className="HeaderText">Anderstorp</h1>
                        </div>

                    </div>
                    <div className="heroinfo">
                        <div id="adress">
                            <div className="container">
                                <h4>Adress</h4>
                                <p>Gymnasievägen 14C, 931 57 Skellefteå</p>
                            </div>
                        </div>
                        <div id="e-post">
                            <div className="container">
                                <h4>E-post</h4>
                                <p>Info.anderstorp@stepin.se</p>

                            </div>
                        </div>
                        <div id="bemanningstider">
                            <div className="container">
                                <h4>Bemanningstider</h4>
                                <div className="tabell-tider">
                                    <table>
                                        <tr>
                                            <td className="dagar">Mån-Tor</td>
                                            <td>10:00-19:00</td>
                                        </tr>
                                        <tr>
                                            <td className="dagar">Fredag</td>
                                            <td>10:00-17:00</td>
                                        </tr>
                                        <tr>
                                            <td className="dagar">Lördag</td>
                                            <td>09:00-13:00</td>
                                        </tr>
                                        <tr>
                                            <td className="dagar">Söndag</td>
                                            <td>15:00-19:00</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inforuta">
                        <h4> Åldersgränser</h4>
                        <p>Åldersgräns för medlemskap 12 år. Ungdomar under 14 år tränar i sällskap av en vuxen.<br/>
                            <br/>
                            Barn får tas med, vid konstant bevakning för att undvika olyckor</p>
                    </div>

                </section>

                <section id="sida2">

                    <div className="aboutgym">
                        <h2>Om anläggningen</h2>
                        <div className="abouttext">
                            <ul className="erbjudanden">
                                <li>Träna när det passar dig! Vårt gym är öppet 24/7,
                                    så du kan köra ditt pass tidigt på morgonen, sent på kvällen eller mitt i natten.
                                </li>
                                <li>
                                    Ett fullt utrustat gym med moderna styrke- och konditionsmaskiner,
                                    fria vikter och allt du behöver för en effektiv träning.
                                </li>
                                <li>
                                    Inspirerande och energifyllda pass där du tränar tillsammans med andra.
                                    Vi erbjuder ett varierat schema med pass för alla, från kondition och styrka till
                                    rörlighet och balans.
                                </li>

                            </ul>
                            <div className="kolumn2">
                                <p> Hos Step In Anderstorp finns flexibla medlemskap som passar alla,
                                    oavsett om du vill träna regelbundet eller bara då och då.
                                    Är du nyfiken på gymmet? Testa gratis vid ditt första besök! Vill du träna utan
                                    bindning?
                                    Köp ett engångspass för 129 kr och träna när det passar dig.
                                    Välkommen att hitta det upplägg som passar dig bäst!</p>
                            </div>
                            <div className="kolumn3">
                                <p>
                                    Efter träningen kan du koppla av i vår härliga bastu, perfekt för återhämtning och
                                    välmående. <br/> <br/>
                                    Värmen hjälper till att slappna av i musklerna, öka blodcirkulationen och minska
                                    stress.<br/> <br/>
                                    Oavsett om du vill varva ner efter ett intensivt pass eller bara njuta av en stunds
                                    avkoppling,
                                    är bastun en del av upplevelsen hos Step In Anderstorp.
                                </p>

                            </div>

                        </div>

                    </div>


                </section>
                <section id="sida3">
                    <div className="gymvidplace ">
                        <iframe className="gymvideo" src="https://www.youtube.com/embed/9ii0WF_X3Uw?si=qb0wCM9o329-dG9J"
                                title="YouTube video player" allow="accelerometer; autoplay; clipboard-write;
                         encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </section>


                <section id="sida4">
                    <div className="kontaktaOss">
                        <h4 className="appear">FUNDERINGAR?</h4>
                        <h1 className="appear"> KONTAKTA OSS</h1>
                        <button className="orangeButton shadow appear" onClick="window.location.href=''">
                 <span className="material-symbols-outlined">east
                 </span>
                        </button>
                    </div>
                </section>


            </main>
        )
    }
}
export default Anderstorp;