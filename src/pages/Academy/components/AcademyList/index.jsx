import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AcademyItem from '../AcademyItem';
import API from '../../../../api';
import './index.css'
import { Skeleton } from 'antd';
export default function AcademyList() {
    const [academylist, setAcademyList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${API}/academys`)
             .then((res) => {
                 setAcademyList([...res.data]);
                 setLoading(false);
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
            <Skeleton loading={loading} active>
                {academys}
            </Skeleton>
        </div>
    )
}
