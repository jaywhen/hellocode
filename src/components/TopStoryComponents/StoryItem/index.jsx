import { Tag } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function StoryItem(props) {
    return (
        <div className="story-item-wrapper">
            <Link to={`/member/${props.author}`}>
                <img src={props.avatar} className="avatar" alt={props.author} />
            </Link>
            <div className="story-question-content">
                <Link to={`/question/${props.id}`}>
                    <div className="question-content">{props.title}</div>
                </Link>
                <div>
                    <Tag color="geekblue">{props.tag}</Tag>&nbsp;•&nbsp;
                    <Link to={`/member/${props.author}`}>
                        <span className="question-item-username">{props.author}</span>&nbsp;•&nbsp;
                    </Link>
                    <span className="question-item-time">{props.time}</span>
                </div>
            </div>
        </div>
    )
}
