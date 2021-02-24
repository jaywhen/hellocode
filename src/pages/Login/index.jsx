import React from "react";
import { Redirect } from "react-router-dom";
import Footer from "../../components/Footer";
import LoginForm from "../../components/LoginForm";
import "./login.css";

const Login = (props) => {
    if(localStorage.getItem("user")) {
        return <Redirect to="/" />
    }
    return(
        <div className="login">
            <LoginForm history={ props.history } />
            <Footer />
        </div>
    )
};

export default Login;
