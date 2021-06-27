import React, { Component } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DatePickerButton from "../component/DatePicker";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { Row, Col, Button, ButtonToggle, Form, FormGroup, Label, Input } from "reactstrap";

import Header from "../component/Header";
import Receive from "../component/Receive";
import Map from "../component/Map";

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

class Main extends Component {
    render() {
        return (
            <div className="wrap">
                <Header />
                <div id="main">
                    <Receive />
                    <div className="contents">
                        <Map />
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

                            {/* 예약콜로 수정 */}
                            <div className="layer-" style={{ top: "200px", left: "50px", width: "500px", transform: "translate(0,0)" }}>
                                <div className="head-layer">
                                    <h3>예약콜로 수정</h3>
                                </div>
                                <div className="cont-layer form-wrap">
                                    <Row>
                                        <Col xs="3" className="tit">
                                            <Label for="resPop">예약일</Label>
                                        </Col>
                                        <Col>
                                            <DatePickerButton />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="3" className="tit">
                                            <Label for="intervalPop">배차제한시간</Label>
                                        </Col>
                                        <Col>
                                            <div className="form-control-wrap">
                                                <Input type="number" name="intervalPop" id="intervalPop" placeholder="0" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                            <span className="wav-">분전</span>
                                        </Col>
                                        <Col>
                                            <div className="form-control-wrap">
                                                <Input type="number" name="intervalPop2" id="intervalPop2" placeholder="30" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                            <span className="wav-">분후</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="3" className="tit">
                                            <Label for="statePop">등록구분</Label>
                                        </Col>
                                        <Col>
                                            <Select
                                                isMulti
                                                options={state}
                                                id="statePop"
                                                name="statePop"
                                                placeholder="상태조건"
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="btn-area">
                                        <Col></Col>
                                        <Col>
                                            <Button className="btn-w c-blue">저장</Button>
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

                            {/* 차량검색 */}
                            <div className="layer-" style={{ top: "200px", left: "570px", width: "500px", transform: "translate(0,0)" }}>
                                <div className="head-layer">
                                    <h3>차량검색</h3>
                                </div>
                                <div className="cont-layer form-wrap">
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
                                            <ButtonToggle className="btn-w">
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
                                <Button className="btn-close">
                                    <i className="las la-times"></i>
                                    <span className="blind">닫기</span>
                                </Button>
                            </div>

                            {/* 실패/취소 사유선택 */}
                            <div className="layer-" style={{ top: "500px", left: "50px", width: "500px", transform: "translate(0,0)" }}>
                                <div className="head-layer">
                                    <h3>실패/취소 사유선택</h3>
                                </div>
                                <div className="cont-layer form-wrap">
                                    <Row>
                                        <Col xs="2" className="tit">
                                            <Label for="intervalPop">코드</Label>
                                        </Col>
                                        <Col>
                                            <Input type="text" name="intervalPop" id="intervalPop" placeholder="(1) 고객취소" />
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
                                            <Label for="guide">취소 내용</Label>
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
                                    <Row>
                                        <Col>
                                            <span className="blind">취소 내용</span>
                                            <Input
                                                type="textarea"
                                                name="text"
                                                id="etcQA"
                                                placeholder="기타문의사항"
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
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default Main;
