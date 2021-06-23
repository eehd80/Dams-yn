import React, { Component } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DatePickerButton from "../component/DatePicker";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { Row, Col, Button, ButtonToggle, Form, FormGroup, Label, Input } from "reactstrap";

import Header from "../component/Header";
import Receive from "../component/Receive";
import Map from "../component/Map";

const webCall = [
    {
        번호: "1",
        사용자ID: "young101",
        사용자명: "교통정책과",
        전화번호: "010-1234-5678",
        사용여부: "사용",
        권한그룹명: "기본관리자",
        등록일: "2021-06-18 15:35:44",
    },
    {
        번호: "1",
        사용자ID: "young101",
        사용자명: "교통정책과",
        전화번호: "010-1234-5678",
        사용여부: "사용",
        권한그룹명: "기본관리자",
        등록일: "2021-06-18",
    },
    {
        번호: "1",
        사용자ID: "young101",
        사용자명: "교통정책과",
        전화번호: "010-1234-5678",
        사용여부: "사용",
        권한그룹명: "기본관리자",
        등록일: "2021-06-18",
    },
    {
        번호: "1",
        사용자ID: "young101",
        사용자명: "교통정책과",
        전화번호: "010-1234-5678",
        사용여부: "사용",
        권한그룹명: "기본관리자",
        등록일: "2021-06-18",
    },
    {
        번호: "1",
        사용자ID: "young101",
        사용자명: "교통정책과",
        전화번호: "010-1234-5678",
        사용여부: "사용",
        권한그룹명: "기본관리자",
        등록일: "2021-06-18",
    },
];

const defaultColDef = {
    width: 100,
    resizable: true,
};

const availability = [
    { value: "전체", label: "전체" },
    { value: "사용", label: "사용" },
    { value: "미사용", label: "미사용" },
];
const condition = [
    { value: "사용자명", label: "사용자명" },
    { value: "사용자ID", label: "사용자ID" },
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
                                <h2 className="tit-sub">사용자관리</h2>
                            </div>
                            {/* 검색 */}
                            <Form className="tbl-filter">
                                <Row>
                                    <Col xs="2">
                                        <FormGroup>
                                            <Label for="availability">사용여부</Label>
                                            <Select
                                                options={availability}
                                                defaultValue={availability[0]}
                                                id="availability"
                                                name="availability"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xs="2">
                                        <FormGroup>
                                            <Label for="condition">조회조건</Label>
                                            <Select options={condition} defaultValue={condition[0]} id="condition" name="condition" />
                                        </FormGroup>
                                    </Col>
                                    <Col xs="2">
                                        <Input type="text" name="search" id="search" placeholder="검색" />
                                    </Col>
                                    <Col xs="2" className="btn-group2">
                                        <ButtonToggle className="">
                                            <i class="las la-search"></i> 검색
                                        </ButtonToggle>
                                        <ButtonToggle className="c-blue">
                                            <i class="las la-plus"></i> 신규
                                        </ButtonToggle>
                                        <ButtonToggle className="c-green">
                                            <i class="las la-file-excel"></i> 엑셀
                                        </ButtonToggle>
                                    </Col>
                                </Row>
                            </Form>
                            {/* 리스트 */}
                            <div className="lst-memo">
                                <h3 className="blind">웹예약콜 리스트</h3>
                                <div className="tbl- tbl-type1 tbl-call ag-theme-balham" style={{ height: "400px" }}>
                                    <AgGridReact
                                        rowData={webCall}
                                        defaultColDef={defaultColDef}
                                        enableRangeSelection={true}
                                        allowContextMenuWithControlKey={true}
                                    >
                                        <AgGridColumn field="번호" minWidth={60} maxWidth={70}></AgGridColumn>
                                        <AgGridColumn field="사용자ID" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="사용자명" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="전화번호" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="사용여부"></AgGridColumn>
                                        <AgGridColumn field="권한그룹명"></AgGridColumn>
                                        <AgGridColumn field="등록일" minWidth={200}></AgGridColumn>
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
