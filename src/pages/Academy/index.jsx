import React from 'react'
import AcademyList from './components/AcademyList'
import './index.css'

export default function Academy() {
    return (
        <div className="academy-wrapper">
            <div className="academy-content">
                <AcademyList />
            </div>
        </div>
    )
}