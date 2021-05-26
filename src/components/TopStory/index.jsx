import React from 'react'
import TopStoryMainCard from '../TopStoryComponents/TopStoryMainCard'
import './index.css'

export default function TopStory() {

    return (
        <div className="Topstory-wrapper">
            <div className="Topstory-content">
                <div className="Topstory-main">
                    <TopStoryMainCard />
                </div>
                <div className="Topstory-right-bar">
                    right
                </div>
            </div>
        </div>
    )
}
