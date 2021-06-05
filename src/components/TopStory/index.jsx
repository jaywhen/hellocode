import React from 'react'
import BasicInfoUserCard from '../BasicUserInfoCard'
import RightAd from '../RightAd'
import TopStoryMainCard from '../TopStoryComponents/TopStoryMainCard'
import './index.css'

export default function TopStory() {

    const handleDataTrans = (data) => {
        console.log(data);
    }

    return (
        <div className="Topstory-wrapper">
            <div className="Topstory-content">
                <div className="Topstory-main">
                    <TopStoryMainCard />
                </div>
                <div className="Topstory-right-bar">
                    <BasicInfoUserCard handleDataTrans={handleDataTrans} />
                    <RightAd />
                </div>
            </div>
        </div>
    )
}
