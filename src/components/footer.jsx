import React from "react";
class Footer extends React.Component {
    render() {
        return (
            <>
                <section id="sida4">
                    <div className="kontaktaOss">
                        <h4 className="appear">FUNDERINGAR?</h4>
                        <h1 className="appear"> KONTAKTA OSS</h1>
                        <button className="orangeButton shadow appear"
                                onClick={() => window.location.href = '#'}>
                            <span className="material-symbols-outlined">east</span>
                        </button>
                    </div>

                </section>
            <footer className="footer">
                <img src="/src/images/Icon.png" alt="bild på step in loggan"/>
                <ul id="list1">
                    <li><h4>KUNDSERVICE</h4></li>
                    <li><a href="">Almänna villkor</a></li>
                    <li><a href="">FAQ </a></li>
                    <li><a href="">Kundservice</a></li>

                </ul>

                <ul id="list2">
                    <li><h4>OM OSS</h4></li>
                    <li><a href=""> Kontakta oss</a></li>
                    <li><a href=""> Lediga tjänster</a></li>
                    <li><a href=""> Öppetider</a></li>
                </ul>
                <ul id="list3">
                    <li><h4>FÖLJ OSS</h4></li>
                    <li className="socials"><a href="https://www.instagram.com/stepinsverige/" target="_blank">
                        <i id="ig" className="fa fa-instagram"> </i>
                    </a>
                        <a href="https://www.facebook.com/stepinsverige/?locale=sv_SE" target="_blank">
                            <i id="fb" className="fa fa-facebook"> </i>
                        </a>
                    </li>
                    <li><h4> Ladda ner vår app</h4></li>
                    <li><a href="https://apps.apple.com/se/app/go-active/id1553273081" className="APP"
                           target="_blank"> Download IOS app</a></li>
                    <li><a href="https://play.google.com/store/apps/details?id=se.brpsystems.mobility&hl=sv&pli=1 "
                           className="APP" target="_blank"> Download Android app</a></li>

                </ul>


            </footer>
            </>
        );
    }
}
export default Footer;