import { Divider } from 'antd'
import React from 'react'
import './index.css'
export default function About() {
    return (
        <div className="about-wrapper">
            <div className="about-content">
                <h1 className="about-content-title">关于 HelloCode</h1>
                <div className="about-info">
                    <div className="about-info-intro">
                        HelloCode 是计算机考研人的社区。
                    </div>
                    <div>
                        为了保持这里的良好氛围，HelloCode 有自己的明确规则：
                    </div>
                    <ul>
                        <li>这里尊重原创</li>
                        <li>这里绝对不会全文转载任何文章，而只会以链接方式分享</li>
                        <li>这里绝对不会有任何教人如何钻空子的讨论</li>
                        <li>这里感激和崇尚美的事物</li>
                        <li>这里禁止发布人身攻击、仇恨、暴力、侮辱性的言辞、暴露他人隐私的“人肉贴”</li>
                        <li>当你在网上发帖时，请考虑到你所做的一切，会受到你所在地区法律的管辖</li>
                    </ul>
                    <div>为了获得访问 HelloCode 的最佳体验，我们推荐使用&nbsp;
                        <a href="https://www.google.com/chrome/" target="_blank" rel="noreferrer">Google Chrome</a>&nbsp;或&nbsp; 
                        <a href="https://www.mozilla.org/zh-CN/firefox/new/" target="_blank" rel="noreferrer">Mozilla Firefox</a> 浏览器。
                    </div>
                    <div>HelloCode 使用的主要技术框架及相关工具:</div>
                    <ul>
                        <li>ReactJS</li>
                        <li>Ant Design</li>
                        <li>json-server</li>
                    </ul>
                    <div>欢迎访问我们的 GitHub 来获取更多信息:&nbsp;
                        <a href="https://github.com/jaywhen/hellocode" target="_blank" rel="noreferrer">HelloCode</a>
                    </div>
                    <Divider style={{ backgroundColor: "#ccc" }} />
                    <small className="last-mod">Last Revised 2021-01-28 13:36:51 +08:00</small>
                </div>
            </div>
        </div>
    )
}
