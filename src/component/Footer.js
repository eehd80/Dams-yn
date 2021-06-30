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

const popTable = [
    { 순서: "1", 선택: "", 아이디: "3999", 이름: "오다다", 차량번호: "75로9874", 전화번호: "010-2222-3333", 당일수행콜: "55", 거리: "1km" },
];
const defaultColDef = {
    width: 100,
    resizable: true,
};

const timeBooking = [
    { value: "접수시간", label: "접수시간" },
    { value: "예약시간", label: "예약시간" },
    { value: "완료시간", label: "완료시간" },
];
const state = [
    { value: "취소", label: "취소" },
    { value: "완료", label: "완료" },
];
const callBooking = [
    { value: "예약콜포함", label: "예약콜포함" },
    { value: "예약콜만", label: "예약콜만" },
    { value: "예약콜제외", label: "예약콜제외" },
];
const availability = [
    { value: "전체", label: "전체" },
    { value: "사용", label: "사용" },
    { value: "미사용", label: "미사용" },
];
const disabilityType = [
    { value: "장기요양", label: "장기요양" },
    { value: "지체", label: "지체" },
];
const disabilityGrade = [
    { value: "등급외", label: "등급외" },
    { value: "6급", label: "6급" },
    { value: "7급", label: "7급" },
];
const gender = [
    { value: "남자", label: "남자" },
    { value: "여자", label: "여자" },
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
const positionPop = [
    { value: "관내", label: "관내" },
    { value: "비관내", label: "비관내" },
];
const approval = [
    { value: "승인대기", label: "승인대기" },
    { value: "승인", label: "승인" },
    { value: "거부", label: "거부" },
];
const userTarget = [
    { value: "노약자", label: "노약자" },
    { value: "지체", label: "지체" },
    { value: "장기요양", label: "장기요양" },
    { value: "뇌병변", label: "뇌병변" },
    { value: "지체성장애", label: "지체성장애" },
    { value: "장기요양", label: "장기요양" },
];
const wheelchair = [
    { value: "미사용", label: "미사용" },
    { value: "자동", label: "자동" },
    { value: "수동", label: "수동" },
    { value: "보행보조기구", label: "보행보조기구" },
];
const sex = [
    { value: "남성", label: "남성" },
    { value: "여성", label: "여성" },
];
const communication = [
    { value: "가능", label: "가능" },
    { value: "불가능", label: "불가능" },
];
const assistant = [
    { value: "없음", label: "없음" },
    { value: "있음", label: "있음" },
];
const help = [
    { value: "완전도움", label: "완전도움" },
    { value: "도움", label: "도움" },
];

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
                <Col xs="2" className="tit">
                    <Label for="namePop">고객명</Label>
                </Col>
                <Col>
                    <div className="form-control-wrap">
                        <Input type="text" name="namePop" id="namePop" />
                        <span className="form-control-clear">
                            <span className="blind">지우기</span>
                        </span>
                    </div>
                </Col>
                <Col xs="2" className="tit">
                    <Label for="idPop">WebID</Label>
                </Col>
                <Col>
                    <div className="form-control-wrap">
                        <Input type="text" name="idPop" id="idPop" />
                        <span className="form-control-clear">
                            <span className="blind">지우기</span>
                        </span>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs="2" className="tit">
                    <Label for="phonePop">핸드폰번호</Label>
                </Col>
                <Col>
                    <div className="form-control-wrap">
                        <NumberFormat format="###-####-####" id="phonePop" name="phonePop" className="form-control" />
                        <span className="form-control-clear">
                            <span className="blind">지우기</span>
                        </span>
                    </div>
                </Col>
                <Col xs="2" className="tit">
                    <Label for="telPop">일반전화</Label>
                </Col>
                <Col>
                    <div className="form-control-wrap">
                        <NumberFormat format="###-####-####" id="telPop" name="telPop" className="form-control" />
                        <span className="form-control-clear">
                            <span className="blind">지우기</span>
                        </span>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs="2" className="tit">
                    <Label for="userTargetPop">이용대상자 유형1</Label> <span className="ico-c">필수</span>
                </Col>
                <Col>
                    <Select options={userTarget} defaultValue={userTarget[0]} id="userTargetPop" name="userTargetPop" />
                </Col>
                <Col xs="2" className="tit">
                    <Label for="userTargetPop2">이용대상자 유형2</Label>
                </Col>
                <Col>
                    <Select options={userTarget2} defaultValue={userTarget2[0]} id="userTargetPop2" name="userTargetPop2" />
                </Col>
            </Row>
            <Row>
                <Col xs="2" className="tit">
                    접수서류
                </Col>
                <Col className="justify-content-start align-items-center">
                    <FormGroup check inline>
                        <Input type="checkbox" id="paperPop1" name="paperPop1" />
                        <Label for="paperPop1"> 심사신청서 </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input type="checkbox" id="paperPop2" name="paperPop2" />
                        <Label for="paperPop2">이용동의서</Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input type="checkbox" id="paperPop3" name="paperPop3" />
                        <Label for="paperPop3">복지카드 및 신분증사본</Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input type="checkbox" id="paperPop4" name="paperPop4" />
                        <Label for="paperPop4">진단서</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs="2" className="tit">
                    <FormGroup check>
                        <Input type="checkbox" id="booking" /> <Label for="booking">예약</Label>
                    </FormGroup>
                </Col>
                <Col>
                    <DatePickerButton />
                </Col>
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
            <Row>
                <Col xs="2" className="tit">
                    <Label for="usePop">비고</Label>
                </Col>
                <Col>
                    <Input type="textarea" name="text" id="etcQA" style={{ height: "100px" }} />
                </Col>
            </Row>
            <Row>
                <Col xs="2" className="tit">
                    <Label for="addressPop">주소</Label> <span className="ico-c">필수</span>
                </Col>
                <Col xs="5">
                    <Input type="text" name="addressPop" id="addressPop" />
                    <Button className="btn-pop">주소검색</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={{ offset: "2", size: "10" }}>
                    <Input type="text" name="addressPop2" id="addressPop2" />
                </Col>
            </Row>
            <Row>
                <Col xs={{ offset: "2", size: "10" }}>
                    <div className="form-control-wrap">
                        <Input type="text" name="addressPop3" id="addressPop3" placeholder="주소상세" />
                        <span className="form-control-clear">
                            <span className="blind">지우기</span>
                        </span>
                    </div>
                </Col>
            </Row>
            <div className="tbl- ag-theme-balham">
                <AgGridReact rowData={popTable} defaultColDef={defaultColDef} style={{ height: "300px" }}>
                    <AgGridColumn field="순서" minWidth={60} maxWidth={70}></AgGridColumn>
                    <AgGridColumn field="선택" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
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
