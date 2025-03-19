import  {useState} from "react";
import {Link} from "react-router-dom";



const LoggaInRuta = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    };
    return (
        <>

            <header>

                <nav className={ `navboard ${show ? "visa" : ""}`}>
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
                                <button className="logga-in" id="logga-in" onClick={handleShow}>Logga in</button>

                            </li>
                            <li>
                                <button className=" orangeButton" onClick={() => window.location.to = 'bli-medlem.html'}>
                                    BLI MEDLEM
                                </button>
                            </li>
                        </ul>
                    </div>

                </nav>
                <div id="logga-inRuta" className={`logga-inRuta shadow ${show ? "show" : ""}`}>
                    <form>
                        <input type="email" name="E-post" id="logga-inEpost" placeholder="E-postadress"/>
                        <input type="password" name="password" id="logga-inPass" placeholder="Password"/>
                        <input type="submit" value="Logga in" id="logga-inSubmit"/>
                    </form>
                </div>

            </header>
        </>
    )
};

export default LoggaInRuta;