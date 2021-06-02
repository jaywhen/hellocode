import { Button, Divider, Tag } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API from '../../../../api';
import './index.css'
export default function QuestionHeader(props) {
    let {questionId} = props;
    const [question, setQuestion] = useState('');
    useEffect(() => {
        axios.get(`${API}/question/${questionId}`)
             .then((rsp) => {
                 setQuestion(rsp.data);
             });
    }, [questionId]);

    return (
        <div className="question-header-wrapper">
            <div className="question-header-top">
                <div className="question-header-top-content">
                    <div className="question-header-title">{question.title}</div>
                    <div className="question-header-content" dangerouslySetInnerHTML={{__html: question.content}}></div>
                </div>
                <div className="question-header-top-avatar">
                    <img src={question.avatar} alt={question.author} className="qustion-header-avatar" />
                </div>
            </div>
            <Divider />
            <div className="question-header-bottom">
                <Tag>{question.tag}</Tag>
                <Button type="primary">回答问题</Button>
            </div>
        </div>
    )
}
