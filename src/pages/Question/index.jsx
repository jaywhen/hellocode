// 13 14 行属性冗余

import React from 'react'
import QuestionHeader from './components/QuestionHeader';
import QuestionMain from './components/QuestionMain';
import './index.css'

export default function Question(props) {
    let {id} = props.match.params;
    return (
        <div className="question-wrapper">
            <div className="question-wrapper-inner">
                <QuestionHeader questionId={id} />
                <QuestionMain questionId={id} />
            </div>
        </div>
    )
}
