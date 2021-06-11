import React from "react";
import ResizePanel from "react-resize-panel";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

const rowData = [
    { 아이디: "eehd80", 이름: "정미애", 차량번호: "40아 2222" },
    { 아이디: "eehd80", 이름: "정미애", 차량번호: "40아 2222" },
    { 아이디: "eehd80", 이름: "정미애", 차량번호: "40아 2222" },
    { 아이디: "eehd80", 이름: "정미애", 차량번호: "40아 2222" },
    { 아이디: "eehd80", 이름: "정미애", 차량번호: "40아 2222" },
];

const Map = () => (
    <ResizePanel direction="s" style={{ height: "10%" }}>
        <div className="resize-wrap panel">
            <div id="Map" className="map-bg">
                {/* is-folded 추가 : 맵 접기 */}
                {/* 맵 api를 설정하실거 같아서 map-bg에 임시로 이미지를 깔아놨습니다. 나중에 이 클래스를 빼주세요 */}
                {/* 출발 */}
                <div className="flag-wrap flag-origin" style={{ top: "50px", left: "500px" }}>
                    <div className="guide">끌어서 출발지 변경</div>
                    <a href="#" className="remover">
                        <span className="blind">삭제</span>
                    </a>
                    <div className="flag-img img_g">
                        <span className="blind">출발</span>
                    </div>
                </div>
                {/* 도착 */}
                <div className="flag-wrap flag-dest" style={{ top: "22px", left: "132px" }}>
                    <div className="guide">끌어서 도착지 변경</div>
                    <a href="#" className="remover">
                        <span className="blind">삭제</span>
                    </a>
                    <div className="flag-img img_g">
                        <span className="blind">도착</span>
                    </div>
                </div>
            </div>

            <div className="map-info">
                <div className="tbl- tbl-type1 tbl-map ag-theme-balham">
                    <AgGridReact rowData={rowData}>
                        <AgGridColumn field="아이디"></AgGridColumn>
                        <AgGridColumn field="이름"></AgGridColumn>
                        <AgGridColumn field="차량번호"></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>
        </div>
    </ResizePanel>
);

export default Map;
