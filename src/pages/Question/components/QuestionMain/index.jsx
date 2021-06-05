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
                 setAnswerList([...rsp.data]);
             });
    }, [questionId]);

    useImperativeHandle(ref, () => ({
        addData: (data) => {
            console.log(data);
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
