import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AcademyItem from '../AcademyItem';
import API from '../../../../api';
import './index.css'
export default function AcademyList() {
    const [academylist, setAcademyList] = useState([]);
    useEffect(() => {
        axios.get(`${API}/academys`)
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
