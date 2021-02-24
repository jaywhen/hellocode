import React from 'react'
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
export default function Navigation() {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item><NavLink to="/choose">择校</NavLink></Menu.Item>
                <Menu.Item><NavLink to="/me">我</NavLink></Menu.Item>
            </Menu>
        </div>
    )
}
