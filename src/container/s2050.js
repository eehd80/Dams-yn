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
        번호: "1",
        승인상태: "승인대기",
        고객명: "최유금",
        핸드폰번호: "010-2222-2222",
        WebID: "makebelie",
        이용대상자유형1: "지폐성장애",
        장애등급1: "1급",
        이용대상자유형2: "노약자",
        장애등급2: "등급외",
        휠체어: "휠체어수동",
        추가전화번호1: "070-2222-3333",
        추가전화번호2: "010-2222-3333",
        추가전화번호3: "010-2222-3333",
    },
    {
        번호: "1",
        승인상태: "승인대기",
        고객명: "최유금",
        핸드폰번호: "010-2222-2222",
        WebID: "makebelie",
        이용대상자유형1: "지폐성장애",
        장애등급1: "1급",
        이용대상자유형2: "노약자",
        장애등급2: "등급외",
        휠체어: "휠체어수동",
        추가전화번호1: "070-2222-3333",
        추가전화번호2: "010-2222-3333",
        추가전화번호3: "010-2222-3333",
    },
];

const defaultColDef = {
    width: 100,
    resizable: true,
};

const condition = [
    { value: "고객명", label: "고객명" },
    { value: "고객전화번호", label: "고객전화번호" },
    { value: "webID", label: "webID" },
];
const approval = [
    { value: "승인대기", label: "승인대기" },
    { value: "승인", label: "승인" },
    { value: "거부", label: "거부" },
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
                        <div className="main">
                            <div className="tit-sub-wrap">
                                <h2 className="tit-sub">홈페이지 가입 고객관리</h2>
                            </div>
                            {/* 검색 */}
                            <Form className="tbl-filter">
                                <Row>
                                    <Col xs="1">
                                        <FormGroup>
                                            <Label for="approvalPop" className="blind">
                                                승인여부
                                            </Label>
                                            <Select options={approval} defaultValue={approval[0]} id="approval" name="approval" />
                                        </FormGroup>
                                    </Col>
                                    <Col xs="1">
                                        <FormGroup>
                                            <Label for="condition" className="blind">
                                                조회조건
                                            </Label>
                                            <Select options={condition} defaultValue={condition[0]} id="condition" name="condition" />
                                        </FormGroup>
                                    </Col>
                                    <Col xs="2">
                                        <Input type="text" name="search" id="search" placeholder="검색" />
                                    </Col>
                                    <Col xs="2" className="btn-group2">
                                        <ButtonToggle className="c-blue">
                                            <i class="las la-plus"></i> 신규
                                        </ButtonToggle>
                                        <ButtonToggle className="">
                                            <i class="las la-search"></i> 검색
                                        </ButtonToggle>
                                        <ButtonToggle className="c-green">
                                            <i class="las la-file-excel"></i> 엑셀
                                        </ButtonToggle>
                                    </Col>
                                </Row>
                            </Form>
                            {/* 리스트 */}
                            <div className="lst-memo">
                                <div className="tbl- tbl-type1 tbl-call ag-theme-balham" style={{ height: "400px" }}>
                                    <AgGridReact
                                        rowData={webCall}
                                        defaultColDef={defaultColDef}
                                        enableRangeSelection={true}
                                        allowContextMenuWithControlKey={true}
                                    >
                                        <AgGridColumn field="번호" minWidth={60} maxWidth={70}></AgGridColumn>
                                        <AgGridColumn field="승인상태" minWidth={100}></AgGridColumn>
                                        <AgGridColumn field="고객명"></AgGridColumn>
                                        <AgGridColumn field="핸드폰번호" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="WebID" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="이용대상자유형1" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="장애등급1"></AgGridColumn>
                                        <AgGridColumn field="이용대상자유형2" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="장애등급2"></AgGridColumn>
                                        <AgGridColumn field="휠체어" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="추가전화번호1" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="추가전화번호2" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="추가전화번호3" minWidth={150}></AgGridColumn>
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
