import { Route, Router } from "react-router-dom";
import React from 'react'
import Home from "./pages/Home";
import Login from './pages/Login';
import history from "./history.js";
export default function App() {
  return (
    <div>
      <Router history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Router>
    </div>
  );
}
