import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import './App.scss';
import "./dist/scss/comm.scss";

import Main from "./container/Main";
import memo from "./container/memo";
import memoWrite from "./container/memo-write";
import webCall from "./container/webCall";
import s1010 from "./container/s1010";
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
// import s2080 from "./container/s2080";
import s2090 from "./container/s2090";
import s2100 from "./container/s2100";
import s3010 from "./container/s3010";
import s3020 from "./container/s3020";
import s4010 from "./container/s4010";
import s4030 from "./container/s4030";
import s4040 from "./container/s4040";
import s5010 from "./container/s5010";
import s5020 from "./container/s5020";
import s6010 from "./container/s6010";
import s7010 from "./container/s7010";
import s7020 from "./container/s7020";
import s8020 from "./container/s8020";
import s8030 from "./container/s8030";
import s8040 from "./container/s8040";
import s8050 from "./container/s8050";
import s9020 from "./container/s9020";
import s9030 from "./container/s9030";
import popMap from "./container/pop-map";
import popSchedule from "./container/pop-schedule";
import pop_s101 from "./container/pop-s101";
import test from "./container/test";

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Main} />
                <Route path="/memo" component={memo} />
                <Route path="/memoWrite" component={memoWrite} />
                <Route path="/webCall" component={webCall} />
                <Route path="/s1010" component={s1010} />
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
                <Route path="/s2090" component={s2090} />
                <Route path="/s2100" component={s2100} />
                <Route path="/s3010" component={s3010} />
                <Route path="/s3020" component={s3020} />
                <Route path="/s4010" component={s4010} />
                <Route path="/s4030" component={s4030} />
                <Route path="/s4040" component={s4040} />
                <Route path="/s5010" component={s5010} />
                <Route path="/s5020" component={s5020} />
                <Route path="/s6010" component={s6010} />
                <Route path="/s7010" component={s7010} />
                <Route path="/s7020" component={s7020} />
                <Route path="/s8020" component={s8020} />
                <Route path="/s8030" component={s8030} />
                <Route path="/s8040" component={s8040} />
                <Route path="/s8050" component={s8050} />
                <Route path="/s9020" component={s9020} />
                <Route path="/s9030" component={s9030} />
                <Route path="/popMap" component={popMap} /> {/* 지도 팝업 */}
                <Route path="/popSchedule" component={popSchedule} /> {/* 스케줄 팝업 */}
                <Route path="/pop-s101" component={pop_s101} /> {/* 차량별 예약시간표 팝업 */}
                <Route path="/test" component={test} />
            </Router>
        );
    }
}

export default App;
