import { Button, Divider, Form, Input, Modal } from 'antd';
import { EditOutlined, NotificationOutlined } from "@ant-design/icons";
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './index.css'
import UserData from './UserData';
import { Link } from 'react-router-dom';

const {TextArea} = Input;
const FormItem = Form.Item;

export default function BasicInfoUserCard(props) {
    const [userInfo, setUserInfo] = useState('');
    const [askQuestion, setAskQuestion] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:3001/userInfo')
             .then((res) => {
                 setUserInfo(res.data);
             })
    }, [])

    const onFinish = (values) => {
        let data = {
            "title": values.title,
            "content": values.content,
            "author": userInfo.name,
            "avatar": userInfo.avatar,
            "tag": "NLP",
            "time": "刚刚"
        }
        props.handleDataTrans(data);
        setAskQuestion(false);
    }

    return (
        <div className="basic-info-wrapper">
            <div className="user-info-bar">
                <Link to="/member/Jaywhen">
                    <img src={userInfo.avatar} className="avatar" alt={userInfo.name} />
                    <span className="userInfo-name">{userInfo.name}</span>
                </Link>
            </div>
            <div className="user-data">
                <UserData data={userInfo.follow} dataName="我的关注" />
                <Divider type="vertical" style={{ width: "0.8px", height: "45px", backgroundColor: "rgb(211, 208, 208)" }} />
                <UserData data={userInfo.topic} dataName="话题收藏" />
                <Divider type="vertical" style={{ width: "0.8px", height: "45px", backgroundColor: "rgb(211, 208, 208)" }} />
                <UserData data={userInfo.answer} dataName="我的回答" />
            </div>
            <div className="new-question">
                <Button onClick={() => setAskQuestion(true)} icon={<EditOutlined />} type="text" style={{ width: "100%" }}>创作新主题</Button>
            </div>
            <div className="user-info-notify">
                <Button icon={<NotificationOutlined />} type="text" style={{ width: "100%" }}>
                    <span className="notify-num">3&nbsp;</span>
                    条未读消息
                </Button>
            </div>
            <Modal
                visible={askQuestion}
                destroyOnClose={true}
                footer={[]}
                onCancel={() => setAskQuestion(false)} >
                <div className="user-card-ask-question-form">
                    <Form 
                        onFinish={onFinish}>
                        <FormItem name="title">
                            <div className="user-card-ask-question-form-header">
                                <img className="avatar" src={userInfo.avatar} alt={userInfo.name} />
                                <Input placeholder="写下你的问题，准确地描述问题更容易得到解答" bordered={false} />
                            </div>
                        </FormItem>
                        <FormItem name="content">
                            <TextArea placeholder="输入问题背景、条件等详细信息（选填）" showCount maxLength={1000} rows={4} />
                        </FormItem>
                        <FormItem>
                            <Button style={{ width: "100%" }} type="primary" htmlType="submit">发布问题</Button>
                        </FormItem>
                    </Form>
                </div>
            </Modal>
        </div>
    )
}
