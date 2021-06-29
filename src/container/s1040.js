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
        요금: "10,000원",
        완료시간: "2021-05-06 오후 5:49:31",
        배차기사명: "오다다",
        고객명: "아다다",
        승차위치: "강남역",
        하차위치: "청량리역",
        배차예정시간: "2021-05-06 오후 5:49:31",
        이용예정시간: "2021-05-06 오후 5:49:31",
        고객회신번호: "010-2222-3333",
        고객전화번호: "010-2222-3333",
        접수시간: "2021-05-06 오후 5:49:31",
        접수자: "신승훈",
        접수자ID: "shin888",
        배차시간: "5시간",
        배차차: "카니발",
        승차시간: "2021-05-06 오후 5:49:31",
        하차시간: "2021-05-06 오후 5:49:31",
        취소시간: "2021-05-06 오후 5:49:31",
        취소자: "신승훈",
        취소사유: "일정 변경",
        비고: "비고 넣어주삼",
        차량단말기번호: "6587415",
        기사전화번호: "010-2222-3333",
        차량번호: "45노 2345",
        배차경과시간: "5시간",
        상담원메모: "동행인이 있는데 약속 시간에 조금 늦을 수 있다고 함",
        승차경과시간: "5시간",
        미터요금: "7,000원",
        기타요금: "2,000원",
        통행요금: "1,000원",
        주차요금: "0원",
        요금합계: "10,000원",
    },
    {
        구분: "앱",
        상태: "보류",
        배차차량: "미확인",
        요금: "10,000원",
        완료시간: "2021-05-06 오후 5:49:31",
        배차기사명: "오다다",
        고객명: "아다다",
        승차위치: "강남역",
        하차위치: "청량리역",
        배차예정시간: "2021-05-06 오후 5:49:31",
        이용예정시간: "2021-05-06 오후 5:49:31",
        고객회신번호: "010-2222-3333",
        고객전화번호: "010-2222-3333",
        접수시간: "2021-05-06 오후 5:49:31",
        접수자: "신승훈",
        접수자ID: "shin888",
        배차시간: "5시간",
        배차차: "카니발",
        승차시간: "2021-05-06 오후 5:49:31",
        하차시간: "2021-05-06 오후 5:49:31",
        취소시간: "2021-05-06 오후 5:49:31",
        취소자: "신승훈",
        취소사유: "일정 변경",
        비고: "비고 넣어주삼",
        차량단말기번호: "6587415",
        기사전화번호: "010-2222-3333",
        차량번호: "45노 2345",
        배차경과시간: "5시간",
        상담원메모: "동행인이 있는데 약속 시간에 조금 늦을 수 있다고 함",
        승차경과시간: "5시간",
        미터요금: "7,000원",
        기타요금: "2,000원",
        통행요금: "1,000원",
        주차요금: "0원",
        요금합계: "10,000원",
    },
    {
        구분: "앱",
        상태: "보류",
        배차차량: "미확인",
        요금: "10,000원",
        완료시간: "2021-05-06 오후 5:49:31",
        배차기사명: "오다다",
        고객명: "아다다",
        승차위치: "강남역",
        하차위치: "청량리역",
        배차예정시간: "2021-05-06 오후 5:49:31",
        이용예정시간: "2021-05-06 오후 5:49:31",
        고객회신번호: "010-2222-3333",
        고객전화번호: "010-2222-3333",
        접수시간: "2021-05-06 오후 5:49:31",
        접수자: "신승훈",
        접수자ID: "shin888",
        배차시간: "5시간",
        배차차: "카니발",
        승차시간: "2021-05-06 오후 5:49:31",
        하차시간: "2021-05-06 오후 5:49:31",
        취소시간: "2021-05-06 오후 5:49:31",
        취소자: "신승훈",
        취소사유: "일정 변경",
        비고: "비고 넣어주삼",
        차량단말기번호: "6587415",
        기사전화번호: "010-2222-3333",
        차량번호: "45노 2345",
        배차경과시간: "5시간",
        상담원메모: "동행인이 있는데 약속 시간에 조금 늦을 수 있다고 함",
        승차경과시간: "5시간",
        미터요금: "7,000원",
        기타요금: "2,000원",
        통행요금: "1,000원",
        주차요금: "0원",
        요금합계: "10,000원",
    },
    {
        구분: "앱",
        상태: "보류",
        배차차량: "미확인",
        요금: "10,000원",
        완료시간: "2021-05-06 오후 5:49:31",
        배차기사명: "오다다",
        고객명: "아다다",
        승차위치: "강남역",
        하차위치: "청량리역",
        배차예정시간: "2021-05-06 오후 5:49:31",
        이용예정시간: "2021-05-06 오후 5:49:31",
        고객회신번호: "010-2222-3333",
        고객전화번호: "010-2222-3333",
        접수시간: "2021-05-06 오후 5:49:31",
        접수자: "신승훈",
        접수자ID: "shin888",
        배차시간: "5시간",
        배차차: "카니발",
        승차시간: "2021-05-06 오후 5:49:31",
        하차시간: "2021-05-06 오후 5:49:31",
        취소시간: "2021-05-06 오후 5:49:31",
        취소자: "신승훈",
        취소사유: "일정 변경",
        비고: "비고 넣어주삼",
        차량단말기번호: "6587415",
        기사전화번호: "010-2222-3333",
        차량번호: "45노 2345",
        배차경과시간: "5시간",
        상담원메모: "동행인이 있는데 약속 시간에 조금 늦을 수 있다고 함",
        승차경과시간: "5시간",
        미터요금: "7,000원",
        기타요금: "2,000원",
        통행요금: "1,000원",
        주차요금: "0원",
        요금합계: "10,000원",
    },
    {
        구분: "앱",
        상태: "보류",
        배차차량: "미확인",
        요금: "10,000원",
        완료시간: "2021-05-06 오후 5:49:31",
        배차기사명: "오다다",
        고객명: "아다다",
        승차위치: "강남역",
        하차위치: "청량리역",
        배차예정시간: "2021-05-06 오후 5:49:31",
        이용예정시간: "2021-05-06 오후 5:49:31",
        고객회신번호: "010-2222-3333",
        고객전화번호: "010-2222-3333",
        접수시간: "2021-05-06 오후 5:49:31",
        접수자: "신승훈",
        접수자ID: "shin888",
        배차시간: "5시간",
        배차차: "카니발",
        승차시간: "2021-05-06 오후 5:49:31",
        하차시간: "2021-05-06 오후 5:49:31",
        취소시간: "2021-05-06 오후 5:49:31",
        취소자: "신승훈",
        취소사유: "일정 변경",
        비고: "비고 넣어주삼",
        차량단말기번호: "6587415",
        기사전화번호: "010-2222-3333",
        차량번호: "45노 2345",
        배차경과시간: "5시간",
        상담원메모: "동행인이 있는데 약속 시간에 조금 늦을 수 있다고 함",
        승차경과시간: "5시간",
        미터요금: "7,000원",
        기타요금: "2,000원",
        통행요금: "1,000원",
        주차요금: "0원",
        요금합계: "10,000원",
    },
    {
        구분: "앱",
        상태: "보류",
        배차차량: "미확인",
        요금: "10,000원",
        완료시간: "2021-05-06 오후 5:49:31",
        배차기사명: "오다다",
        고객명: "아다다",
        승차위치: "강남역",
        하차위치: "청량리역",
        배차예정시간: "2021-05-06 오후 5:49:31",
        이용예정시간: "2021-05-06 오후 5:49:31",
        고객회신번호: "010-2222-3333",
        고객전화번호: "010-2222-3333",
        접수시간: "2021-05-06 오후 5:49:31",
        접수자: "신승훈",
        접수자ID: "shin888",
        배차시간: "5시간",
        배차차: "카니발",
        승차시간: "2021-05-06 오후 5:49:31",
        하차시간: "2021-05-06 오후 5:49:31",
        취소시간: "2021-05-06 오후 5:49:31",
        취소자: "신승훈",
        취소사유: "일정 변경",
        비고: "비고 넣어주삼",
        차량단말기번호: "6587415",
        기사전화번호: "010-2222-3333",
        차량번호: "45노 2345",
        배차경과시간: "5시간",
        상담원메모: "동행인이 있는데 약속 시간에 조금 늦을 수 있다고 함",
        승차경과시간: "5시간",
        미터요금: "7,000원",
        기타요금: "2,000원",
        통행요금: "1,000원",
        주차요금: "0원",
        요금합계: "10,000원",
    },
    {
        구분: "앱",
        상태: "보류",
        배차차량: "미확인",
        요금: "10,000원",
        완료시간: "2021-05-06 오후 5:49:31",
        배차기사명: "오다다",
        고객명: "아다다",
        승차위치: "강남역",
        하차위치: "청량리역",
        배차예정시간: "2021-05-06 오후 5:49:31",
        이용예정시간: "2021-05-06 오후 5:49:31",
        고객회신번호: "010-2222-3333",
        고객전화번호: "010-2222-3333",
        접수시간: "2021-05-06 오후 5:49:31",
        접수자: "신승훈",
        접수자ID: "shin888",
        배차시간: "5시간",
        배차차: "카니발",
        승차시간: "2021-05-06 오후 5:49:31",
        하차시간: "2021-05-06 오후 5:49:31",
        취소시간: "2021-05-06 오후 5:49:31",
        취소자: "신승훈",
        취소사유: "일정 변경",
        비고: "비고 넣어주삼",
        차량단말기번호: "6587415",
        기사전화번호: "010-2222-3333",
        차량번호: "45노 2345",
        배차경과시간: "5시간",
        상담원메모: "동행인이 있는데 약속 시간에 조금 늦을 수 있다고 함",
        승차경과시간: "5시간",
        미터요금: "7,000원",
        기타요금: "2,000원",
        통행요금: "1,000원",
        주차요금: "0원",
        요금합계: "10,000원",
    },
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

const driverPop = [{ 기사명: "오다다", 기사ID: "ekjfijijdkf", 전화번호: "010-2222-3333" }];
const carSearchPop = [{ 아이디: "3999", 차량번호: "75로9874", 전화번호: "010-2222-3333" }];

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
                                <h2 className="tit-sub">콜검색</h2>
                            </div>
                            <div className="lst-data">
                                {/* 검색 */}
                                <Form className="tbl-filter">
                                    <FormGroup>
                                        <Label for="timeBooking" className="blind">
                                            예약시간
                                        </Label>
                                        <Select options={timeBooking} id="timeBooking" name="timeBooking" placeholder="예약시간" />
                                        <DatePickerButton /> <span className="wav- wav-right">~</span> <DatePickerButton />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="state" className="blind">
                                            상태
                                        </Label>
                                        <Select isMulti options={state} id="state" name="state" placeholder="상태" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="callBooking" className="blind">
                                            예약콜포함
                                        </Label>
                                        <Select
                                            options={callBooking}
                                            defaultValue={callBooking[0]}
                                            id="callBooking"
                                            name="callBooking"
                                            placeholder="예약콜포함"
                                        />
                                    </FormGroup>
                                    <FormGroup check>
                                        <Input type="checkbox" id="check" />
                                        <Label check for="check" className="mr-1">
                                            접수자
                                        </Label>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="condition" className="blind">
                                            조회조건
                                        </Label>
                                        <Select options={condition} id="condition" name="condition" placeholder="조회조건" />
                                    </FormGroup>
                                    <Input type="text" name="search" id="search" placeholder="검색" className="inp-search" />
                                    <div className="btn-group2">
                                        <ButtonToggle className="c-blue">
                                            <i className="las la-search"></i> 검색
                                        </ButtonToggle>
                                        <ButtonToggle className="c-green">
                                            <i className="las la-file-excel"></i> 엑셀
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
                                        <AgGridColumn field="구분" minWidth={60} maxWidth={70}></AgGridColumn>
                                        <AgGridColumn field="상태" minWidth={60} maxWidth={70}></AgGridColumn>
                                        <AgGridColumn field="배차차량"></AgGridColumn>
                                        <AgGridColumn field="요금"></AgGridColumn>
                                        <AgGridColumn field="완료시간" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="배차기사명"></AgGridColumn>
                                        <AgGridColumn field="고객명"></AgGridColumn>
                                        <AgGridColumn field="승차위치"></AgGridColumn>
                                        <AgGridColumn field="하차위치"></AgGridColumn>
                                        <AgGridColumn field="배차예정시간" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="이용예정시간" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="고객회신번호" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="고객전화번호" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="접수시간" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="접수자"></AgGridColumn>
                                        <AgGridColumn field="접수자ID"></AgGridColumn>
                                        <AgGridColumn field="배차시간"></AgGridColumn>
                                        <AgGridColumn field="배차차"></AgGridColumn>
                                        <AgGridColumn field="승차시간" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="하차시간" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="취소시간" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="취소자"></AgGridColumn>
                                        <AgGridColumn field="취소사유"></AgGridColumn>
                                        <AgGridColumn field="비고" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="차량단말기번호"></AgGridColumn>
                                        <AgGridColumn field="기사전화번호" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="차량번호"></AgGridColumn>
                                        <AgGridColumn field="배차경과시간"></AgGridColumn>
                                        <AgGridColumn field="상담원메모" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="승차경과시간"></AgGridColumn>
                                        <AgGridColumn field="미터요금"></AgGridColumn>
                                        <AgGridColumn field="기타요금"></AgGridColumn>
                                        <AgGridColumn field="통행요금"></AgGridColumn>
                                        <AgGridColumn field="주차요금"></AgGridColumn>
                                        <AgGridColumn field="요금합계"></AgGridColumn>
                                    </AgGridReact>
                                </div>
                            </div>
                            {/* 통계 표시 */}
                            <div className="wrap-stats">
                                <dl>
                                    <dt className="c-blue">완료</dt>
                                    <dd>117</dd>
                                </dl>
                                <dl>
                                    <dt className="c-red">취소</dt>
                                    <dd>109</dd>
                                </dl>
                                <dl>
                                    <dt className="c-yellow">접수</dt>
                                    <dd>226</dd>
                                </dl>
                                <dl>
                                    <dt className="c-green">배차</dt>
                                    <dd>151</dd>
                                </dl>
                            </div>

                            {/* 실패/취소 사유선택 */}
                            <div className="layer-" style={{ top: "200px", left: "50px", width: "500px", transform: "translate(0,0)" }}>
                                <div className="head-layer">
                                    <h3>실패/취소 사유선택</h3>
                                </div>
                                <div className="cont-layer form-wrap">
                                    <Row>
                                        <Col xs="2" className="tit">
                                            <Label for="cancleCodePop">코드</Label>
                                        </Col>
                                        <Col>
                                            <Input type="text" name="cancleCodePop" id="cancleCodePop" placeholder="(1) 고객취소" />
                                        </Col>
                                        <Col>
                                            <Select
                                                isMulti
                                                options={canclePop}
                                                id="canclePop"
                                                name="canclePop"
                                                placeholder="취소코드 선택"
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="2" className="tit">
                                            <Label for="cancleContPop">취소 내용</Label>
                                        </Col>
                                        <Col>
                                            <div className="form-control-wrap">
                                                <Input type="text" id="cancleContPop" name="cancleContPop" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <span className="blind">취소 내용</span>
                                            <Input
                                                type="textarea"
                                                name="text"
                                                id="etcQA"
                                                placeholder="상세내용"
                                                style={{ height: "100px" }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="btn-area">
                                        <Col></Col>
                                        <Col>
                                            <Button className="btn-w c-blue">적용</Button>
                                        </Col>
                                        <Col>
                                            <Button className="btn-w">취소</Button>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                </div>
                                <Button className="btn-close">
                                    <i className="las la-times"></i>
                                    <span className="blind">닫기</span>
                                </Button>
                            </div>

                            {/* 요금 입력 */}
                            <div className="layer-" style={{ top: "200px", left: "570px", width: "500px", transform: "translate(0,0)" }}>
                                <div className="head-layer">
                                    <h3>요금 입력</h3>
                                </div>
                                <div className="cont-layer form-wrap">
                                    <Row>
                                        <Col xs="2" className="tit">
                                            <Label for="vehicleOutPop">하차위치</Label>
                                        </Col>
                                        <Col>
                                            <div className="form-control-wrap">
                                                <Input type="text" id="vehicleOutPop" name="vehicleOutPop" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="2" className="tit">
                                            <Label for="distancePop">승하차지간거리</Label>
                                        </Col>
                                        <Col>
                                            <div className="form-control-wrap">
                                                <Input type="number" name="distancePop" id="distancePop" placeholder="0" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                            <span className="unit- unit-l">m</span>
                                        </Col>
                                        <Col xs="2" className="tit">
                                            <Label for="meteragePop">미터요금</Label>
                                        </Col>
                                        <Col>
                                            <div className="form-control-wrap">
                                                <Input type="number" name="meteragePop" id="meteragePop" placeholder="0" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                            <span className="unit- unit-l">원</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="2" className="tit">
                                            <Label for="passPop">통행요금</Label>
                                        </Col>
                                        <Col>
                                            <div className="form-control-wrap">
                                                <Input type="number" name="passPop" id="passPop" placeholder="0" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                            <span className="unit- unit-l">원</span>
                                        </Col>
                                        <Col xs="2" className="tit">
                                            <Label for="parkingPop">주차요금</Label>
                                        </Col>
                                        <Col>
                                            <div className="form-control-wrap">
                                                <Input type="number" name="parkingPop" id="parkingPop" placeholder="0" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                            <span className="unit- unit-l">원</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="2" className="tit">
                                            <Label for="etcPop">기타요금</Label>
                                        </Col>
                                        <Col>
                                            <div className="form-control-wrap">
                                                <Input type="number" name="etcPop" id="etcPop" placeholder="0" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                            <span className="unit- unit-l">원</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="2" className="tit c-yellow">
                                            <Label for="totalPop">합계</Label>
                                        </Col>
                                        <Col>
                                            <div className="form-control-wrap">
                                                <Input type="number" name="totalPop" id="totalPop" placeholder="0" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                            <span className="unit- unit-l">원</span>
                                        </Col>
                                    </Row>
                                    <Row className="btn-area">
                                        <Col></Col>
                                        <Col>
                                            <Button className="btn-w c-blue">적용</Button>
                                        </Col>
                                        <Col>
                                            <Button className="btn-w">취소</Button>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                </div>
                                <Button className="btn-close">
                                    <i className="las la-times"></i>
                                    <span className="blind">닫기</span>
                                </Button>
                            </div>

                            {/* 배차지정 */}
                            <div className="layer-" style={{ top: "560px", left: "50px", width: "650px", transform: "translate(0,0)" }}>
                                <div className="head-layer">
                                    <h3>배차지정</h3>
                                </div>
                                <div className="cont-layer form-wrap">
                                    <Row>
                                        <Col>
                                            <Input
                                                type="text"
                                                name="allocate1"
                                                id="allocate1"
                                                placeholder="배차기사"
                                                className="inp-search"
                                            />
                                        </Col>
                                        <Col>
                                            <Input
                                                type="text"
                                                name="allocate2"
                                                id="allocate2"
                                                placeholder="배차차량"
                                                className="inp-search"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="tbl- ag-theme-balham">
                                                <AgGridReact rowData={driverPop} defaultColDef={driverPop} style={{ height: "300px" }}>
                                                    <AgGridColumn field="기사명" minWidth={60} maxWidth={70}></AgGridColumn>
                                                    <AgGridColumn field="기사ID" minWidth={60} maxWidth={70}></AgGridColumn>
                                                    <AgGridColumn field="전화번호" minWidth={150}></AgGridColumn>
                                                </AgGridReact>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="tbl- ag-theme-balham">
                                                <AgGridReact
                                                    rowData={carSearchPop}
                                                    defaultColDef={defaultColDef}
                                                    style={{ height: "300px" }}
                                                >
                                                    <AgGridColumn field="차량번호"></AgGridColumn>
                                                    <AgGridColumn field="아이디" minWidth={60} maxWidth={70}></AgGridColumn>
                                                    <AgGridColumn field="전화번호" minWidth={150}></AgGridColumn>
                                                </AgGridReact>
                                            </div>
                                        </Col>
                                    </Row>

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
                                <Button className="btn-close">
                                    <i className="las la-times"></i>
                                    <span className="blind">닫기</span>
                                </Button>
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
