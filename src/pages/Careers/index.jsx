import { Divider } from 'antd'
import React from 'react'
import './index.css'

export default function Careers() {
    return (
        <div className="careers-wrapper">
            <div className="careers-content">
                <h1>加入 HelloCode！</h1>
                <div className="careers-introduce-hc">
                    HelloCode 是一个充满活力的计算机考研社区，我们希望为每一个考研人提供一个更好的考研信息获取平台。
                    <br />
                    <strong>简历投递邮箱:</strong> <a href="mailto:jaywhenx@gmail.com">jaywhenx@gmail.com</a>
                </div>
                <h2>招聘职位</h2>
                <Divider style={{ margin: "5px" }} />
                <div className="careers-positions">
                    <div className="position-title">前端工程师（重庆）</div>
                    <div className="position-expect">
                        我们希望你:
                        <ul>
                            <li>系统掌握计算机科学相关基础知识，编程基本功扎实，流利使用至少一种编程语言</li>
                            <li>能阅读英文资料，利用一手信息来解决问题</li>
                            <li>熟悉 React、Vue 或 Angular 等 MVVM 或 MVC 开发框架中的一种</li>
                            <li>热爱开源</li>
                        </ul>
                    </div>
                    <div className="position-title">后端工程师（重庆）</div>
                    <div className="position-expect">
                        我们希望你:
                        <ul>
                            <li>系统掌握计算机科学相关基础知识，编程基本功扎实，流利使用至少一种编程语言</li>
                            <li>能阅读英文资料，利用一手信息来解决问题</li>
                            <li>熟悉 SpringBoot、Gin、Express等后端框架中的一种</li>
                            <li>热爱开源</li>
                        </ul>
                    </div>

                    <div className="position-title">UI/UE 设计师（重庆）</div>
                    <div className="position-expect">
                        我们希望你:
                        <ul>
                            <li>参与完善 HelloCode 的UI/UE 设计</li>
                            <li>独立完成过项目的交互设计</li>
                            <li>配合前端工程师输出整理 HelloCode 前端设计规范和组建库</li>
                        </ul>
                    </div>
                </div> 
            </div>
        </div>
    )
}
