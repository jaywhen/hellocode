import { Tag } from 'antd'
import React from 'react'
import './index.css'

export default function StoryItem(props) {
    return (
        <div className="story-item-wrapper">
            <img src={props.avatar} className="avatar" alt={props.author} />
            <div className="story-question-content">
                <div className="question-content">{props.title}</div>
                <div>
                    <Tag color="geekblue">{props.tag}</Tag>&nbsp;•&nbsp;
                    <span className="question-item-username">{props.author}</span>&nbsp;•&nbsp;
                    <span className="question-item-time">{props.time}</span>
                </div>
            </div>
        </div>
    )
}
