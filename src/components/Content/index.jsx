import React from 'react'
import { Route, Switch } from "react-router-dom";
import Choose from '../../pages/Choose';
import Login from '../../pages/Login';
import Me from '../../pages/Me';
export default function Content() {
    return (
        <div>
            <Switch>
                <Route exact path="/choose" component={Choose} />
                <Route exact path="/me" component={Me} />
            </Switch>
        </div>
    )
}
