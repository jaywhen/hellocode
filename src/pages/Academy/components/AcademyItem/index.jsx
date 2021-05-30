import { Button, Tag } from 'antd'
import React from 'react'
import './index.css'

export default function AcademyItem(props) {
    const tags = props.tag.map((item) => {
        return (
            <Tag color="purple" key={item}>{item}</Tag>
        );
    })
    return (
        <div className="academy-item-wrapper">
            <div className="academy-content">
                <img src={props.logo} className="academy-avatar" alt={props.name_zh} />
                <div className="academy-brief">
                    <span className="academy-brief-name">{props.name_zh}&nbsp;</span>
                    <div className="academy-brief-tag">
                        {tags}
                    </div>
                </div>
                <div className="goto-homepage">
                    <a href={props.home_page} target="_blank" rel="noreferrer">
                        <Button type="text" style={{ fontSize: "16px", color: "rgb(34 80 226)" }}>前往官网</Button>
                    </a>
                </div>
            </div>
        </div>
    )
}
