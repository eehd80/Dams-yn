import React, { useEffect, useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DatePickerButton from "../component/DatePicker";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { Row, Col, Button, ButtonToggle, Form, FormGroup, Label, Input } from "reactstrap";

import { Item, Menu, Separator, Submenu, useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import { getData } from "../api/data";
import TestRenderer from "../component/TestRenderer";

const defaultColDef = {
    width: 100,
    resizable: true,
};

const gps = [
    { value: "정상", label: "정상" },
    { value: "음영", label: "음영" },
    { value: "기타", label: "기타" },
];
const service = [
    { value: "대기", label: "대기" },
    { value: "배차", label: "배차" },
    { value: "승차", label: "승차" },
    { value: "휴식", label: "휴식" },
    { value: "퇴근", label: "퇴근" },
];
const condition = [
    { value: "ID", label: "ID" },
    { value: "이름", label: "이름" },
    { value: "전화번호", label: "전화번호" },
    { value: "차량번호", label: "차량번호" },
];
const company = [
    { value: "아이원맥스", label: "아이원맥스" },
    { value: "아이원맥스", label: "아이원맥스" },
    { value: "아이원맥스", label: "아이원맥스" },
];
const workData1 = [
    { 번호: "1", 근무조명: "09-18조", 시작시간: "09", 종료시간: "18" },
    { 번호: "1", 근무조명: "09-18조", 시작시간: "09", 종료시간: "18" },
    { 번호: "1", 근무조명: "09-18조", 시작시간: "09", 종료시간: "18" },
];
const workData2 = [
    { 번호: "1", 기사명: "권다경", 아이디: "0022", 소속법인: "교통약자" },
    { 번호: "1", 기사명: "권다경", 아이디: "0022", 소속법인: "교통약자" },
    { 번호: "1", 기사명: "권다경", 아이디: "0022", 소속법인: "교통약자" },
];

const MENU_ID = "dams-context";

const Current = (props) => {
    const [activeTab, setActiveTab] = useState("1");
    const { show } = useContextMenu({
        id: MENU_ID,
    });
    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState([]);

    function testContext(e) {}

    function handleItemClick({ event, props, triggerEvent, data }) {
        console.log(props);
    }

    const onGridReady = (params) => {
        getData().then(function (r) {
            setRowData(r);
        });
    };

    const tttt = function (e) {
        e.preventDefault();
    };

    return (
        <div className="wrap-data">
            <div className="tit-sub-wrap">
                <h2 className="tit-sub">기사현황</h2>
            </div>
            <div className="lst-data">
                {/* 검색 */}
                <Form className="tbl-filter">
                    <FormGroup>
                        <Label for="gps" className="blind">
                            GPS상태
                        </Label>
                        <Select options={gps} id="gps" name="gps" placeholder="GPS상태" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="service" className="blind">
                            서비스상태
                        </Label>
                        <Select options={service} id="service" name="service" placeholder="서비스상태" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="condition" className="blind">
                            검색
                        </Label>
                        <Select options={condition} defaultValue={condition[0]} id="condition" name="condition" />
                    </FormGroup>
                    <Input type="text" name="search" id="search" placeholder="검색" className="inp-search" />
                    <FormGroup>
                        <Label for="company" className="blind">
                            회사명
                        </Label>
                        <Select options={company} defaultValue={company[0]} id="company" name="company" />
                    </FormGroup>

                    <div className="btn-group2">
                        <ButtonToggle className="c-yellow">
                            <i className="las la-sms"></i> SMS전송
                        </ButtonToggle>
                        <ButtonToggle className="">
                            <i className="las la-search"></i> 검색
                        </ButtonToggle>
                    </div>
                </Form>
                <div className="tbl-option">
                    <div className="row-option">
                        <FormGroup xs="2" className="tit">
                            <Label for="driverAll">전체기사</Label>
                            <Input type="text" name="driverAll" id="driverAll" />
                        </FormGroup>
                        <FormGroup xs="2" className="tit">
                            <Label for="driverOpt1">정상</Label>
                            <Input type="text" name="driverOpt1" id="driverOpt1" />
                        </FormGroup>
                        <FormGroup xs="2" className="tit">
                            <Label for="driverOpt2">음영</Label>
                            <Input type="text" name="driverOpt2" id="driverOpt2" />
                        </FormGroup>
                        <FormGroup xs="2" className="tit">
                            <Label for="driverOpt2">기타</Label>
                            <Input type="text" name="driverOpt2" id="driverOpt2" />
                        </FormGroup>
                        <ButtonToggle className="c-yellow">
                            <i className="las la-map-marker-alt"></i> 위치보기
                        </ButtonToggle>
                    </div>
                    <div className="row-option">
                        <FormGroup xs="2" className="tit">
                            <Label for="driverAll" className="et c-blue">
                                대기
                            </Label>
                            <Input type="text" name="driverAll" id="driverAll" />
                        </FormGroup>
                        <FormGroup xs="2" className="tit">
                            <Label for="driverOpt1" className="c-red">
                                배차
                            </Label>
                            <Input type="text" name="driverOpt1" id="driverOpt1" />
                        </FormGroup>
                        <FormGroup xs="2" className="tit">
                            <Label for="driverOpt2" className="c-green">
                                승차
                            </Label>
                            <Input type="text" name="driverOpt2" id="driverOpt2" />
                        </FormGroup>
                        <FormGroup xs="2" className="tit">
                            <Label for="driverOpt2" className="c-gray">
                                출석
                            </Label>
                            <Input type="text" name="driverOpt2" id="driverOpt2" />
                        </FormGroup>
                        <FormGroup xs="2" className="tit">
                            <Label for="driverOpt2" className="c-gray">
                                퇴근
                            </Label>
                            <Input type="text" name="driverOpt2" id="driverOpt2" />
                        </FormGroup>
                        <FormGroup>
                            <DatePickerButton />
                            <div className="wav-">부터</div>
                            <Input type="number" name="unitTime" id="unitTime" className="inp-time" />
                            <div className="wav-">시간</div>
                        </FormGroup>
                        <FormGroup>
                            <ButtonToggle className="c-green">
                                <i className="las la-route"></i> 경로보기
                            </ButtonToggle>
                        </FormGroup>
                    </div>
                </div>
                {/* 리스트 */}
                <div className="tbl- ag-theme-balham">
                    <AgGridReact
                        frameworkComponents={{
                            testRenderer: TestRenderer,
                        }}
                        rowData={rowData}
                        defaultColDef={defaultColDef}
                        allowContextMenuWithControlKey={true}
                        enableRangeSelection={true}
                        onCellContextMenu={testContext}
                        onGridReady={onGridReady}
                    >
                        <AgGridColumn field="근무조" minWidth={100} cellRenderer="testRenderer"></AgGridColumn>
                        <AgGridColumn field="1(토)" minWidth={130}></AgGridColumn>
                        <AgGridColumn field="2(일)" minWidth={130}></AgGridColumn>
                        <AgGridColumn field="3(월)" minWidth={130}></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>
        </div>
    );
};

export default Current;
