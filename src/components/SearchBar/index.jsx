import React from 'react'
import { Input } from "antd";

const { Search } = Input;
export default function SearchBar() {
    return (
        <div>
            <Search
                placeholder="input search text"
                allowClear
                style={{ width: 200, marginTop: 7 }}
                />   
        </div>
    )
}
