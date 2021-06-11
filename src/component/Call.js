import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

const callData = [
    {
        구분: "지역",
        상태: "배차",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "역삼동 용인시청 보건소",
        하차위치: "인계동 수원시청",
    },
    {
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "교통약자",
        승차위치: "금곡로212번길 25",
        하차위치: "인계동 수원시청",
    },
    {
        구분: "지역",
        상태: "대기",
        배차차량: "6655",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "인계동 수원시청 25",
        하차위치: "이태원역",
    },
    {
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "남양리 화성시청",
    },
    {
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
    },
    {
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
    },
];

const Call = () => (
    <div id="Call" className="call-wrap">
        <div className="tbl- tbl-type1 tbl-map ag-theme-balham">
            <AgGridReact rowData={callData}>
                <AgGridColumn field="구분"></AgGridColumn>
                <AgGridColumn field="상태"></AgGridColumn>
                <AgGridColumn field="배차차량"></AgGridColumn>
                <AgGridColumn field="배차기사명"></AgGridColumn>
                <AgGridColumn field="고객명"></AgGridColumn>
                <AgGridColumn field="승차위치"></AgGridColumn>
                <AgGridColumn field="하차위치"></AgGridColumn>
            </AgGridReact>
        </div>
    </div>
);

export default Call;
