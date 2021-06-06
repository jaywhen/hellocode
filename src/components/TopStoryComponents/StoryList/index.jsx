import { message } from 'antd';
import axios from 'axios'
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import StoryItem from '../StoryItem';

function StoryList(props, ref) {
    const [storylist, setStoryList] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/hot`)
             .then((res) => {
                 setStoryList([...(res.data.reverse())]);
             });
    }, []);

    useImperativeHandle(ref, () => ({
        addData: (data) => {
            // add new question
            axios.post(`http://localhost:3001/question`, data)
                 .then((res) => {
                     message.success('问题发布成功!');
                 });
            axios.post(`http://localhost:3001/hot`, data)
                 .then((res) => {
                     let tmpData = [...storylist];
                     tmpData.push(res.data);
                     setStoryList([...tmpData.reverse()]);
                 });
        }
    }));

    const storys = storylist.map((item) => {
        return (
            <div key={item.id}>
                <StoryItem {...item} />
            </div>
        )
    })

    return (
        <div>
            { storys }
        </div>
    )
}

export default forwardRef(StoryList);
