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
const defaultColDef = {
    width: 100,
    resizable: true,
};

const Map = () => (
    <ResizePanel direction="s" className="resize-panel" style={{ "min-height": "100px" }}>
        <div className="resize-wrap panel">
            {" "}
            {/* 최소 높이값 설정 */}
            <div id="Map" className="map-bg">
                {/* 맵 api를 설정하실거 같아서 map-bg에 임시로 이미지를 깔아놨습니다. 나중에 이 클래스를 빼주세요 */}
                {/* 출발 */}
                <div className="flag-wrap flag-origin" style={{ top: "50px", left: "408px" }}>
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
                {/* 지정 */}
                <div className="point-context" style={{ top: "200px", left: "500px" }}>
                    <div className="contextWrap">
                        <a data-id="here" href="#" className="context_here">
                            <span className="text">여기 주소 보기</span>
                        </a>
                        <a data-id="favorite" className="fav" href="#">
                            <span className="text">즐겨찾기 추가</span>
                        </a>
                        <span className="separator"></span>
                        <a data-id="origin" href="#" className="ico- origin">
                            <span className="text">출발지 지정</span>
                        </a>
                        <a data-id="destination" href="#" className="ico- dest">
                            <span className="text">도착지 지정</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="map-info">
                <div className="tbl- tbl-type1 tbl-map ag-theme-balham" style={{ height: "calc(100% - 30px)" }}>
                    <AgGridReact rowData={rowData} defaultColDef={defaultColDef}>
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
