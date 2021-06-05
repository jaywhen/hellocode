import { Button, Divider, Form, Modal, Tag } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BraftEditor  from "braft-editor";
import API from '../../../../api';
import './index.css'

const FormItem = Form.Item;

export default function QuestionHeader(props) {
    let {questionId} = props;
    const [answerQes, setAnswerQes] = useState(false);
    const [question, setQuestion] = useState('');
    const [editorState, setEditorState] = useState(BraftEditor.createEditorState(''));
    useEffect(() => {
        axios.get(`${API}/question/${questionId}`)
             .then((rsp) => {
                 setQuestion(rsp.data);
             });
    }, [questionId]);

    const onFinish = (values) => {
        let data = {
            "question_id": questionId,
            "author": "Jaywhen",
            "content": values.content.toHTML(),
            "like": 0,
            "comment": 0
        }
        props.handleData(data);
        setAnswerQes(false);
    }

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
                <Button type="primary" onClick={() => setAnswerQes(true)}>回答问题</Button>
            </div>
            <Modal
                width="700px"
                visible={answerQes}
                destroyOnClose={true}
                footer={[]}
                onCancel={() => setAnswerQes(false)}
                >
                <div>
                    <Form onFinish={onFinish}>
                        <FormItem name="content">
                            <BraftEditor
                                value={editorState}
                                onChange={(editorState) => setEditorState(editorState)} 
                                />
                        </FormItem>
                        <FormItem>
                            <Button style={{ width: "100%" }} type="primary" htmlType="submit">提交回答</Button>
                        </FormItem>
                    </Form>
                </div>
            </Modal>
        </div>
    )
}
