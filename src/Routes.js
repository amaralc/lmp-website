import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={App}>
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />                          
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/team" component={Team} />
                        
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
