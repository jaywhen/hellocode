import React, { useEffect, useState } from 'react'
import { List, Avatar } from "antd";
import axios from "axios";
import "./choose-list.css"

export default function ChooseList() {
    const [collegeData, setCollegeData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/college/findAll')
             .then((response) => {
                 setCollegeData(response.data)
             })
             .catch((error) => {
                 console.log(error)
             })
    }, [])
    
    return (
        <div>
            <div className="college-container">
                <List 
                    className="college-item"
                    itemLayout="vertical"
                    size="large"
                    dataSource={ collegeData }
                    renderItem={item => (
                        <List.Item
                            key={item.collegeId}
                        >
                            <List.Item.Meta
                                avatar={ <Avatar src={ item.logo } /> }
                                title={ <a href={ item.homePage } target="_blank" rel="noreferrer">{ item.nameZh }</a> }
                                description={item.address}
                            />

                        </List.Item>
                    )}
                />            
            </div>
        </div>     
    )
}
