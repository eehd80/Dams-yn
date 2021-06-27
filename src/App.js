import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import './App.scss';
import "./dist/scss/comm.scss";

import Main from "./container/Main";
import memo from "./container/memo";
import memoWrite from "./container/memo-write";
import webCall from "./container/webCall";
import board from "./container/board";
import s1020 from "./container/s1020";
import s1030 from "./container/s1030";
import s1040 from "./container/s1040";
import s1050 from "./container/s1050";
import s2010 from "./container/s2010";
import s2020 from "./container/s2020";
import s2030 from "./container/s2030";
import s2040 from "./container/s2040";
import s2050 from "./container/s2050";
import s2060 from "./container/s2060";
import s2070 from "./container/s2070";
import popMap from "./container/pop-map";
import popSchedule from "./container/pop-schedule";
import pop_s101 from "./container/pop-s101";

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Main} />
                <Route path="/memo" component={memo} />
                <Route path="/memoWrite" component={memoWrite} />
                <Route path="/webCall" component={webCall} />
                <Route path="/board" component={board} />
                <Route path="/s1020" component={s1020} />
                <Route path="/s1030" component={s1030} />
                <Route path="/s1040" component={s1040} />
                <Route path="/s1050" component={s1050} />
                <Route path="/s2010" component={s2010} />
                <Route path="/s2020" component={s2020} />
                <Route path="/s2030" component={s2030} />
                <Route path="/s2040" component={s2040} />
                <Route path="/s2050" component={s2050} />
                <Route path="/s2060" component={s2060} />
                <Route path="/s2070" component={s2070} />
                <Route path="/popMap" component={popMap} /> {/* 지도 팝업 */}
                <Route path="/popSchedule" component={popSchedule} /> {/* 스케줄 팝업 */}
                <Route path="/pop-s101" component={pop_s101} /> {/* 차량별 예약시간표 팝업 */}
            </Router>
        );
    }
}

export default App;
