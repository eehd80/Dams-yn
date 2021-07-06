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
const condition = [
    { value: "사용자명", label: "사용자명" },
    { value: "사용자ID", label: "사용자ID" },
];
const workPop = [
    { value: "선택불가", label: "선택불가" },
    { value: "선택가능", label: "선택가능" },
];
const rightPop = [
    { value: "선택불가", label: "선택불가" },
    { value: "선택가능", label: "선택가능" },
];
const positionPop = [
    { value: "과장", label: "과장" },
    { value: "부장", label: "부장" },
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
                <h2 className="tit-sub">사용자관리</h2>
            </div>

            <div className="lst-data">
                {/* 검색 */}
                <Form className="tbl-filter">
                    <FormGroup>
                        <Label htmlFor="availability">사용여부</Label>
                        <Select options={availability} defaultValue={availability[0]} id="availability" name="availability" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="condition">조회조건</Label>
                        <Select options={condition} defaultValue={condition[0]} id="condition" name="condition" />
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
                        <AgGridColumn field="사용자ID" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="사용자명" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="전화번호" minWidth={200}></AgGridColumn>
                        <AgGridColumn field="사용여부"></AgGridColumn>
                        <AgGridColumn field="권한그룹명"></AgGridColumn>
                        <AgGridColumn field="등록일" minWidth={200}></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>

            {/* layer-사용자등록 */}
            <div className="layer-" style={{ top: "200px", left: "40px", width: "700px", transform: "translate(0,0)" }}>
                <div className="head-layer">
                    <h3>사용자 등록</h3>
                </div>
                <div className="cont-layer form-wrap">
                    <Row>
                        <Col className="tit">
                            <label htmlFor="idPop">아이디</label>
                        </Col>
                        <Col xs="4">
                            <div className="form-control-wrap">
                                <Input type="text" name="idPop" id="idPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <Button className="btn-pop">중복저장</Button>
                        </Col>
                        <Col className="tit">
                            <Label htmlFor="telPop">전화번호</Label>
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
                        <Col className="tit">
                            <label htmlFor="pwPop">패스워드</label>
                        </Col>
                        <Col xs="4">
                            <div className="form-control-wrap">
                                <Input type="password" name="pwPop" id="pwPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <Button className="btn-pop">?</Button>
                        </Col>
                        <Col className="tit">
                            <Label htmlFor="workPop">근무조</Label>
                        </Col>
                        <Col xs="4">
                            <Select options={workPop} defaultValue={workPop[0]} id="workPop" name="workPop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="tit">
                            <label htmlFor="namePop">사용자명</label>
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
                            <Label htmlFor="registPop">등록일</Label>
                        </Col>
                        <Col xs="4">
                            <DatePickerButton />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="tit">
                            <label htmlFor="attachPop">소속업체</label>
                        </Col>
                        <Col xs="4">
                            <div className="form-control-wrap">
                                <Input type="text" name="attachPop" id="attachPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <Button className="btn-pop">업체검색</Button>
                        </Col>
                        <Col className="tit">
                            <Label htmlFor="useStartPop">사용시작일</Label>
                        </Col>
                        <Col xs="4">
                            <DatePickerButton />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="tit">
                            <label htmlFor="rightPop">권한그룹</label>
                        </Col>
                        <Col xs="4">
                            <Select options={rightPop} defaultValue={rightPop[0]} id="rightPop" name="rightPop" />
                        </Col>
                        <Col className="tit">
                            <Label htmlFor="useendPop">사용중지일</Label>
                        </Col>
                        <Col xs="4">
                            <DatePickerButton />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="tit">
                            <label htmlFor="usePop">사용여부</label>
                        </Col>
                        <Col xs="4">
                            <Select options={availability} defaultValue={availability[0]} id="usePop" name="usePop" />
                        </Col>
                        <Col className="tit">
                            <Label htmlFor="positionPop">직책</Label>
                        </Col>
                        <Col xs="4">
                            <Select options={positionPop} defaultValue={positionPop[0]} id="positionPop" name="positionPop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <label htmlFor="notePop">비고</label>
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

            {/* layer-업체검색 */}
            <div className="layer-" style={{ top: "200px", left: "760px", width: "600px", transform: "translate(0,0)" }}>
                <div className="head-layer">
                    <h3>업체검색</h3>
                </div>
                <div className="cont-layer form-wrap">
                    <Form className="tbl-filter">
                        <FormGroup className="d-flex">
                            <Label htmlFor="array" className="blind">
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

                    <div className="tbl- tbl-type1 tbl-call ag-theme-balham" style={{ height: "300px" }}>
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
                            <AgGridColumn field="번호" minWidth={60} maxWidth={70}></AgGridColumn>
                            <AgGridColumn field="회원사구분"></AgGridColumn>
                            <AgGridColumn field="소속콜센터"></AgGridColumn>
                            <AgGridColumn field="회원사" minWidth={130}></AgGridColumn>
                            <AgGridColumn field="회원사전화" minWidth={130}></AgGridColumn>
                            <AgGridColumn field="대표자명"></AgGridColumn>
                        </AgGridReact>
                    </div>
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
