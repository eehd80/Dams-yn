import React from "react";

import Gnb from "../component/Gnb";
import Favorites from "../component/Favorites";

const Header = () => (
    <div id="header">
        <nav className="gnb-util">
            <div className="container">
                <h1 className="logo">
                    <a href="#">용인시 교통약자 DAMS</a>
                </h1>
                <div className="util-wrap">
                    <ul className="lst-util">
                        <li>
                            <a href="#">메모</a>
                        </li>
                        <li>
                            <a href="#">웹 예약콜</a>
                        </li>
                        <li>
                            <a href="#">예약콜</a>
                        </li>
                        <li>
                            <a href="#">공지사항</a>
                        </li>
                    </ul>
                    <ul className="lst-log">
                        <li>
                            <a href="#">eehd80</a>
                        </li>
                        <li>
                            <a href="#">로그아웃</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="gnb-wrap">
            <div className="container">
                <Gnb />
            </div>
        </div>
        <Favorites />
    </div>
);

export default Header;
