import React, { Component } from "react";

import Header from "../component/Header";
import Receive from "../component/Receive";
import Map from "../component/Map";
import Current from "../component/Current";

class Main extends Component {
    render() {
        return (
            <div className="wrap">
                <Header />
                <div id="main">
                    <Receive />
                    <div className="contents">
                        <Map />
                        <Current />
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default Main;
