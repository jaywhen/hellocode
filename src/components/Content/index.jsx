import React from 'react'
import { Route, Switch } from "react-router-dom";
import Choose from '../../pages/Choose';
import Me from '../../pages/Me';
import All from "../../pages/All";
export default function Content() {
    return (
        <div>
            <Switch>
                <Route exact path="/all" component={All} />
                <Route exact path="/choose" component={Choose} />
                <Route exact path="/me" component={Me} />
            </Switch>
        </div>
    )
}
