import { Button, Skeleton } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import API from '../../../../api';
import './index.css'

export default function ProfileFollow(props) {
    let {username} = props.match.params;
    const [followList, setFollowList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${API}/jaywhen_follow`)
             .then((rsp) => {
                 setFollowList([...rsp.data]);
                 setLoading(false);
             });
    }, [username]);
    const follows = followList.map((item) => {
        return (
            <div key={item.id} className="follow-item-wrapper">
                <div className="follow-item-content">
                    <img src={item.avatar} alt={item.usernam} className="follow-item-img" />
                    <div className="follow-item-userinfo">
                        <div className="follow-item-username">{item.username}</div>
                        <div className="follow-item-description">{item.description}</div>
                    </div>
                </div>
                <div className="follow-item-action">
                    <Button type="primary">已关注</Button>
                </div>
            </div>
        );
    })
    return (
        <div>
            <Skeleton loading={loading} avatar active>
                {follows}
            </Skeleton>
        </div>
    )
}
