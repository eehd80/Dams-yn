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
        구분: "앱",
        상태: "보류",
        배차차량: "미확인",
        고객명: "오다다",
        승차위치: "나는 내용이다. 나는 내용이다.",
        하차위치: "청량리역",
        배차예정시간: "2021-05-06 오후 5:49:31",
        이용예정시간: "2021-05-06 오후 5:49:31",
        배차제한시간: "2021-05-06 오후 5:49:31",
        고객회신번호: "010-2222-3333",
        고객전화번호: "010-2222-3333",
        장애종류: "6급",
        동행인: "유",
        접수시간: "2021-05-06 오후 5:49:31",
        배차시간: "5시간",
        배차자: "신승훈",
    },
    {
        구분: "앱",
        상태: "대기",
        배차차량: "미확인",
        고객명: "오다다",
        승차위치: "나는 내용이다. 나는 내용이다.",
        하차위치: "청량리역",
        배차예정시간: "2021-05-06 오후 5:49:31",
        이용예정시간: "2021-05-06 오후 5:49:31",
        배차제한시간: "2021-05-06 오후 5:49:31",
        고객회신번호: "010-2222-3333",
        고객전화번호: "010-2222-3333",
        장애종류: "6급",
        동행인: "유",
        접수시간: "2021-05-06 오후 5:49:31",
        배차시간: "5시간",
        배차자: "신승훈",
    },
    {
        구분: "앱",
        상태: "보류",
        배차차량: "미확인",
        고객명: "오다다",
        승차위치: "나는 내용이다. 나는 내용이다.",
        하차위치: "청량리역",
        배차예정시간: "2021-05-06 오후 5:49:31",
        이용예정시간: "2021-05-06 오후 5:49:31",
        배차제한시간: "2021-05-06 오후 5:49:31",
        고객회신번호: "010-2222-3333",
        고객전화번호: "010-2222-3333",
        장애종류: "6급",
        동행인: "유",
        접수시간: "2021-05-06 오후 5:49:31",
        배차시간: "5시간",
        배차자: "신승훈",
    },
    {
        구분: "앱",
        상태: "보류",
        배차차량: "미확인",
        고객명: "오다다",
        승차위치: "나는 내용이다. 나는 내용이다.",
        하차위치: "청량리역",
        배차예정시간: "2021-05-06 오후 5:49:31",
        이용예정시간: "2021-05-06 오후 5:49:31",
        배차제한시간: "2021-05-06 오후 5:49:31",
        고객회신번호: "010-2222-3333",
        고객전화번호: "010-2222-3333",
        장애종류: "6급",
        동행인: "유",
        접수시간: "2021-05-06 오후 5:49:31",
        배차시간: "5시간",
        배차자: "신승훈",
    },
    {
        구분: "앱",
        상태: "보류",
        배차차량: "미확인",
        고객명: "오다다",
        승차위치: "나는 내용이다. 나는 내용이다.",
        하차위치: "청량리역",
        배차예정시간: "2021-05-06 오후 5:49:31",
        이용예정시간: "2021-05-06 오후 5:49:31",
        배차제한시간: "2021-05-06 오후 5:49:31",
        고객회신번호: "010-2222-3333",
        고객전화번호: "010-2222-3333",
        장애종류: "6급",
        동행인: "유",
        접수시간: "2021-05-06 오후 5:49:31",
        배차시간: "5시간",
        배차자: "신승훈",
    },
    {
        구분: "앱",
        상태: "보류",
        배차차량: "미확인",
        고객명: "오다다",
        승차위치: "나는 내용이다. 나는 내용이다.",
        하차위치: "청량리역",
        배차예정시간: "2021-05-06 오후 5:49:31",
        이용예정시간: "2021-05-06 오후 5:49:31",
        배차제한시간: "2021-05-06 오후 5:49:31",
        고객회신번호: "010-2222-3333",
        고객전화번호: "010-2222-3333",
        장애종류: "6급",
        동행인: "유",
        접수시간: "2021-05-06 오후 5:49:31",
        배차시간: "5시간",
        배차자: "신승훈",
    },
    {
        구분: "앱",
        상태: "보류",
        배차차량: "미확인",
        고객명: "오다다",
        승차위치: "나는 내용이다. 나는 내용이다.",
        하차위치: "청량리역",
        배차예정시간: "2021-05-06 오후 5:49:31",
        이용예정시간: "2021-05-06 오후 5:49:31",
        배차제한시간: "2021-05-06 오후 5:49:31",
        고객회신번호: "010-2222-3333",
        고객전화번호: "010-2222-3333",
        장애종류: "6급",
        동행인: "유",
        접수시간: "2021-05-06 오후 5:49:31",
        배차시간: "5시간",
        배차자: "신승훈",
    },
    {
        구분: "앱",
        상태: "보류",
        배차차량: "미확인",
        고객명: "오다다",
        승차위치: "나는 내용이다. 나는 내용이다.",
        하차위치: "청량리역",
        배차예정시간: "2021-05-06 오후 5:49:31",
        이용예정시간: "2021-05-06 오후 5:49:31",
        배차제한시간: "2021-05-06 오후 5:49:31",
        고객회신번호: "010-2222-3333",
        고객전화번호: "010-2222-3333",
        장애종류: "6급",
        동행인: "유",
        접수시간: "2021-05-06 오후 5:49:31",
        배차시간: "5시간",
        배차자: "신승훈",
    },
    {
        구분: "앱",
        상태: "보류",
        배차차량: "미확인",
        고객명: "오다다",
        승차위치: "나는 내용이다. 나는 내용이다.",
        하차위치: "청량리역",
        배차예정시간: "2021-05-06 오후 5:49:31",
        이용예정시간: "2021-05-06 오후 5:49:31",
        배차제한시간: "2021-05-06 오후 5:49:31",
        고객회신번호: "010-2222-3333",
        고객전화번호: "010-2222-3333",
        장애종류: "6급",
        동행인: "유",
        접수시간: "2021-05-06 오후 5:49:31",
        배차시간: "5시간",
        배차자: "신승훈",
    },
    {
        구분: "앱",
        상태: "보류",
        배차차량: "미확인",
        고객명: "오다다",
        승차위치: "나는 내용이다. 나는 내용이다.",
        하차위치: "청량리역",
        배차예정시간: "2021-05-06 오후 5:49:31",
        이용예정시간: "2021-05-06 오후 5:49:31",
        배차제한시간: "2021-05-06 오후 5:49:31",
        고객회신번호: "010-2222-3333",
        고객전화번호: "010-2222-3333",
        장애종류: "6급",
        동행인: "유",
        접수시간: "2021-05-06 오후 5:49:31",
        배차시간: "5시간",
        배차자: "신승훈",
    },
];

const defaultColDef = {
    width: 100,
    resizable: true,
};

const timeSearch = [
    { value: "이용예정시간", label: "이용예정시간" },
    { value: "접수시간", label: "접수시간" },
];
const callAll = [
    { value: "즉시콜", label: "즉시콜" },
    { value: "예약콜", label: "예약콜" },
];
const condition = [
    { value: "차량ID", label: "차량ID" },
    { value: "고객명", label: "고객명" },
    { value: "고객전화", label: "고객전화" },
    { value: "회신번호", label: "회신번호" },
    { value: "승차위치", label: "승차위치" },
    { value: "하차위치", label: "하차위치" },
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
                        <div id="Memo" className="main">
                            <div className="tit-sub-wrap">
                                <h2 className="tit-sub">웹 예약콜</h2>
                            </div>

                            {/* 검색 */}
                            <Form className="tbl-filter">
                                <Row>
                                    <Col xs="1">
                                        <Label htmlFor="timeSearch" className="blind">
                                            검색시간조건
                                        </Label>
                                        <Select options={timeSearch} id="timeSearch" name="timeSearch" placeholder="검색시간조건" />
                                    </Col>
                                    <Col xs="3" className="d-flex">
                                        <DatePickerButton /> <span className="wav-">~</span> <DatePickerButton />
                                    </Col>
                                    <Col xs="1">
                                        <FormGroup>
                                            <Label htmlFor="callAll" className="blind">
                                                전체콜
                                            </Label>
                                            <Select options={callAll} id="callAll" name="callAll" placeholder="전체콜" />
                                        </FormGroup>
                                    </Col>
                                    <Col xs="1">
                                        <FormGroup>
                                            <Label htmlFor="condition" className="blind">
                                                조회조건
                                            </Label>
                                            <Select options={condition} id="condition" name="condition" placeholder="조회조건" />
                                        </FormGroup>
                                    </Col>
                                    <Col xs="2">
                                        <Input type="text" name="search" id="search" placeholder="검색" />
                                    </Col>

                                    <Col xs="1">
                                        <ButtonToggle color="primary" className="btn-w">
                                            <i className="las la-search"></i> 검색
                                        </ButtonToggle>
                                    </Col>
                                    <Col xs="1">
                                        <ButtonToggle className="btn-w btn-excel">
                                            <i className="las la-file-excel"></i> 엑셀
                                        </ButtonToggle>
                                    </Col>
                                </Row>
                            </Form>

                            {/* 리스트 */}
                            <div className="lst-memo">
                                <h3 className="blind">웹예약콜 리스트</h3>
                                <div className="tbl- tbl-type1 tbl-call ag-theme-balham" style={{ height: "300px" }}>
                                    <AgGridReact
                                        rowData={webCall}
                                        defaultColDef={defaultColDef}
                                        enableRangeSelection={true}
                                        allowContextMenuWithControlKey={true}
                                    >
                                        <AgGridColumn field="구분" minWidth={60} maxWidth={70}></AgGridColumn>
                                        <AgGridColumn field="상태"></AgGridColumn>
                                        <AgGridColumn field="배차차량"></AgGridColumn>
                                        <AgGridColumn field="고객명" minWidth={100}></AgGridColumn>
                                        <AgGridColumn field="승차위치" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="하차위치" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="배차예정시간" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="이용예정시간" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="배차제한시간" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="고객회신번호" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="고객전화번호" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="장애종류"></AgGridColumn>
                                        <AgGridColumn field="동행인"></AgGridColumn>
                                        <AgGridColumn field="접수시간" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="배차시간"></AgGridColumn>
                                        <AgGridColumn field="배차자"></AgGridColumn>
                                    </AgGridReact>
                                </div>
                            </div>

                            {/* 등록 */}
                            <div className="regi-memo form-wrap">
                                <h3 className="blind">메모 등록</h3>
                                <div className="btn-util">
                                    <Button color="secondary">
                                        <i className="las la-check"></i> 확인
                                    </Button>
                                    <Button className="c-yellow">
                                        <i className="las la-save"></i> 저장
                                    </Button>
                                    <Button color="danger">
                                        <i className="las la-times"></i> 취소
                                    </Button>
                                </div>
                                <Row>
                                    <Col xs="1" className="tit-">
                                        제목
                                    </Col>
                                    <Col xs="2">
                                        <div className="form-control-wrap">
                                            <NumberFormat
                                                format="###-####-####"
                                                id="receiveNum"
                                                name="receiveNum"
                                                className="form-control"
                                            />
                                            <span className="form-control-clear">
                                                <span className="blind">지우기</span>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={{ size: 1, offset: 1 }} className="tit-">
                                        <FormGroup check>
                                            <Input type="checkbox" id="shuttle" />
                                            <Label check htmlFor="shuttle">
                                                알람일자
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="2">
                                        <DatePickerButton />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="1" className="tit-">
                                        내용
                                    </Col>
                                    <Col>
                                        <Input type="textarea" name="text" id="memoCont" />
                                    </Col>
                                </Row>
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
