import { CommentOutlined, DislikeOutlined, HeartOutlined, LikeOutlined, ShareAltOutlined, StarOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import API from '../../../../api'
import './index.css'

export default function Answer(props) {
    const [userInfo, setUserInfo] = useState('')
    useEffect(() => {
        axios.get(`${API}/member/${props.author}`)
             .then((rsp) => {
                //  console.log(rsp.data[0])
                 setUserInfo(rsp.data[0]);
             })
    }, [props.author])
    return (
        <div className="answer-wrapper">
            <div className="answer-header">
                <img src={userInfo.avatar} alt={props.author} className="answer-avatar" />
                <div className="answer-header-content">
                    <div className="answer-author-name">{userInfo.username}</div>
                    <div className="answer-author-description">{userInfo.description}</div>
                </div>
            </div>
            <div className="answer-content" dangerouslySetInnerHTML={{ __html: props.content }}></div>
            <div className="answer-bottom">
                <div>
                    <Button type="text" style={{ marginRight: "5px" }} icon={<LikeOutlined />}>赞同 {props.like}</Button>
                    <Button className="answer-bottom-link-icon" type="link" icon={<DislikeOutlined />}></Button>
                </div>
                <Button className="answer-bottom-link-icon" type="link" icon={<CommentOutlined />}> {props.comment}</Button>
                <Button className="answer-bottom-link-icon" type="link" icon={<ShareAltOutlined />}></Button>
                <Button className="answer-bottom-link-icon" type="link" icon={<StarOutlined />}></Button>
                <Button className="answer-bottom-link-icon" type="link" icon={<HeartOutlined />}></Button>
            </div>
        </div>
    )
}
