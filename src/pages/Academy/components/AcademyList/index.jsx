import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AcademyItem from '../AcademyItem';
import './index.css'
export default function AcademyList() {
    const [academylist, setAcademyList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/academys')
             .then((res) => {
                 setAcademyList([...res.data]);
             })
    }, [])

    const academys = academylist.map((item) => {
        return (
            <div key={item.college_id}>
                <AcademyItem {...item} />
            </div>
        );
    });
    return (
        <div className="academy-list-wrapper">
            {academys}
        </div>
    )
}
