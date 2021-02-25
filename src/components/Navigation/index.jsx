import React from 'react'
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import "./navigation.css"

const MenuItem = Menu.Item;

export default function Navigation() {
    return (
        <div>
            <Menu className="Nav" mode="horizontal" >
                <MenuItem><NavLink to="/all">HelloCode</NavLink></MenuItem>
                <MenuItem><NavLink to="/choose">择校</NavLink></MenuItem>
                <MenuItem><NavLink to="/me">我</NavLink></MenuItem>
            </Menu>
        </div>
    )
}
