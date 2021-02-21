import React from "react";
import Footer from "../../components/Footer";
import LoginForm from "../../components/LoginForm";
import "./login.css";

const Login = (props) => {
    return(
        <div className="login">
            <LoginForm history={props.history} />
            <Footer />
        </div>
    )
};

export default Login;
