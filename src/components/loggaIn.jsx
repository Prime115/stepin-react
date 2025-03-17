import {useState} from "react";



const LoggaInRuta = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    };
    return (
        <>
          <button className="logga-in" id="logga-in" onClick={handleShow}>Logga in</button>
            <div id="logga-inRuta" className={`logga-inRuta shadow ${show ? "show" : ""}`}>
                <form>
                    <input type="email" name="E-post" id="logga-inEpost" placeholder="E-postadress"/>
                    <input type="password" name="password" id="logga-inPass" placeholder="Password"/>
                    <input type="submit" value="Logga in" id="logga-inSubmit"/>
                </form>
            </div>
        </>
    )
};

export default LoggaInRuta;