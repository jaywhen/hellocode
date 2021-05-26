import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import FollowStory from '../FollowStory'
import RecommendStory from '../RecommendStory'
import StoryList from '../StoryList'
import TableCard from '../TableCard'

export default function TopStoryMainCard() {
    return (
        <div>
            <div className="TopStory-tableCard">
                <TableCard />
            </div>
            <div className="TopStory-list">
                <Switch>
                    <Route path="/hot" component={StoryList} />
                    <Route path="/follow" component={FollowStory} />
                    <Route path="/recommend" component={RecommendStory} />
                    <Route path="/"><Redirect to="/hot" /></Route>
                </Switch>
            </div>
        </div>
    )
}
