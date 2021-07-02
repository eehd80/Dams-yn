import React, { Component } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DatePickerButton from "../component/DatePicker";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { Row, Col, Button, ButtonToggle, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import Header from "../component/Header";
import Receive from "../component/Receive";
import Map from "../component/Map";

const sms = [
    { value: "사용", label: "사용" },
    { value: "미사용", label: "미사용" },
];
const condition = [
    { value: "차량번호", label: "차량번호" },
    { value: "차량ID", label: "차량ID" },
    { value: "전화번호", label: "전화번호" },
];
const company = [
    { value: "아이원맥스", label: "아이원맥스" },
    { value: "아이원맥스", label: "아이원맥스" },
];
const smsTarget = [
    { value: "고객", label: "고객" },
    { value: "고객", label: "고객" },
    { value: "고객", label: "고객" },
];
const bbsList = [
    {
        순서: "5",
        SMS대상: "고객",
        문구내용: "나는 제목이다 나는 제목이다 나는 제목이다 나는 제목이다 나는 제목이다.",
        업체명: "아이원맥스",
    },
    {
        순서: "5",
        SMS대상: "고객",
        문구내용: "나는 제목이다 나는 제목이다 나는 제목이다 나는 제목이다 나는 제목이다.",
        업체명: "아이원맥스",
    },
    {
        순서: "5",
        SMS대상: "고객",
        문구내용: "나는 제목이다 나는 제목이다 나는 제목이다 나는 제목이다 나는 제목이다.",
        업체명: "아이원맥스",
    },
    {
        순서: "5",
        SMS대상: "고객",
        문구내용: "나는 제목이다 나는 제목이다 나는 제목이다 나는 제목이다 나는 제목이다.",
        업체명: "아이원맥스",
    },
];

const defaultColDef = {
    width: 100,
    resizable: true,
};

class Main extends Component {
    render() {
        return (
            <div className="wrap">
                <Header />
                <div id="main">
                    <Receive />
                    <div className="contents">
                        <Map />
                        <div id="Memo" className="wrap-data">
                            <div className="tit-sub-wrap">
                                <h2 className="tit-sub">일자별 통계</h2>
                            </div>
                            <div className="lst-data">
                                {/* 검색 */}
                                <Form className="tbl-filter">
                                    <FormGroup>
                                        <Label for="sms" className="blind">
                                            일자선택
                                        </Label>
                                        <DatePickerButton /> <span className="wav- wav-right">~</span> <DatePickerButton />
                                    </FormGroup>
                                    <div className="btn-group2">
                                        <ButtonToggle className="">
                                            <i className="las la-search"></i> 검색
                                        </ButtonToggle>
                                        <ButtonToggle className="c-green">
                                            <i className="las la-file-excel"></i> 엑셀
                                        </ButtonToggle>
                                    </div>
                                </Form>
                                <div className="tbl- ag-theme-balham">
                                    <AgGridReact
                                        rowData={bbsList}
                                        defaultColDef={defaultColDef}
                                        enableRangeSelection={true}
                                        allowContextMenuWithControlKey={true}
                                    >
                                        <AgGridColumn field="일자" minWidth={150}>
                                            <AgGridColumn headerName="" field="" filter="agTextColumnFilter" />
                                        </AgGridColumn>
                                        <AgGridColumn field="회원수(명)" minWidth={150}>
                                            <AgGridColumn headerName="" field="" filter="agTextColumnFilter" />
                                        </AgGridColumn>
                                        <AgGridColumn field="콜 건수" width={400}>
                                            <AgGridColumn headerName="전체콜" field="전체콜" filter="agTextColumnFilter" />
                                            <AgGridColumn headerName="사전예약" field="사전예약" filter="agTextColumnFilter" />
                                            <AgGridColumn headerName="즉시콜" field="즉시콜" filter="agTextColumnFilter" />
                                            <AgGridColumn headerName="취소" field="취소" filter="agTextColumnFilter" />
                                            <AgGridColumn headerName="미배차" field="미배차" filter="agTextColumnFilter" />
                                        </AgGridColumn>
                                        <AgGridColumn field="운행 건수" width={400}>
                                            <AgGridColumn headerName="소개" field="소개" filter="agTextColumnFilter" />
                                            <AgGridColumn headerName="사전예약" field="사전예약" filter="agTextColumnFilter" />
                                            <AgGridColumn headerName="즉시예약" field="즉시예약" filter="agTextColumnFilter" />
                                        </AgGridColumn>
                                        <AgGridColumn field="운행거리(km)">
                                            <AgGridColumn headerName="" field="" filter="agTextColumnFilter" />
                                        </AgGridColumn>
                                        <AgGridColumn field="수입금(원)" rowSpan="2">
                                            <AgGridColumn headerName="" field="" filter="agTextColumnFilter" />
                                        </AgGridColumn>
                                    </AgGridReact>
                                </div>
                            </div>

                            {/* layer - SMS문구 등록 */}
                            <div className="layer-" style={{ top: "230px", left: "40px", width: "500px", transform: "translate(0,0)" }}>
                                <div className="head-layer">
                                    <h3>SMS문구 등록</h3>
                                </div>
                                <div className="cont-layer form-wrap">
                                    <Row>
                                        <Col xs="2" className="tit">
                                            <Label for="companyPop">업체명</Label>
                                        </Col>
                                        <Col>
                                            <Select options={company} defaultValue={company[0]} id="companyPop" name="companyPop" />
                                        </Col>
                                        <Col xs="2" className="tit">
                                            <Label for="smsTargetPop">SMS대상</Label>
                                        </Col>
                                        <Col>
                                            <Select options={smsTarget} defaultValue={smsTarget[0]} id="smsTargetPop" name="smsTargetPop" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup className="inp-txt">
                                                <Input
                                                    type="textarea"
                                                    name="text"
                                                    id="etcQA"
                                                    className="inp-blue"
                                                    style={{ height: "100px" }}
                                                    placeholder="SMS 내용 입력"
                                                />
                                                <div className="txt-byte">0 Byte</div>
                                            </FormGroup>
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
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default Main;
