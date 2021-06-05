import React, { Component } from 'react';

import Header from "../component/Header";
import Footer from "../component/Footer";
import Receive from '../component/Receive'


class Main extends Component{
    render(){
        return (
        <div className="wrap">
            <Header />
            <div id="main">
                <Receive />
                <div className="contents">
                    conetents
                </div>
            </div>
            <Footer />
        </div>
        )
    }
}

export default Main;