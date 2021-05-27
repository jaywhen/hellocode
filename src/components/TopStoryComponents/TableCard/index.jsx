import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
export default function TableCard() {
    // bug: 重复点击同一个tab id会累加 ‘active’
    const tabActived = 'Active';
    const [tabRecom, setTabRecom] = useState("tabRecom");
    const [tabFollow, setTabFollow] = useState("tabFollow");
    const [tabHot, setTabHot] = useState("tabHotActive");
    const initTab = () => {
        setTabRecom("tabRecom");
        setTabFollow("tabFollow");
        setTabHot("tabHot");
    }
    return (
        <div className="Tablecard-wrapper">
            <div className="Tablecard-item">
                <Link id={tabRecom} to='/recommend' onClick={() => {
                    initTab();
                    setTabRecom(tabRecom+tabActived);
                }}>
                    推荐
                </Link>
            </div>
            <div className="Tablecard-item">
                <Link id={tabFollow} to='/follow' onClick={() => {
                    initTab();
                    setTabFollow(tabFollow+tabActived);
                }}>
                    关注
                </Link>
            </div>
            <div className="Tablecard-item">
                <Link id={tabHot} to='/hot' onClick={() => {
                    initTab();
                    setTabHot(tabHot+tabActived);
                }}>
                    热榜
                </Link>
            </div>
        </div>
    )
}
