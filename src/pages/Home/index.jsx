import React from "react";
import { Redirect } from "react-router-dom";
import Content from "../../components/Content";
import Navigation from "../../components/Navigation";


const Home = () => {
    if(!localStorage.getItem("user")) {
        return <Redirect to="/login" />
    }
    return(
        <div>
            <Navigation />
            <Content />
        </div>
    )
}

export default Home;