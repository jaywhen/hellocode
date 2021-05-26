import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
export default function TableCard() {
    return (
        <div className="Tablecard-wrapper">
            <div className="Tablecard-item">
                <Link className="Tablecard-item-link" to='/recommend'>
                    推荐
                </Link>
            </div>
            <div className="Tablecard-item">
                <Link className="Tablecard-item-link" to='/follow'>
                    关注
                </Link>
            </div>
            <div className="Tablecard-item">
                <Link className="Tablecard-item-link" to='/hot'>
                    热榜
                </Link>
            </div>
        </div>
    )
}
