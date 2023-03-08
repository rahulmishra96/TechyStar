import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Contact from "./Contact";
import Services from "./Services";




import "../Styles/App.scss";
import "../Styles/Header.scss";
import "../Styles/Home.scss";
import "../Styles/footer.scss";
import "../Styles/contact.scss";
import "../Styles/mediaquery.scss";


function App(){
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/services" element={<Services/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}


export default App;