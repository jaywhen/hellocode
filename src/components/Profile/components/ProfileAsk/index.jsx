import axios from 'axios';
import React, { useEffect, useState } from 'react'
import API from '../../../../api';
import './index.css'
export default function ProfileAsk(props) {
    let {username} = props.match.params;
    const [askList, setAskList] = useState([]);
    useEffect(() => {
        axios.get(`${API}/question?author=${username}`)
             .then((rsp) => {
                 setAskList([...rsp.data]);
             });
    }, [username]);

    const asks = askList.map((item) => {
        return (
            <div key={item.id} className="ask-item">
                <div className="ask-item-title">{item.title}</div>
                <span className="ask-description">{item.create_time}</span>&nbsp;•&nbsp;
                <span className="ask-description">{item.answer} 个回答</span>
            </div>
        );
    });
    return (
        <div>
            {asks}
        </div>
    )
}
