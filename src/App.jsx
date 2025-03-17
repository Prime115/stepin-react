
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import Train from "./pages/Train";
import OurGyms from "./pages/OurGyms";
import Anderstorp from "./pages/Anderstorp";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import "./styles.css";
import "./normalize.css";
function App() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/train" element={<Train/>} />
            <Route path="/ourGyms" element={<OurGyms/>} />
            <Route path="/anderstorp" element={<Anderstorp/>} />
        </Routes>
        <Footer />

    </Router>
    </>
  )
}

export default App;
