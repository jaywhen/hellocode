import React from 'react'
import { Route, Switch } from "react-router-dom";
import Academy from '../../pages/Academy';
import TopStory from '../TopStory';
export default function Content() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={TopStory} />
                <Route path="/academy" component={Academy} />
            </Switch>
        </div>
    )
}
