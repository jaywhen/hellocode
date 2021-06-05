// 13 14 行属性冗余

import React, { useRef } from 'react'
import QuestionHeader from './components/QuestionHeader';
import QuestionMain from './components/QuestionMain';
import './index.css'

export default function Question(props) {
    let {id} = props.match.params;
    let ChildRef = useRef();

    const handleData = (data) => {
        // console.log(data);
        ChildRef.current.addData(data);
    }

    return (
        <div className="question-wrapper">
            <div className="question-wrapper-inner">
                <QuestionHeader questionId={id} handleData={handleData} />
                <QuestionMain questionId={id} ref={ChildRef} />
            </div>
        </div>
    )
}
