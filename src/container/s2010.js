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
                                <h2 className="tit-sub">위치정보관리</h2>
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
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default Main;
