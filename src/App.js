import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import './App.scss';
import "./dist/scss/comm.scss";

import Main from "./container/Main";
import Memo from "./container/Memo";
import webCall from "./container/webCall";
import Board from "./container/Board";
import s1030 from "./container/s1030";
import s1040 from "./container/s1040";
import s1050 from "./container/s1050";
import popMap from "./container/pop-map";
import popSchedule from "./container/pop-schedule";

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Main} />
                <Route path="/memo" component={Memo} />
                <Route path="/webCall" component={webCall} />
                <Route path="/Board" component={Board} />
                <Route path="/s1030" component={s1030} />
                <Route path="/s1040" component={s1040} />
                <Route path="/s1050" component={s1050} />
                <Route path="/popMap" component={popMap} /> {/* 지도 팝업 */}
                <Route path="/popSchedule" component={popSchedule} /> {/* 지도 팝업 */}
            </Router>
        );
    }
}

export default App;
