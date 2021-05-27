import React from 'react'
import BasicInfoUserCard from '../BasicUserInfoCard'
import LeftAd from '../LeftAd'
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
                    <BasicInfoUserCard />
                    <LeftAd />
                </div>
            </div>
        </div>
    )
}
