import {  Route, Switch, BrowserRouter } from "react-router-dom";
import React from 'react'
import Login from "./pages/Login";
import Home from "./pages/Home";
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}
