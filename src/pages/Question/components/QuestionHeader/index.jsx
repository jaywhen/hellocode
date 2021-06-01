import { Button, Divider, Tag } from 'antd';
import React from 'react';
import './index.css'
export default function QuestionHeader(props) {
    let {content} = props;
    return (
        <div className="question-header-wrapper">
            <div className="question-header-title">{props.title}</div>
            <div className="question-header-content" dangerouslySetInnerHTML={{__html: content}}></div>
            <Divider />
            <div className="question-header-bottom">
                <Tag>{props.tag}</Tag>
                <Button type="primary">回答问题</Button>
            </div>
        </div>
    )
}
