import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import FollowStory from '../FollowStory'
import RecommendStory from '../RecommendStory'
import StoryList from '../StoryList'
import TableCard from '../TableCard'

function TopStoryMainCard(props, ref) {

    let ChildRef = useRef();

    useImperativeHandle(ref, () => ({
        passData: (data) => {
            ChildRef.current.addData(data);
        }
    }))
    
    return (
        <div>
            <div className="TopStory-tableCard">
                <TableCard />
            </div>
            <div className="TopStory-list">
                <Switch>
                    <Route path="/hot" render={() => <StoryList ref={ChildRef} />} />
                    <Route path="/follow" component={FollowStory} />
                    <Route path="/recommend" component={RecommendStory} />
                    <Route path="/"><Redirect to="/hot" /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default forwardRef(TopStoryMainCard);
