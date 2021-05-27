import { Button } from 'antd';
import { EditOutlined, NotificationOutlined } from "@ant-design/icons";
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './index.css'
import UserData from './UserData';
import UserDataDivider from './UserDataDivider';
export default function BasicInfoUserCard() {
    const [userInfo, setUserInfo] = useState('');
    useEffect(() => {
        axios.get('http://localhost:3001/userInfo')
             .then((res) => {
                 setUserInfo(res.data);
             })
    }, [])
    return (
        <div className="basic-info-wrapper">
            <div className="user-info-bar">
                <img src={userInfo.avatar} className="avatar" alt={userInfo.name} />
                <span className="userInfo-name">{userInfo.name}</span>
            </div>
            <div className="user-data">
                <UserData data={userInfo.follow} dataName="我的关注" />
                <UserDataDivider />
                <UserData data={userInfo.topic} dataName="话题收藏" />
                <UserDataDivider />
                <UserData data={userInfo.answer} dataName="我的回答" />
            </div>
            <div className="new-question">
                <Button icon={<EditOutlined />} type="text" style={{ width: "100%" }}>创作新主题</Button>
            </div>
            <div className="user-info-notify">
                <Button icon={<NotificationOutlined />} type="text" style={{ width: "100%" }}>
                    <span className="notify-num">3&nbsp;</span>
                    条未读消息
                </Button>
            </div>
        </div>
    )
}
