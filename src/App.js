import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import './App.scss';
import "./dist/scss/comm.scss";

import Main from "./container/Main";
import WebtoonHome from "./container/WebtoonHome";
import Viewer from "./container/Viewer";
import s1 from "./container/s1";

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Main} />
                <Route path="/webtoon/:webtoonId" component={WebtoonHome} />
                <Route path="/viewer/:episodeId" component={Viewer} />
                <Route path="/s1" component={s1} />
            </Router>
        );
    }
}

export default App;
