import React from "react";
import Header from "../../components/Header";


const Home = (props) => {
    const validate = () => {
        return localStorage.getItem("user") ? true : false;
    }
    return (
        <div>
            {validate() ? <Header /> : props.history.replace("/login")}
        </div>
    )
}

export default Home;