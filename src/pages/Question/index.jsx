import axios from 'axios';
import React, { useEffect, useState } from 'react'
import API from '../../api';
import QuestionHeader from './components/QuestionHeader';
import './index.css'

export default function Question(props) {
    let {id} = props.match.params;
    const [questionInfo, setQuestionInfo] = useState('');
    useEffect(() => {
        axios.get(`${API}/question/${id}`)
             .then((rsp) => {
                 setQuestionInfo(rsp.data);
             })
    }, [id]);
    return (
        <div className="question-wrapper">
            <div question-wrapper-inner>
                <QuestionHeader {...questionInfo} />
            </div>
        </div>
    )
}
