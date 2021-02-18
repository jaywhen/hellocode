import React from "react";
import { Card, Button, Form, Input } from "antd";
import { GithubOutlined, GoogleOutlined, WechatOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./login-form.css";
const LoginForm = () => {
    return(
        // <Card className="innner-card" title="登录" style={{ textAlign: "center" }}>
        <Card className="inner-card"  cover={<span style={{ textAlign: "center", fontFamily: "sans-serif", fontSize: 18, marginTop: 20 }}>登录</span>}>
            <Form>
                <Form.Item>
                    <Input placeholder="手机号或邮箱" />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="密码" />
                </Form.Item>
                <Form.Item>
                    <Button className="login-form-button" type="primary">
                        Login
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
                <hr />
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

export default LoginForm;