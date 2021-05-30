import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function RightAd() {
    return (
        <div className="ad-wrapper">
            <div className="ad-content">
                <Link to="/careers">
                    <img className="ad-cover" src="https://z3.ax1x.com/2021/05/27/2is63t.png" alt="ad-cover" />
                </Link>
                <div className="ad-discription">
                    <div>HelloCode</div>
                    <div>广告</div>
                </div>
            </div>
        </div>
    )
}
