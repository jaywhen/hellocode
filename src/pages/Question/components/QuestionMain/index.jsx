import axios from 'axios'
import React, { useEffect, useState } from 'react'
import API from '../../../../api'
import Answer from '../Answer';
import './index.css'

export default function QuestionMain(props) {
    const {questionId} = props;
    const [answerList, setAnswerList] = useState([]);
    useEffect(() => {
        axios.get(`${API}/answer?question_id=${questionId}`)
             .then((rsp) => {
                 setAnswerList([...rsp.data]);
             });
    }, [questionId]);

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
