import React from "react";
import { Redirect } from "react-router-dom";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import "./home.css"

const Home = () => {
    if(!localStorage.getItem("user")) {
        return <Redirect to="/login" />
    }
    return(
        <div className="main-page">
            <Navigation />
            <Content />
            <Footer />
        </div>
    )
}

export default Home;