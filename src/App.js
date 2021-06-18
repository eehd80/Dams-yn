import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import './App.scss';
import "./dist/scss/comm.scss";

import Main from "./container/Main";
import PopMap from "./container/pop-map";
import Memo from "./container/Memo";
import Board from "./container/Board";
import s1 from "./container/s1";

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Main} />
                <Route path="/memo/" component={Memo} />
                <Route path="/Board/" component={Board} />
                <Route path="/popMap/" component={PopMap} /> {/* 지도 팝업 */}
                <Route path="/s1" component={s1} />
            </Router>
        );
    }
}

export default App;
