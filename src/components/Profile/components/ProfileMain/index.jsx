import { Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { matchPath } from '../../../../util';
import ProfileAnswer from '../ProfileAnswer';
import ProfileAsk from '../ProfileAsk';
import ProfileFollow from '../ProfileFollow';
import './index.css'

const MenuItem = Menu.Item;

function ProfileMain(props) {
    let {username} = props;

    const [pathKey, setPathKey] = useState('answer');
    let {pathname} = props.location;
    useEffect(() => {
        let key = matchPath(pathname);
        setPathKey(key);
    }, [pathname])

    return (
        <div className="profile-main-wrapprt">
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['answer']} selectedKeys={pathKey}>
                <MenuItem key="answer"><Link to={`/member/${username}/answer`}>回答</Link></MenuItem>
                <MenuItem key="asks"><Link to={`/member/${username}/asks`}>提问</Link></MenuItem>
                <MenuItem key="following"><Link to={`/member/${username}/following`}>关注</Link></MenuItem>
            </Menu>
            <Switch>
                <Route path="/member/:username/answer" component={ProfileAnswer} />
                <Route path="/member/:username/asks" component={ProfileAsk} />
                <Route path="/member/:username/following" component={ProfileFollow} />
                <Route path="/member/:username"><Redirect to={`/member/${username}/answer`} /></Route>
            </Switch>
        </div>
    )
}

export default withRouter(ProfileMain);