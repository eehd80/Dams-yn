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

const workGroup = [
    { value: "용인교통약자", label: "용인교통약자" },
    { value: "dd", label: "dd" },
];
const year = [
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
    { value: "2018", label: "2018" },
];
const month = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
];
const workData = [
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
                                <h2 className="tit-sub">출퇴근 관리</h2>
                            </div>
                            <div className="lst-data">
                                {/* 검색 */}
                                <Form className="tbl-filter">
                                    <FormGroup>
                                        <ButtonToggle className="c-yellow mr-1">
                                            <i className="las la-sms"></i> 기존근무조설정
                                        </ButtonToggle>
                                        <Label for="workGroup" className="blind">
                                            기본근무조설정
                                        </Label>
                                        <Select options={workGroup} defaultValue={workGroup[0]} id="use" name="use" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="year" className="blind">
                                            년도 선택
                                        </Label>
                                        <Select options={year} defaultValue={year[0]} id="year" name="year" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="month" className="blind">
                                            월 선택
                                        </Label>
                                        <Select options={month} defaultValue={month[0]} id="month" name="month" />
                                    </FormGroup>

                                    <div className="btn-group2">
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
