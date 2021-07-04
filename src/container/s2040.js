import React, { useEffect, useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DatePickerButton from "../component/DatePicker";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { Row, Col, Button, ButtonToggle, Form, FormGroup, Label, Input } from "reactstrap";

import { Item, Menu, Separator, Submenu, useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import { getData } from "../api/data";
import TestRenderer from "../component/TestRenderer";

const defaultColDef = {
    width: 100,
    resizable: true,
};

const availability = [
    { value: "전체", label: "전체" },
    { value: "사용", label: "사용" },
    { value: "미사용", label: "미사용" },
];
const wheelchair = [
    { value: "자동", label: "자동" },
    { value: "수동", label: "수동" },
    { value: "미사용", label: "미사용" },
    { value: "보행보조기구", label: "보행보조기구" },
];
const disabilityType = [
    { value: "장기요양", label: "장기요양" },
    { value: "지체", label: "지체" },
];
const disabilityGrade = [
    { value: "6급", label: "6급" },
    { value: "7급", label: "7급" },
];
const communication = [
    { value: "가능", label: "가능" },
    { value: "불가능", label: "불가능" },
];
const gender = [
    { value: "남자", label: "남자" },
    { value: "여자", label: "여자" },
];
const condition = [
    { value: "고객명", label: "고객명" },
    { value: "고객접수번호", label: "고객접수번호" },
    { value: "고객전화번호", label: "고객전화번호" },
    { value: "휴대폰번호", label: "휴대폰번호" },
];
const positionPop = [
    { value: "관내", label: "관내" },
    { value: "비관내", label: "비관내" },
];

const MENU_ID = "dams-context";

const Current = (props) => {
    const [activeTab, setActiveTab] = useState("1");
    const { show } = useContextMenu({
        id: MENU_ID,
    });
    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState([]);

    function testContext(e) {}

    function handleItemClick({ event, props, triggerEvent, data }) {
        console.log(props);
    }

    const onGridReady = (params) => {
        getData().then(function (r) {
            setRowData(r);
        });
    };

    const tttt = function (e) {
        e.preventDefault();
    };

    return (
        <div className="wrap-data">
            <div className="tit-sub-wrap">
                <h2 className="tit-sub">고객관리</h2>
            </div>
            <div className="lst-data">
                {/* 검색 */}
                <Form className="tbl-filter">
                    <FormGroup>
                        <Label for="availability" className="blind">
                            사용여부
                        </Label>
                        <Select options={availability} id="availability" name="availability" placeholder="사용여부" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="wheelchair" className="blind">
                            휠체어
                        </Label>
                        <Select options={wheelchair} id="wheelchair" name="wheelchair" placeholder="휠체어" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="disabilityType" className="blind">
                            장애종류
                        </Label>
                        <Select options={disabilityType} id="disabilityType" name="disabilityType" placeholder="장애종류" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="disabilityGrade" className="blind">
                            장애등급
                        </Label>
                        <Select options={disabilityGrade} id="disabilityGrade" name="disabilityGrade" placeholder="장애등급" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="communication" className="blind">
                            소통여부
                        </Label>
                        <Select options={communication} id="communication" name="communication" placeholder="소통여부" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="gender" className="blind">
                            성별
                        </Label>
                        <Select options={gender} id="gender" name="gender" placeholder="성별" />
                    </FormGroup>
                </Form>
                <Form className="tbl-filter">
                    <FormGroup>
                        <Label for="condition" className="blind">
                            조회조건
                        </Label>
                        <Select options={condition} defaultValue={condition[0]} id="condition" name="condition" />
                    </FormGroup>
                    <Input type="text" name="search" id="search" placeholder="검색" className="inp-search" />
                    <FormGroup>
                        <Label for="useNumber">이용횟수</Label>
                        <Input type="number" name="useNumber" id="useNumber" placeholder="0" />
                        <span className="wav-">~</span>
                        <Input type="number" name="useNumber2" id="useNumber2" placeholder="999,999" />
                    </FormGroup>
                    <div className="btn-group2">
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
                        frameworkComponents={{
                            testRenderer: TestRenderer,
                        }}
                        rowData={rowData}
                        defaultColDef={defaultColDef}
                        allowContextMenuWithControlKey={true}
                        enableRangeSelection={true}
                        onCellContextMenu={testContext}
                        onGridReady={onGridReady}
                    >
                        <AgGridColumn field="번호" minWidth={60} maxWidth={70} cellRenderer="testRenderer"></AgGridColumn>
                        <AgGridColumn field="고객명"></AgGridColumn>
                        <AgGridColumn field="고객접수번호"></AgGridColumn>
                        <AgGridColumn field="유효기간" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="장애종류"></AgGridColumn>
                        <AgGridColumn field="장애등급"></AgGridColumn>
                        <AgGridColumn field="휠체어"></AgGridColumn>
                        <AgGridColumn field="소통여부"></AgGridColumn>
                        <AgGridColumn field="생년월일" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="성별"></AgGridColumn>
                        <AgGridColumn field="고객전화번호" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="휴대폰번호" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="추가전화번호" minWidth={150}></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>

            {/* layer-고객등록 */}
            <div className="layer-" style={{ top: "250px", left: "40px", width: "700px", transform: "translate(0,0)" }}>
                <div className="head-layer">
                    <h3>고객 등록</h3>
                </div>
                <div className="cont-layer form-wrap">
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
                            <Label for="availabilityPop">사용여부</Label>
                        </Col>
                        <Col>
                            <Select options={availability} defaultValue={availability[0]} id="availabilityPop" name="availabilityPop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="birthPop">생년월일/성별</Label>
                        </Col>
                        <Col>
                            <DatePickerButton />
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="positionPop">거주위치</Label>
                        </Col>
                        <Col>
                            <Select options={positionPop} defaultValue={positionPop[0]} id="positionPop" name="positionPop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="receiptPop">고객접수번호</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="receiptPop" id="receiptPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <Button className="btn-pop">중복검사</Button>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="reptelPop">대표자전화</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <NumberFormat format="###-####-####" id="reptelPop" name="reptelPop" className="form-control" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <Button className="btn-pop">중복검사</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="phonePop">휴대폰번호</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <NumberFormat format="###-####-####" id="phonePop" name="phonePop" className="form-control" />

                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="addressPop">주소</Label>
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
                            <Label for="addtelPop1">추가전화1</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <NumberFormat format="###-####-####" id="addtelPop1" name="addtelPop1" className="form-control" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="notePop1">비고</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="notePop1" id="notePop1" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="addtelPop2">추가전화2</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <NumberFormat format="###-####-####" id="addtelPop2" name="addtelPop2" className="form-control" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="notePop2">비고</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="notePop2" id="notePop2" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="addtelPop3">추가전화3</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <NumberFormat format="###-####-####" id="addtelPop3" name="addtelPop3" className="form-control" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="notePop3">비고</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="notePop3" id="notePop3" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="disabilityTypePop">장애종류</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <Select
                                options={disabilityType}
                                defaultValue={disabilityType[0]}
                                id="disabilityTypePop"
                                name="disabilityTypePop"
                            />
                        </Col>
                        <Col xs="2" className="tit">
                            <FormGroup check>
                                <Input type="checkbox" id="bookingPop" /> <Label for="bookingPop">예약</Label>
                            </FormGroup>
                        </Col>
                        <Col>
                            <DatePickerButton />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="disabilityGradePop">장애등급</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <Select
                                options={disabilityGrade}
                                defaultValue={disabilityGrade[0]}
                                id="disabilityGradePop"
                                name="disabilityGradePop"
                            />
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="wheelchairPop">휠체어</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <Select options={wheelchair} defaultValue={wheelchair[0]} id="wheelchairPop" name="wheelchairPop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="communicationPop">소통여부</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <Select options={communication} defaultValue={communication[0]} id="communicationPop" name="communicationPop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            접수서류
                        </Col>
                        <Col className="s-paper">
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
                            <Label for="notePop4">비고</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="notePop4" id="notePop4" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="usePop5">비고</Label>
                        </Col>
                        <Col>
                            <Input type="textarea" name="usePop5" id="usePop5" style={{ height: "100px" }} />
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
    );
};

export default Current;
