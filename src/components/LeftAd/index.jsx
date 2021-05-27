import React from 'react'
import './index.css'

export default function LeftAd() {
    return (
        <div className="ad-wrapper">
            <div className="ad-content">
                <a href="http://example.com" target="_blank" rel="noreferrer">
                    <img className="ad-cover" src="https://z3.ax1x.com/2021/05/27/2is63t.png" alt="ad-cover" />
                </a>
                <div className="ad-discription">
                    <div>HelloCode</div>
                    <div>广告</div>
                </div>
            </div>
        </div>
    )
}
