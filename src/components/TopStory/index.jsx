import React, { useRef } from 'react'
import BasicInfoUserCard from '../BasicUserInfoCard'
import RightAd from '../RightAd'
import TopStoryMainCard from '../TopStoryComponents/TopStoryMainCard'
import './index.css'

export default function TopStory() {
    // 子组件 Ref
    let ChildRef = useRef();

    const handleDataTrans = (data) => {
        // 将 data 传给子组件
        ChildRef.current.passData(data);
    }

    return (
        <div className="Topstory-wrapper">
            <div className="Topstory-content">
                <div className="Topstory-main">
                    <TopStoryMainCard ref={ChildRef} />
                </div>
                <div className="Topstory-right-bar">
                    <BasicInfoUserCard handleDataTrans={handleDataTrans} />
                    <RightAd />
                </div>
            </div>
        </div>
    )
}
