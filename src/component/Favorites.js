import React from "react";

const Favorites = () => (
    <div id="favorites">
        <div className="container">
            <ul className="lst-favor">
                <li>
                    <button>접수</button>
                </li>
                <li>
                    <button>콜 현황</button>
                </li>
                <li>
                    <button>예약 콜</button>
                </li>
                <li>
                    <a href="#">기사관리</a>
                </li>
            </ul>
        </div>
    </div>
);

export default Favorites;
