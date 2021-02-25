import React from 'react'
import { List, Avatar,  } from "antd";
import "./qestion-list.css"

// 问答流 组件
export default function QestionList(props) {
    // fetch data
    const listData = [];
    for (let i = 0; i < 23; i++) {
        listData.push({
            href: 'https://ant.design',
            title: `问题 ${i}`,
            avatar: 'https://cdn.v2ex.com/avatar/9a00/3ef6/483443_large.png?m=1603358072',
            description:
            '关于华东理工大学',
            content:
            '能否简述一下华东理工大学计算机科学专业的情况？',
        });
    }

    return (
        <div>
            <div className="qes-container">
                <List
                    className="qes-item"
                    itemLayout="vertical"
                    size="large"
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}
