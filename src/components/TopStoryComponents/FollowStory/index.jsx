import { CommentOutlined, DislikeOutlined, HeartOutlined, LikeOutlined, ShareAltOutlined, StarOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API from '../../../api';
import './index.css';

export default function FollowStory() {
    const [follow, setFollow] = useState([]);
    useEffect(() => {
        axios.get(`${API}/follow`)
             .then((rsp) => {
                 setFollow([...rsp.data]);
             });
    }, []);
    const follows = follow.map((item) => {
        return (
            <div key={item.id} className="follow-wrapper">
                <div className="follow-tip">{`${item.author}回答了问题 · ${item.time} 小时前`}</div>
                <div className="follow-title">{item.title}</div>
                <div className="follow-content" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                <div className="answer-bottom">
                    <div>
                        <Button type="text" style={{ marginRight: "5px" }} icon={<LikeOutlined />}>赞同 {item.like}</Button>
                        <Button className="answer-bottom-link-icon" type="link" icon={<DislikeOutlined />}></Button>
                    </div>
                    <Button className="answer-bottom-link-icon" type="link" icon={<CommentOutlined />}> {item.comment}</Button>
                    <Button className="answer-bottom-link-icon" type="link" icon={<ShareAltOutlined />}></Button>
                    <Button className="answer-bottom-link-icon" type="link" icon={<StarOutlined />}></Button>
                    <Button className="answer-bottom-link-icon" type="link" icon={<HeartOutlined />}></Button>
                </div>
            </div>
        );
    });
    return (
        <div>
            {follows}
        </div>
    )
}
