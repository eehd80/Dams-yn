import React, { Component } from "react";

import Header from "../component/Header";
import Receive from "../component/Receive";
import Map from "../component/Map";
import Call from "../component/Call";
import ReactResizeDetector from "react-resize-detector";

class Main extends Component {
    render() {
        return (
            <div className="wrap">
                <Header />
                <div id="main">
                    <Receive />
                    <div className="contents">
                        <Map />
                        <Call />
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default Main;
