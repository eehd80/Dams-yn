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

const use = [
    { value: "사용", label: "사용" },
    { value: "미사용", label: "미사용" },
];
const condition = [
    { value: "차량번호", label: "차량번호" },
    { value: "차량ID", label: "차량ID" },
    { value: "전화번호", label: "전화번호" },
];
const reader = [
    { value: "단말기모델", label: "단말기모델" },
    { value: "단말기모델", label: "단말기모델" },
    { value: "단말기모델", label: "단말기모델" },
];
const readerType = [
    { value: "단말기타입", label: "단말기타입" },
    { value: "단말기타입", label: "단말기타입" },
    { value: "단말기타입", label: "단말기타입" },
];
const naviType = [
    { value: "네비게이션 종류", label: "네비게이션 종류" },
    { value: "네비게이션 종류", label: "네비게이션 종류" },
    { value: "네비게이션 종류", label: "네비게이션 종류" },
];
const garage = [
    { value: "기흥", label: "기흥" },
    { value: "서울", label: "서울" },
];
const carDifference = [{ value: "일반", label: "일반" }];

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
                <h2 className="tit-sub">차량관리</h2>
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
                        <AgGridColumn field="즉시/예약"></AgGridColumn>
                        <AgGridColumn field="차고지구분"></AgGridColumn>
                        <AgGridColumn field="차량번호" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="아이디"></AgGridColumn>
                        <AgGridColumn field="소속콜센터" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="차종" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="차량전화번호" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="특장차여부"></AgGridColumn>
                        <AgGridColumn field="사용여부"></AgGridColumn>
                        <AgGridColumn field="등록일" minWidth={200}></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>

            {/* layer-차량등록 */}
            <div className="layer-" style={{ top: "200px", left: "760px", width: "700px", transform: "translate(0,0)" }}>
                <div className="head-layer">
                    <h3>차량등록</h3>
                </div>
                <div className="cont-layer form-wrap">
                    <Row>
                        <Col xs="2" className="tit">
                            <label for="carNumPop">차량번호</label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="carNumPop" id="carNumPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <Button className="btn-pop">중복검사</Button>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="readerPop">단말기기종</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <Select options={reader} defaultValue={reader[0]} id="readerPop" name="readerPop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <label for="coporationPop">소속법인</label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="coporationPop" id="coporationPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <Button className="btn-pop">업체검색</Button>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="readerPop">연동장비구분</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <Select options={readerType} defaultValue={readerType[0]} id="readerTypePop" name="readerTypePop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="phonePop">차량전화번호</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col xs="4">
                            <div className="form-control-wrap">
                                <NumberFormat format="###-####-####" id="phonePop" name="phonePop" className="form-control" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <Button className="btn-pop">중복검사</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <label for="namePop">차량ID</label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="namePop" id="namePop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <Button className="btn-pop">중복검사</Button>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="naviTypePop">네비게이션 종류</Label>
                        </Col>
                        <Col>
                            <Select options={naviType} defaultValue={naviType[0]} id="naviTypePop" name="naviTypePop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <label for="modalyearPop">차량연식</label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="modalyearPop" id="modalyearPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="devicePop">전용단말기</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <Select options={use} defaultValue={use[0]} id="devicePop" name="devicePop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <label for="garagePop">차고지구분</label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <Select options={garage} defaultValue={garage[0]} id="garagePop" name="garagePop" />
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="navigationPop">네비게이션</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <Select options={use} defaultValue={use[0]} id="navigationPop" name="navigationPop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <label for="vehicleRatingPop">차량등급</label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="vehicleRatingPop" id="vehicleRatingPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <Button className="btn-pop">차종검색</Button>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="hipassPop">하이패스</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <Select options={use} defaultValue={use[0]} id="hipassPop" name="hipassPop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <label for="vehicleRatingPop">제조사</label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="vehicleRatingPop" id="vehicleRatingPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="cardMachinePop">카드기</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <Select options={use} defaultValue={use[0]} id="cardMachinePop" name="cardMachinePop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <label for="modelPop">모델명</label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="modelPop" id="modelPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="taxiPop">고급택시</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <Select options={use} defaultValue={use[0]} id="taxiPop" name="taxiPop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ size: "2", offset: "6" }} className="tit">
                            <Label for="carDifferencePop">특장차여부</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col xs="4">
                            <Select options={carDifference} defaultValue={carDifference[0]} id="carDifferencePop" name="carDifferencePop" />
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

            {/* layer-차량정보 */}
            <div className="layer-" style={{ top: "200px", left: "40px", width: "700px", transform: "translate(0,0)" }}>
                <div className="head-layer">
                    <h3>차량정보</h3>
                </div>
                <div className="cont-layer form-wrap">
                    <Row>
                        <Col xs="2" className="tit">
                            <label for="carNumPop">차량번호</label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="carNumPop" id="carNumPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="readerPop">단말기기종</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <Select options={reader} defaultValue={reader[0]} id="readerPop" name="readerPop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <label for="coporationPop">소속법인</label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="coporationPop" id="coporationPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="readerTypePop">연동장비구분</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <Select options={readerType} defaultValue={readerType[0]} id="readerTypePop" name="readerTypePop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <label for="coporationCallPop">소속콜센터</label> <span className="ico-c">필수</span>
                        </Col>
                        <Col xs="4">
                            <div className="form-control-wrap">
                                <Input type="text" name="coporationCallPop" id="coporationCallPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="phonePop">차량전화번호</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col xs="4">
                            <div className="form-control-wrap">
                                <NumberFormat format="###-####-####" id="phonePop" name="phonePop" className="form-control" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <Button className="btn-pop">중복검사</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="tit">
                            <label for="carIdPop">차량ID</label> <span className="ico-c">필수</span>
                        </Col>
                        <Col xs="4">
                            <div className="form-control-wrap">
                                <Input type="text" name="carIdPop" id="carIdPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <Button className="btn-pop">중복검사</Button>
                        </Col>
                        <Col className="tit">
                            <Label for="naviTypePop">네비게이션 종류</Label>
                        </Col>
                        <Col xs="4">
                            <Select options={naviType} defaultValue={naviType[0]} id="naviTypePop" name="naviTypePop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="tit">
                            <label for="modalyearPop">차량연식</label>
                        </Col>
                        <Col xs="4">
                            <div className="form-control-wrap">
                                <Input type="text" name="modalyearPop" id="modalyearPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col className="tit">
                            <Label for="devicePop">전용단말기</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col xs="4">
                            <Select options={use} defaultValue={use[0]} id="devicePop" name="devicePop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="tit">
                            <label for="garagePop">차고지구분</label> <span className="ico-c">필수</span>
                        </Col>
                        <Col xs="4">
                            <Select options={garage} defaultValue={garage[0]} id="garagePop" name="garagePop" />
                        </Col>
                        <Col className="tit">
                            <Label for="navigationPop">네비게이션</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col xs="4">
                            <Select options={use} defaultValue={use[0]} id="navigationPop" name="navigationPop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <label for="vehicleRatingPop">차량등급</label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="vehicleRatingPop" id="vehicleRatingPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="hipassPop">하이패스</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <Select options={use} defaultValue={use[0]} id="hipassPop" name="hipassPop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <label for="vehicleRatingPop">제조사</label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="vehicleRatingPop" id="vehicleRatingPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="cardMachinePop">카드기</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <Select options={use} defaultValue={use[0]} id="cardMachinePop" name="cardMachinePop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <label for="modelPop">모델명</label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="modelPop" id="modelPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="taxiPop">고급택시</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <Select options={use} defaultValue={use[0]} id="taxiPop" name="taxiPop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="taxiPop">사용여부</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <Select options={use} defaultValue={use[0]} id="taxiPop" name="taxiPop" />
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="carDifferencePop">특장차여부</Label> <span className="ico-c">필수</span>
                        </Col>
                        <Col>
                            <Select options={carDifference} defaultValue={carDifference[0]} id="carDifferencePop" name="carDifferencePop" />
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
                        <Col className="tit">
                            <Label for="registPop">일시정지일</Label>
                        </Col>
                        <Col xs="4">
                            <DatePickerButton />
                        </Col>
                        <Col className="tit">
                            <Label for="useStartPop">사용종료일</Label>
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
    );
};

export default Current;
