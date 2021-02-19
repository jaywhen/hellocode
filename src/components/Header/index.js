import React from "react";
import { Menu } from "antd";
// import { NavLink } from "react-router-dom";
import {DatePicker, Button} from 'antd'
// import 'antd/dist/antd.css';

const Header = () => {
    return(
        <div>
            <Menu mode="horizontal" theme="light">
                <Menu.Item>
                    首页
                </Menu.Item>
                <Menu.Item>
                    问答
                </Menu.Item>
                <Menu.Item>
                    择校
                </Menu.Item>
                <Menu.Item>
                    我
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Header