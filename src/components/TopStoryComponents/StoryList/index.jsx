import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StoryItem from '../StoryItem';

export default function StoryList() {
    const [storylist, setStoryList] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/hot`)
             .then((res) => {
                 setStoryList([...res.data]);
             })
    }, []);

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
