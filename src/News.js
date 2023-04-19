import React, { Component } from "react";
import Navbar from "./Navbar";
import Newscom from "./Newscom";
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";

export default class News extends Component{
    // pageSize = 9;
    render(){
    return(
        <>
        <Router>
    <Navbar/>
    <Switch>
        {/* <Route exact path="/"><Newscom key="general"pageSize==9country="in" category="general"/></Route> */}
        <Route exact path="/general"><Newscom key="general" pageSize={9} country="in" category="general"/></Route>
        <Route exact path="/business"><Newscom key="business" pageSize={9} country="in" category="business"/></Route>
        <Route exact path="/entertainment"><Newscom key="entertainment" pageSize={9} country="in" category="entertainment"/></Route>
        <Route exact path="/health"><Newscom key="health" pageSize={9} country="in" category="health"/></Route>
        <Route exact path="/science"><Newscom key="science" pageSize={9} country="in" category="science"/></Route>
        <Route exact path="/sports"><Newscom key="sports" pageSize={9} country="in" category="sports"/></Route>
        <Route exact path="/technology"><Newscom key="technology" pageSize={9} country="in" category="technology"/></Route>
    </Switch>
        </Router>
        </>
    );
 }
}

