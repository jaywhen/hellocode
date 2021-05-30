import { Image } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './index.css'

export default function Profile(props) {
    let {username} = props.match.params;
    const [userInfo, setUserInfo] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:3001/member/${username}`)
             .then((rsp) => {
                 setUserInfo(rsp.data[0]);
             });
    }, [username]);

    return (
        <div className="user-profile-wrapper">
            <div className="student-card">
                <div className="ProfileHeader-userCover">
                    { 
                        userInfo.cover === null ? 
                        <div className="UserCover-colorBlock"></div> : 
                        <Image 
                            src={userInfo.cover}
                            alt="用户封面"
                        />
                    }
                </div>
                <div className="ProfileHeader-wrapper">
                    <div className="ProfileHeader-main">
                        <div className="UserAvatar">
                            <Image
                                src={userInfo.avatar}
                                alt="用户头像"
                                width="160px"
                            />
                        </div>
                        <div className="ProfileHeader-content">
                            <div className="ProfileHeader-contentHead">
                                <h1 className="ProfileHeader-title">
                                    <span className="ProfileHeader-name">{userInfo.username}</span>
                                    <span className="ProfileHeader-headline">{userInfo.description}</span>
                                </h1>
                                
                            </div>
                            <div className="ProfileHeader-contentBody">
                                <div className="ProfileHeader-info">
                                    <div className="ProfileHeader-infoItem">
                                        <span className="ProfileHeader-detailLabel">毕业院校: </span>
                                        <span className="ProfileHeader-detailValue">{userInfo.university}</span>
                                    </div>
                                    <div className="ProfileHeader-infoItem">
                                        <span className="ProfileHeader-detailLabel">居住地: </span>
                                        <span className="ProfileHeader-detailValue">{userInfo.address}</span>
                                    </div>
                                    <div className="ProfileHeader-infoItem">
                                        <span className="ProfileHeader-detailLabel">Email: </span>
                                        <span className="ProfileHeader-detailValue">{userInfo.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
