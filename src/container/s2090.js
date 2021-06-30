import React, { Component } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DatePickerButton from "../component/DatePicker";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { Row, Col, Button, ButtonToggle, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import Header from "../component/Header";
import Receive from "../component/Receive";
import Map from "../component/Map";

const webCall = [
    {
        근무조: "07-16조",
        "1(토)": "김형래 71조 3717",
        "2(일)": "김형래 71조 3717",
        "3(월)": "김형래 71조 3717",
    },
    {
        근무조: "07-16조",
        "1(토)": "김형래 71조 3717",
        "2(일)": "김형래 71조 3717",
        "3(월)": "김형래 71조 3717",
    },
];

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

class Main extends Component {
    render() {
        return (
            <div className="wrap">
                <Header />
                <div id="main">
                    <Receive />
                    <div className="contents">
                        <Map />
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
                                            <i className="las la-file-excel"></i> SMS전송
                                        </ButtonToggle>
                                        <ButtonToggle className="">
                                            <i className="las la-search"></i> 검색
                                        </ButtonToggle>
                                    </div>
                                </Form>
                                {/* 리스트 */}
                                <div className="tbl- ag-theme-balham">
                                    <AgGridReact
                                        rowData={webCall}
                                        defaultColDef={defaultColDef}
                                        enableRangeSelection={true}
                                        allowContextMenuWithControlKey={true}
                                    >
                                        <AgGridColumn field="근무조" minWidth={100}></AgGridColumn>
                                        <AgGridColumn field="1(토)" minWidth={130}></AgGridColumn>
                                        <AgGridColumn field="2(일)" minWidth={130}></AgGridColumn>
                                        <AgGridColumn field="3(월)" minWidth={130}></AgGridColumn>
                                    </AgGridReact>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default Main;
