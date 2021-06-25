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
        선택: "",
        기사명: "최유금",
        기사ID: "1002",
        기사인식번호: "1002",
        기사전화번호: "010-2222-2222",
        차량번호: "75다 5454",
        차종: "올뉴 카니발",
        사용여부: "사용",
        등록일: "2011-05-22 13:12:55",
    },
];

const defaultColDef = {
    width: 100,
    resizable: true,
};

const use = [
    { value: "전체", label: "전체" },
    { value: "사용", label: "사용" },
    { value: "미사용", label: "미사용" },
];
const condition = [
    { value: "기사명", label: "기사명" },
    { value: "기사ID", label: "기사ID" },
    { value: "기사전화", label: "기사전화" },
    { value: "인식번호", label: "인식번호" },
    { value: "차량번호", label: "차량번호" },
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
                                <h2 className="tit-sub">운전원 근무조 관리</h2>
                            </div>
                            <div className="lst-data">
                                {/* 검색 */}
                                <Form className="tbl-filter">
                                    <Row>
                                        <Col xs="2">
                                            <FormGroup>
                                                <Label for="use" className="blind">
                                                    사용여부
                                                </Label>
                                                <Select options={use} defaultValue={use[0]} id="use" name="use" />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="2">
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
                                        <Col className="btn-group2">
                                            <ButtonToggle className="c-yellow">
                                                <i className="las la-sms"></i> 기존근무조설정
                                            </ButtonToggle>
                                            <ButtonToggle className="c-green">
                                                <i className="las la-file-excel"></i> 엑셀 불러오기
                                            </ButtonToggle>
                                            <ButtonToggle className="c-blue">
                                                <i className="las la-plus"></i> 신규
                                            </ButtonToggle>
                                            <ButtonToggle className="">
                                                <i className="las la-search"></i> 검색
                                            </ButtonToggle>
                                            <ButtonToggle className="c-green">
                                                <i className="las la-file-excel"></i> 엑셀
                                            </ButtonToggle>
                                        </Col>
                                    </Row>
                                </Form>
                                {/* 리스트 */}
                                <div className="tbl- ag-theme-balham">
                                    <AgGridReact
                                        rowData={webCall}
                                        defaultColDef={defaultColDef}
                                        enableRangeSelection={true}
                                        allowContextMenuWithControlKey={true}
                                    >
                                        <AgGridColumn field="번호" minWidth={60} maxWidth={70}></AgGridColumn>
                                        <AgGridColumn field="선택" minWidth={60} maxWidth={70}></AgGridColumn>
                                        <AgGridColumn field="기사명"></AgGridColumn>
                                        <AgGridColumn field="기사ID"></AgGridColumn>
                                        <AgGridColumn field="기사인식번호"></AgGridColumn>
                                        <AgGridColumn field="기사전화번호" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="차량번호" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="차종" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="사용여부"></AgGridColumn>
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
