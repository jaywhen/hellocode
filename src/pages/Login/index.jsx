import React from "react";
import Footer from "../../components/Footer";
import LoginForm from "../../components/LoginForm";
import "./login.css";

const Login = () => {
    return(
        <div className="login">
            <LoginForm />
            <Footer />
        </div>
    )
};

export default Login;
