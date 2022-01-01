import { Skeleton } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import API from '../../../../api';
import Answer from '../../../../pages/Question/components/Answer';

export default function ProfileAnswer(props) {
    let {username} = props.match.params;
    const [answerList, setAnswerList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${API}/answer?author=${username}`)
             .then((rsp) => {
                 setAnswerList([...rsp.data]);
                 setLoading(false);
             })
    }, [username]);


    const anwsers = answerList.map((item) => {
        return (
            <div key={item.id}>
                <Answer {...item} />
            </div>
        );
    })

    return (
        <div>
            <Skeleton loading={loading} avatar active>
                {anwsers}
            </Skeleton>
        </div>
    )
}
