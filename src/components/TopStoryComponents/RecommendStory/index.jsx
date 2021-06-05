import { CommentOutlined, DislikeOutlined, HeartOutlined, LikeOutlined, ShareAltOutlined, StarOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import API from '../../../api';
import './index.css';
export default function RecommendStory() {
    const [recommend, setRecommend] = useState([]);
    useEffect(() => {
        axios.get(`${API}/recommend`)
             .then((rsp) => {
                 setRecommend([...rsp.data]);
             });
    }, []);
    const recommends = recommend.map((item) => {
        return (
            <div className="recommend-wrapper" key={item.id}>
                <div className="recommend-title">{item.title}</div>
                <span className="recommend-content">{item.author}: </span>
                <span className="recommend-content" dangerouslySetInnerHTML={{ __html: item.content }}></span>
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
            {recommends}
        </div>
    )
}
