import { message, Skeleton } from 'antd';
import axios from 'axios'
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import API from '../../../api';
import StoryItem from '../StoryItem';

function StoryList(props, ref) {
    const [storylist, setStoryList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${API}/hot`)
             .then((res) => {
                 setStoryList([...(res.data.reverse())]);
                 setLoading(false);
             });
    }, []);

    useImperativeHandle(ref, () => ({
        addData: (data) => {
            // add new question
            axios.post(`${API}/question`, data)
                 .then((res) => {
                     message.success('问题发布成功!');
                 });
            axios.post(`${API}/hot`, data)
                 .then((res) => {
                     let tmpData = [...storylist];
                     tmpData = [res.data, ...tmpData];
                     setStoryList([...tmpData]);
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
            <Skeleton loading={loading} avatar active> 
                {storys}
            </Skeleton>            
        </div>
    )
}

export default forwardRef(StoryList);
