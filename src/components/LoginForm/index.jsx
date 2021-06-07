import React from "react";
import { Card, Button, Form, Input, Divider } from "antd";
import { GithubOutlined, GoogleOutlined, WechatOutlined } from "@ant-design/icons";
import sha512 from "crypto-js/sha512";
import "antd/dist/antd.css";
import "./login-form.css";
import { withRouter } from "react-router";
const LoginForm = (props) => {
    const onFinish = (values) => {
        // console.log(props);
        let password = sha512(values.password).toString();
        const data = {
            username: values.username,
            password: password,
        }

        localStorage.setItem("user", data.username);
        console.log(props.history);
        props.history.replace("/");
    }
    return(
        <Card className="inner-card"  cover={<span style={{ textAlign: "center", fontFamily: "sans-serif", fontSize: 18, marginTop: 20 }}>登录</span>}>
            <Form onFinish={onFinish}>
                <Form.Item 
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名！'
                        }
                    ]}>
                    <Input placeholder="手机号或邮箱" />
                </Form.Item>
                <Form.Item  
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码！'
                        }
                    ]}>
                    <Input.Password placeholder="密码" />
                </Form.Item>
                <Form.Item>
                    <Button className="login-form-button" type="primary" htmlType="submit" >
                        Login
                    </Button>
                    Or <a href="http://example.com/">register now!</a>
                </Form.Item>
                <Divider />
                <div className="social-login">
                    <span className="social-text">第三方账号登录</span>
                    <span className="social-button-group">
                        <Button shape="circle" type="text" icon={<GithubOutlined />}></Button>
                        <Button shape="circle" type="text" icon={<WechatOutlined />}></Button>
                        <Button shape="circle" type="text" icon={<GoogleOutlined />}></Button>
                    </span>
                </div>
            </Form>
        </Card>
    );
};

export default withRouter(LoginForm);