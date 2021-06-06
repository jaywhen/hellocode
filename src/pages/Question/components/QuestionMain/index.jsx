import { message } from 'antd';
import axios from 'axios'
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import API from '../../../../api'
import Answer from '../Answer';
import './index.css'

function QuestionMain(props, ref) {
    const {questionId} = props;
    const [answerList, setAnswerList] = useState([]);
    useEffect(() => {
        axios.get(`${API}/answer?question_id=${questionId}`)
             .then((rsp) => {
                 setAnswerList([...(rsp.data.reverse())]);
             });
    }, [questionId]);

    useImperativeHandle(ref, () => ({
        addData: (data) => {
            // console.log(data);
            axios.post(`${API}/answer`, data)
                 .then((res) => {
                     let tmpData = [...answerList];
                     tmpData.push(res.data);
                     setAnswerList([...tmpData.reverse()]);
                     message.success('回答成功!');
                 });
        }
    }));

    const anwsers = answerList.map((item) => {
        return (
            <div key={item.id}>
                <Answer {...item} />
            </div>
        );
    })

    return (
        <div className="question-main-wrapper">
            {anwsers}
        </div>
    )
}

export default forwardRef(QuestionMain);
