import React, { useState } from "react";
import { render } from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DatePickerButton from "./DatePicker";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { Row, Col, ButtonToggle, Button, Form, FormGroup, Label, Input } from "reactstrap";

// import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const callData = [
    {
        표식: "",
        구분: "지역",
        상태: "배차",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "역삼동 용인시청 보건소",
        하차위치: "인계동 수원시청",
        배차예정시간: "2021-06-15 09:00",
        이용예정시간: "5시간",
        고객회신번호: "010-1234-5555",
        고객전화번호: "010-1234-5555",
        접수시간: "09:00",
        접수자: "정미애",
        접수자ID: "seoyoung",
        배차시간: "09:00",
        배차자: "용인시",
        승차시간: "09:00",
        하차시간: "14:00",
        요금: "100,000",
        기사전화번호: "010-5555-7777",
        차량번호: "5468",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "교통약자",
        승차위치: "금곡로212번길 25",
        하차위치: "인계동 수원시청",
        배차예정시간: "2021-06-15 09:00",
        이용예정시간: "5시간",
        고객회신번호: "010-1234-5555",
        고객전화번호: "010-1234-5555",
        접수시간: "09:00",
        접수자: "정미애",
        접수자ID: "seoyoung",
        배차시간: "09:00",
        배차자: "용인시",
        승차시간: "09:00",
        하차시간: "14:00",
        요금: "100,000",
        기사전화번호: "010-5555-7777",
        차량번호: "5468",
    },
    {
        표식: "보류",
        구분: "지역",
        상태: "대기",
        배차차량: "6655",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "인계동 수원시청 25",
        하차위치: "이태원역",
        배차예정시간: "2021-06-15 09:00",
        이용예정시간: "5시간",
        고객회신번호: "010-1234-5555",
        고객전화번호: "010-1234-5555",
        접수시간: "09:00",
        접수자: "정미애",
        접수자ID: "seoyoung",
        배차시간: "09:00",
        배차자: "용인시",
        승차시간: "09:00",
        하차시간: "14:00",
        요금: "100,000",
        기사전화번호: "010-5555-7777",
        차량번호: "5468",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "남양리 화성시청",
        배차예정시간: "2021-06-15 09:00",
        이용예정시간: "5시간",
        고객회신번호: "010-1234-5555",
        고객전화번호: "010-1234-5555",
        접수시간: "09:00",
        접수자: "정미애",
        접수자ID: "seoyoung",
        배차시간: "09:00",
        배차자: "용인시",
        승차시간: "09:00",
        하차시간: "14:00",
        요금: "100,000",
        기사전화번호: "010-5555-7777",
        차량번호: "5468",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
        배차예정시간: "2021-06-15 09:00",
        이용예정시간: "5시간",
        고객회신번호: "010-1234-5555",
        고객전화번호: "010-1234-5555",
        접수시간: "09:00",
        접수자: "정미애",
        접수자ID: "seoyoung",
        배차시간: "09:00",
        배차자: "용인시",
        승차시간: "09:00",
        하차시간: "14:00",
        요금: "100,000",
        기사전화번호: "010-5555-7777",
        차량번호: "5468",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
        배차예정시간: "2021-06-15 09:00",
        이용예정시간: "5시간",
        고객회신번호: "010-1234-5555",
        고객전화번호: "010-1234-5555",
        접수시간: "09:00",
        접수자: "정미애",
        접수자ID: "seoyoung",
        배차시간: "09:00",
        배차자: "용인시",
        승차시간: "09:00",
        하차시간: "14:00",
        요금: "100,000",
        기사전화번호: "010-5555-7777",
        차량번호: "5468",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
        배차예정시간: "2021-06-15 09:00",
        이용예정시간: "5시간",
        고객회신번호: "010-1234-5555",
        고객전화번호: "010-1234-5555",
        접수시간: "09:00",
        접수자: "정미애",
        접수자ID: "seoyoung",
        배차시간: "09:00",
        배차자: "용인시",
        승차시간: "09:00",
        하차시간: "14:00",
        요금: "100,000",
        기사전화번호: "010-5555-7777",
        차량번호: "5468",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
        배차예정시간: "2021-06-15 09:00",
        이용예정시간: "5시간",
        고객회신번호: "010-1234-5555",
        고객전화번호: "010-1234-5555",
        접수시간: "09:00",
        접수자: "정미애",
        접수자ID: "seoyoung",
        배차시간: "09:00",
        배차자: "용인시",
        승차시간: "09:00",
        하차시간: "14:00",
        요금: "100,000",
        기사전화번호: "010-5555-7777",
        차량번호: "5468",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
        배차예정시간: "2021-06-15 09:00",
        이용예정시간: "5시간",
        고객회신번호: "010-1234-5555",
        고객전화번호: "010-1234-5555",
        접수시간: "09:00",
        접수자: "정미애",
        접수자ID: "seoyoung",
        배차시간: "09:00",
        배차자: "용인시",
        승차시간: "09:00",
        하차시간: "14:00",
        요금: "100,000",
        기사전화번호: "010-5555-7777",
        차량번호: "5468",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
        배차예정시간: "2021-06-15 09:00",
        이용예정시간: "5시간",
        고객회신번호: "010-1234-5555",
        고객전화번호: "010-1234-5555",
        접수시간: "09:00",
        접수자: "정미애",
        접수자ID: "seoyoung",
        배차시간: "09:00",
        배차자: "용인시",
        승차시간: "09:00",
        하차시간: "14:00",
        요금: "100,000",
        기사전화번호: "010-5555-7777",
        차량번호: "5468",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
        배차예정시간: "2021-06-15 09:00",
        이용예정시간: "5시간",
        고객회신번호: "010-1234-5555",
        고객전화번호: "010-1234-5555",
        접수시간: "09:00",
        접수자: "정미애",
        접수자ID: "seoyoung",
        배차시간: "09:00",
        배차자: "용인시",
        승차시간: "09:00",
        하차시간: "14:00",
        요금: "100,000",
        기사전화번호: "010-5555-7777",
        차량번호: "5468",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
        배차예정시간: "2021-06-15 09:00",
        이용예정시간: "5시간",
        고객회신번호: "010-1234-5555",
        고객전화번호: "010-1234-5555",
        접수시간: "09:00",
        접수자: "정미애",
        접수자ID: "seoyoung",
        배차시간: "09:00",
        배차자: "용인시",
        승차시간: "09:00",
        하차시간: "14:00",
        요금: "100,000",
        기사전화번호: "010-5555-7777",
        차량번호: "5468",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
        배차예정시간: "2021-06-15 09:00",
        이용예정시간: "5시간",
        고객회신번호: "010-1234-5555",
        고객전화번호: "010-1234-5555",
        접수시간: "09:00",
        접수자: "정미애",
        접수자ID: "seoyoung",
        배차시간: "09:00",
        배차자: "용인시",
        승차시간: "09:00",
        하차시간: "14:00",
        요금: "100,000",
        기사전화번호: "010-5555-7777",
        차량번호: "5468",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
        배차예정시간: "2021-06-15 09:00",
        이용예정시간: "5시간",
        고객회신번호: "010-1234-5555",
        고객전화번호: "010-1234-5555",
        접수시간: "09:00",
        접수자: "정미애",
        접수자ID: "seoyoung",
        배차시간: "09:00",
        배차자: "용인시",
        승차시간: "09:00",
        하차시간: "14:00",
        요금: "100,000",
        기사전화번호: "010-5555-7777",
        차량번호: "5468",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "dddd",
        승차위치: "삼각지역",
        하차위치: "이태원역",
        배차예정시간: "2021-06-15 09:00",
        이용예정시간: "5시간",
        고객회신번호: "010-1234-5555",
        고객전화번호: "010-1234-5555",
        접수시간: "09:00",
        접수자: "정미애",
        접수자ID: "seoyoung",
        배차시간: "09:00",
        배차자: "용인시",
        승차시간: "09:00",
        하차시간: "14:00",
        요금: "100,000",
        기사전화번호: "010-5555-7777",
        차량번호: "5468",
    },
];

const defaultColDef = {
    width: 100,
    resizable: true,
};

const renew = [
    { value: "수동", label: "수동" },
    { value: "자동 3초", label: "자동 3초" },
    { value: "자동 5초", label: "자동 5초" },
    { value: "자동 10초", label: "자동 10초" },
    { value: "자동 30초", label: "자동 30초" },
    { value: "자동 1분", label: "자동 1분" },
];
const array = [
    { value: "시간순", label: "시간순" },
    { value: "상태순", label: "상태순" },
];
const state = [
    { value: "대기", label: "대기" },
    { value: "접수", label: "접수" },
    { value: "배차", label: "배차" },
];
const condition = [
    { value: "ID", label: "ID" },
    { value: "고객명", label: "고객명" },
    { value: "고객전화", label: "고객전화" },
    { value: "회신번호", label: "회신번호" },
    { value: "승차위치", label: "승차위치" },
    { value: "하차위치", label: "하차위치" },
    { value: "차량번호", label: "차량번호" },
];
const canclePop = [
    { value: "(1) 고객취소)", label: "(1) 고객취소" },
    { value: "(2) 고객취소)", label: "(2) 고객취소" },
    { value: "(3) 고객취소)", label: "(3) 고객취소" },
];

const popTable = [
    { 순서: "1", 아이디: "3999", 이름: "오다다", 차량번호: "75로9874", 전화번호: "010-2222-3333", 당일수행콜: "55", 거리: "1km" },
    { 순서: "1", 아이디: "3999", 이름: "오다다", 차량번호: "75로9874", 전화번호: "010-2222-3333", 당일수행콜: "55", 거리: "1km" },
    { 순서: "1", 아이디: "3999", 이름: "오다다", 차량번호: "75로9874", 전화번호: "010-2222-3333", 당일수행콜: "55", 거리: "1km" },
    { 순서: "1", 아이디: "3999", 이름: "오다다", 차량번호: "75로9874", 전화번호: "010-2222-3333", 당일수행콜: "55", 거리: "1km" },
    { 순서: "1", 아이디: "3999", 이름: "오다다", 차량번호: "75로9874", 전화번호: "010-2222-3333", 당일수행콜: "55", 거리: "1km" },
];

const Current = (props) => {
    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState(null);

    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);

        const updateData = (data) => {
            setRowData(data);
        };

        fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
            .then((resp) => resp.json())
            .then((data) => updateData(data));
    };

    const getContextMenuItems = (params) => {
        var result = [
            {
                name: "Alert " + params.value,
                action: function () {
                    window.alert("Alerting about " + params.value);
                },
                cssClasses: ["redFont", "bold"],
            },
            {
                name: "Always Disabled",
                disabled: true,
                tooltip: "Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!",
            },
            {
                name: "Country",
                subMenu: [
                    {
                        name: "Ireland",
                        action: function () {
                            console.log("Ireland was pressed");
                        },
                        icon: createFlagImg("ie"),
                    },
                    {
                        name: "UK",
                        action: function () {
                            console.log("UK was pressed");
                        },
                        icon: createFlagImg("gb"),
                    },
                    {
                        name: "France",
                        action: function () {
                            console.log("France was pressed");
                        },
                        icon: createFlagImg("fr"),
                    },
                ],
            },
            {
                name: "Person",
                subMenu: [
                    {
                        name: "Niall",
                        action: function () {
                            console.log("Niall was pressed");
                        },
                    },
                    {
                        name: "Sean",
                        action: function () {
                            console.log("Sean was pressed");
                        },
                    },
                    {
                        name: "John",
                        action: function () {
                            console.log("John was pressed");
                        },
                    },
                    {
                        name: "Alberto",
                        action: function () {
                            console.log("Alberto was pressed");
                        },
                    },
                    {
                        name: "Tony",
                        action: function () {
                            console.log("Tony was pressed");
                        },
                    },
                    {
                        name: "Andrew",
                        action: function () {
                            console.log("Andrew was pressed");
                        },
                    },
                    {
                        name: "Kev",
                        action: function () {
                            console.log("Kev was pressed");
                        },
                    },
                    {
                        name: "Will",
                        action: function () {
                            console.log("Will was pressed");
                        },
                    },
                    {
                        name: "Armaan",
                        action: function () {
                            console.log("Armaan was pressed");
                        },
                    },
                ],
            },
            "separator",
            {
                name: "Windows",
                shortcut: "Alt + W",
                action: function () {
                    console.log("Windows Item Selected");
                },
                icon: '<img src="https://www.ag-grid.com/example-assets/skills/windows.png" />',
            },
            {
                name: "Mac",
                shortcut: "Alt + M",
                action: function () {
                    console.log("Mac Item Selected");
                },
                icon: '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>',
            },
            "separator",
            {
                name: "Checked",
                checked: true,
                action: function () {
                    console.log("Checked Selected");
                },
                icon: '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>',
            },
            "copy",
            "separator",
            "chartRange",
        ];
        return result;
    };

    return (
        <div id="call" className="wrap-data">
            <div className="tit-sub-wrap">
                <h2 className="tit-sub">콜현황</h2>
            </div>

            <div className="lst-data">
                <Form className="tbl-filter">
                    <FormGroup>
                        <Label for="renew">갱신</Label>
                        <Select options={renew} defaultValue={renew[0]} id="renew" name="renew" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="array">정렬</Label>
                        <Select options={array} defaultValue={array[0]} id="array" name="array" />
                    </FormGroup>
                    <FormGroup className="inp-et2">
                        <Label for="state" className="blind">
                            상태
                        </Label>
                        <Select
                            isMulti
                            options={state}
                            id="state"
                            name="state"
                            placeholder="상태조건"
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="array" className="blind">
                            정렬
                        </Label>
                        <Select options={condition} defaultValue={condition[0]} id="condition" name="condition" />
                    </FormGroup>
                    <Input type="text" name="search" id="search" placeholder="검색" className="inp-search" />

                    <div className="btn-group2">
                        <ButtonToggle className="c-blue">
                            <i className="las la-search"></i> 검색
                        </ButtonToggle>
                    </div>
                </Form>
                <div className="tbl- ag-theme-balham">
                    <AgGridReact
                        rowData={callData}
                        defaultValue={condition[0]}
                        defaultColDef={defaultColDef}
                        enableRangeSelection={true}
                        allowContextMenuWithControlKey={true}
                        getContextMenuItems={getContextMenuItems}
                        onGridReady={onGridReady}
                    >
                        <AgGridColumn field="표식" minWidth={60} maxWidth={70}></AgGridColumn>
                        <AgGridColumn field="구분" minWidth={60} maxWidth={70}></AgGridColumn>
                        <AgGridColumn field="상태"></AgGridColumn>
                        <AgGridColumn field="배차차량"></AgGridColumn>
                        <AgGridColumn field="배차기사명"></AgGridColumn>
                        <AgGridColumn field="고객명"></AgGridColumn>
                        <AgGridColumn field="승차위치" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="하차위치" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="배차예정시간" minWidth={180}></AgGridColumn>
                        <AgGridColumn field="이용예정시간"></AgGridColumn>
                        <AgGridColumn field="고객회신번호" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="고객전화번호" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="접수시간"></AgGridColumn>
                        <AgGridColumn field="접수자"></AgGridColumn>
                        <AgGridColumn field="접수자ID"></AgGridColumn>
                        <AgGridColumn field="배차시간"></AgGridColumn>
                        <AgGridColumn field="배차자"></AgGridColumn>
                        <AgGridColumn field="승차시간"></AgGridColumn>
                        <AgGridColumn field="하차시간"></AgGridColumn>
                        <AgGridColumn field="요금"></AgGridColumn>
                        <AgGridColumn field="기사전화번호" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="차량번호"></AgGridColumn>
                    </AgGridReact>

                    {/* 마우스 오른쪽 클릭 */}
                    {/* 제가 이걸 왜 만들었을까요? ㅋ 옵션 적용해봤는데 적용이 안됐습니다. ㅜㅜ 혹시 필요하시면 사용하시고 옵션 사용하실거면 지우셔도 됩니다. */}
                    {/* <div className="layer-option" style={{ top: "50px", left: "100px" }}>
                        <ul>
                            <li>수정</li>
                            <li>접수</li>
                            <li>예약콜로 수정</li>
                            <li className="line sub">
                                추가등록
                                <ul className="lst-sub">
                                    <li>대기</li>
                                    <li>접수</li>
                                </ul>
                            </li>
                            <li>지정배차</li>
                            <li>강제배차</li>
                            <li>중복배차</li>
                            <li>승차</li>
                            <li>하차</li>
                            <li>실패</li>
                            <li>취소</li>
                            <li className="line">완료</li>
                            <li>고객SMS</li>
                            <li>표식설정</li>
                            <li>표식해제</li>
                            <li>콜이력</li>
                            <li>배차재현</li>
                            <li>접수위치</li>
                            <li>승차위치</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

function createFlagImg(flag) {
    return '<img border="0" width="15" height="10" src="https://flags.fmcdn.net/data/flags/mini/' + flag + '.png"/>';
}

export default Current;
