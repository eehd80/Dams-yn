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

const condition = [
    { value: "ID", label: "ID" },
    { value: "고객명", label: "고객명" },
    { value: "고객전화", label: "고객전화" },
    { value: "회신번호", label: "회신번호" },
    { value: "승차위치", label: "승차위치" },
    { value: "하차위치", label: "하차위치" },
    { value: "차량번호", label: "차량번호" },
];

const popTable = [
    { 순서: "1", 아이디: "3999", 이름: "오다다", 차량번호: "75로9874", 전화번호: "010-2222-3333", 당일수행콜: "55", 거리: "1km" },
    { 순서: "1", 아이디: "3999", 이름: "오다다", 차량번호: "75로9874", 전화번호: "010-2222-3333", 당일수행콜: "55", 거리: "1km" },
    { 순서: "1", 아이디: "3999", 이름: "오다다", 차량번호: "75로9874", 전화번호: "010-2222-3333", 당일수행콜: "55", 거리: "1km" },
    { 순서: "1", 아이디: "3999", 이름: "오다다", 차량번호: "75로9874", 전화번호: "010-2222-3333", 당일수행콜: "55", 거리: "1km" },
    { 순서: "1", 아이디: "3999", 이름: "오다다", 차량번호: "75로9874", 전화번호: "010-2222-3333", 당일수행콜: "55", 거리: "1km" },
];
const defaultColDef = {
    width: 100,
    resizable: true,
};

const Footer = () => (
    <div id="footer">
        <div className="container">
            <FormGroup>
                <Label for="timeSearch">예약</Label>
                <DatePickerButton />
                <div className="form-control-wrap">
                    <Input type="number" name="intervalPop" id="intervalPop" placeholder="20" />
                    <span className="form-control-clear">
                        <span className="blind">지우기</span>
                    </span>
                </div>
                <span className="wav-">분전</span>
                <div className="form-control-wrap">
                    <Input type="number" name="intervalPop2" id="intervalPop2" placeholder="30" />
                    <span className="form-control-clear">
                        <span className="blind">지우기</span>
                    </span>
                </div>
                <span className="wav-">분후</span>
            </FormGroup>
            <Row>
                <Col className="tit">타이틀</Col>
                <Col></Col>
            </Row>
            <Row className="pop-filter">
                <Col xs="3">
                    <Label for="array" className="blind">
                        정렬
                    </Label>
                    <Select options={condition} defaultValue={condition[0]} id="condition" name="condition" />
                </Col>
                <Col xs="6">
                    <Input type="text" name="search" id="search" placeholder="검색" className="inp-search" />
                </Col>
                <Col>
                    <ButtonToggle className="c-blue btn-w">
                        <i className="las la-search"></i> 검색
                    </ButtonToggle>
                </Col>
            </Row>
            <Row className="pop-filter">
                <Col></Col>
                <Col>
                    <div className="form-control-wrap">
                        <Input type="number" name="intervalPop" id="intervalPop" placeholder="0" />
                        <span className="form-control-clear">
                            <span className="blind">지우기</span>
                        </span>
                    </div>
                    <span className="unit- unit-l">분전</span>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col xs="2" className="tit">
                    <Label for="guide">안내</Label>
                </Col>
                <Col>
                    <div className="form-control-wrap">
                        <Input type="text" id="guide" name="guide" />
                        <span className="form-control-clear">
                            <span className="blind">지우기</span>
                        </span>
                    </div>
                </Col>
            </Row>
            <Row className="pop-filter">
                <Col xs="3">
                    <Label for="array" className="blind">
                        정렬
                    </Label>
                    <Select options={condition} defaultValue={condition[0]} id="condition" name="condition" />
                </Col>
                <Col>
                    <Input type="text" name="search" id="search" placeholder="검색" className="inp-search" />
                </Col>
                <Col xs="3">
                    <ButtonToggle className="c-blue btn-w">
                        <i className="las la-search"></i> 검색
                    </ButtonToggle>
                </Col>
            </Row>
            <div className="tbl- ag-theme-balham">
                <AgGridReact rowData={popTable} defaultColDef={defaultColDef} style={{ height: "300px" }}>
                    <AgGridColumn field="순서" minWidth={60} maxWidth={70}></AgGridColumn>
                    <AgGridColumn field="아이디" minWidth={60} maxWidth={70}></AgGridColumn>
                    <AgGridColumn field="이름" minWidth={100}></AgGridColumn>
                    <AgGridColumn field="차량번호"></AgGridColumn>
                    <AgGridColumn field="전화번호" minWidth={150}></AgGridColumn>
                    <AgGridColumn field="당일수행콜"></AgGridColumn>
                    <AgGridColumn field="거리"></AgGridColumn>
                </AgGridReact>
            </div>
            <Row className="btn-area">
                <Col></Col>
                <Col>
                    <Button className="btn-w c-blue">적용</Button>
                </Col>
                <Col>
                    <Button className="btn-w">미적용</Button>
                </Col>
                <Col></Col>
            </Row>
        </div>
    </div>
);

export default Footer;
