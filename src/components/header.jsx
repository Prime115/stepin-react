import React from "react";
import {Link} from "react-router-dom";
import LoggaIn from './loggaIn.jsx';
class Header extends React.Component {

    render() {
        return (
            <header>

                <nav className="navboard">
                    <div className="lock">
                        <span className="material-symbols-outlined">lock</span>

                    </div>
                    <div id="logo">
                        <Link to="/">
                            <img src="/src/images/Icon.png"
                                 alt="Det här är en bild på Step in loggan"/> </Link>
                    </div>
                    <button className="hamburger">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button>

                    <div className="Navlist">
                        <ul>
                            <li><Link to="/ourGyms"> VÅRA GYM</Link></li>
                            <li><Link to="/train"> TRÄNA</Link></li>
                            <li><Link to=""> FÖRETAG</Link></li>
                            <li>
                                <LoggaIn></LoggaIn>
                            </li>
                            <li>
                                <button className=" orangeButton" onClick={() => window.location.to = 'bli-medlem.html'}>
                                    BLI MEDLEM
                                </button>
                            </li>
                        </ul>
                    </div>

                </nav>

            </header>
        );
    }
}

export default Header;