import React, { Component } from 'react';

import Header from "../component/Header";
import Footer from "../component/Footer";

class Main extends Component{
    render(){
        return (
        <div className="wrap">
            <Header />
            Main
            <Footer />
        </div>
        )
    }
}

export default Main;