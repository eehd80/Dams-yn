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
const availability = [
    { value: "전체", label: "전체" },
    { value: "사용", label: "사용" },
    { value: "미사용", label: "미사용" },
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
                                <h2 className="tit-sub">기사관리</h2>
                            </div>
                            <div className="lst-data">
                                {/* 검색 */}
                                <Form className="tbl-filter">
                                    <FormGroup>
                                        <Label for="use" className="blind">
                                            사용여부
                                        </Label>
                                        <Select options={use} defaultValue={use[0]} id="use" name="use" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="condition" className="blind">
                                            조회조건
                                        </Label>
                                        <Select options={condition} defaultValue={condition[0]} id="condition" name="condition" />
                                    </FormGroup>
                                    <Input type="text" name="search" id="search" placeholder="검색" className="inp-search" />
                                    <div className="btn-group2">
                                        <ButtonToggle className="c-yellow">
                                            <i className="las la-sms"></i> SMS 전송
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
                                        <AgGridColumn field="번호" minWidth={60} maxWidth={70}></AgGridColumn>
                                        <AgGridColumn field="선택" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
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

                            {/* layer-기사등록 */}
                            <div className="layer-" style={{ top: "200px", left: "40px", width: "700px", transform: "translate(0,0)" }}>
                                <div className="head-layer">
                                    <h3>기사등록</h3>
                                </div>
                                <div className="cont-layer form-wrap">
                                    <Row>
                                        <Col className="tit">
                                            <label for="namePop">기사명</label>
                                        </Col>
                                        <Col xs="4">
                                            <div className="form-control-wrap">
                                                <Input type="text" name="namePop" id="namePop" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                        </Col>
                                        <Col className="tit">
                                            <Label for="birthPop">생년월일</Label>
                                        </Col>
                                        <Col xs="4">
                                            <div className="form-control-wrap">
                                                <NumberFormat
                                                    format="######"
                                                    id="birthPop"
                                                    name="birthPop"
                                                    className="form-control"
                                                    placeholder="생년월일 6자리"
                                                />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="tit">
                                            <label for="identiPop">기사인식번호</label>
                                        </Col>
                                        <Col xs="4">
                                            <div className="form-control-wrap">
                                                <Input type="text" name="identiPop" id="identiPop" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                            <Button className="btn-pop">중복검사</Button>
                                        </Col>
                                        <Col className="tit">
                                            <Label for="telPop">추가연락처</Label>
                                        </Col>
                                        <Col xs="4">
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
                                    <Row>
                                        <Col xs="2" className="tit">
                                            <label for="availabilityPop">사용여부</label>
                                        </Col>
                                        <Col xs="4">
                                            <Select
                                                options={availability}
                                                defaultValue={availability[0]}
                                                id="availabilityPop"
                                                name="availabilityPop"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="tit">
                                            <Label for="registPop">등록일</Label>
                                        </Col>
                                        <Col xs="4">
                                            <DatePickerButton />
                                        </Col>
                                        <Col className="tit">
                                            <Label for="useStartPop">사용시작일</Label>
                                        </Col>
                                        <Col xs="4">
                                            <DatePickerButton />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="2" className="tit">
                                            <label for="notePop">비고</label>
                                        </Col>
                                        <Col>
                                            <Input type="textarea" name="notePop" id="notePop" style={{ height: "100px" }} />
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
