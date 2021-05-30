import React from 'react'
import { Route, Switch } from "react-router-dom";
import About from '../../pages/About';
import Academy from '../../pages/Academy';
import Careers from '../../pages/Careers';
import Profile from '../Profile';
import TopStory from '../TopStory';
export default function Content() {
    return (
        <div>
            <Switch>
                <Route path="/academy" component={Academy} />
                <Route path="/about" component={About} />
                <Route path="/careers" component={Careers} />
                <Route path="/member/:username" component={Profile} />
                <Route path="/" component={TopStory} />
            </Switch>
        </div>
    )
}
