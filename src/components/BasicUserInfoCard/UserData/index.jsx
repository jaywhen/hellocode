import React from 'react'
import './index.css'
export default function UserData(props) {
    return (
        <div className="user-data-item">
            <div className="user-data-item-data">{props.data}</div>
            <div className="user-data-item-name">{props.dataName}</div>
        </div>
    )
}
