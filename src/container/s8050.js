import React, { useEffect, useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DatePickerButton from "../component/DatePicker";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { Row, Col, ButtonToggle, Form, FormGroup, Label, Input } from "reactstrap";
import classnames from "classnames";

import { Item, Menu, Separator, Submenu, useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import { getData } from "../api/data";
import TestRenderer from "../component/TestRenderer";

const defaultColDef = {
    width: 100,
    resizable: true,
};

const member = [
    { value: "회원사", label: "회원사" },
    { value: "고객명", label: "고객명" },
];
const selectArea = [
    { value: "서울", label: "서울" },
    { value: "경기도", label: "경기도" },
];
const selectArea2 = [
    { value: "선택", label: "선택" },
    { value: "경기도", label: "경기도" },
];
const setting5 = [
    { value: "거리우선배차", label: "거리우선배차" },
    { value: "시간우선배차", label: "시간우선배차" },
];
const setting6 = [
    { value: "하차", label: "하차" },
    { value: "완료", label: "완료" },
];
const possibility = [
    { value: "가능", label: "가능" },
    { value: "불가능", label: "불가능" },
];
const use = [
    { value: "사용", label: "사용" },
    { value: "미사용", label: "미사용" },
];
const display = [
    { value: "표시", label: "표시" },
    { value: "미표시", label: "미표시" },
];
const inComing = [
    { value: "수신전화", label: "수신전화" },
    { value: "미수신전화", label: "미수신전화" },
];
const callEnd = [
    { value: "미터요금확인", label: "미터요금확인" },
    { value: "미터요금미확인", label: "미터요금미확인" },
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
        <div className="wrap-data h-auto">
            <div className="tit-sub-wrap">
                <h2 className="tit-sub">시스템환경 설정</h2>
            </div>
            <div className="lst-data">
                <Form className="tbl-filter">
                    <FormGroup>
                        <Label htmlFor="member" className="blind">
                            회원사 선택
                        </Label>
                        <Select options={member} defaultValue={member[0]} id="member" name="member" placeholder="조회조건" />
                    </FormGroup>
                    <div className="btn-group2">
                        <ButtonToggle className="c-yellow">
                            <i className="las la-save"></i> 저장
                        </ButtonToggle>
                        <ButtonToggle>
                            <i className="las la-times"></i> 취소
                        </ButtonToggle>
                    </div>
                </Form>
                <Row className="wrap-col-2">
                    <Col xs="5">
                        <Form className="form-cont-type2">
                            <h3 className="tit-sub3-t2">지역설정</h3>
                            <Row>
                                <Col>
                                    <Label htmlFor="selectArea" className="blind">
                                        지역선택
                                    </Label>
                                    <Select options={selectArea} defaultValue={selectArea[0]} id="lineClass1" name="lineClass1" />
                                </Col>
                                <Col className="area-btn">
                                    <ButtonToggle className="c-blue">추가</ButtonToggle>
                                    <ButtonToggle>삭제</ButtonToggle>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Label htmlFor="selectArea2" className="blind">
                                        지역선택2
                                    </Label>
                                    <Select options={selectArea2} defaultValue={selectArea2[0]} id="selectArea2" name="selectArea2" />
                                </Col>
                            </Row>
                        </Form>
                        <div className="tbl- ag-theme-balham" style={{ height: "210px" }}>
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
                                <AgGridColumn
                                    field="선택"
                                    minWidth={60}
                                    maxWidth={70}
                                    cellRenderer="testRenderer"
                                    checkboxSelection={true}
                                ></AgGridColumn>
                                <AgGridColumn field="지역" minWidth={200}></AgGridColumn>
                            </AgGridReact>
                        </div>
                        <Form className="form-cont-type2 mt-3">
                            <h3 className="tit-sub3-t2">배차설정</h3>
                            <Row>
                                <Col className="area-btn">
                                    <ButtonToggle className="c-blue">추가</ButtonToggle>
                                    <ButtonToggle>삭제</ButtonToggle>
                                </Col>
                            </Row>
                        </Form>
                        <div className="tbl- ag-theme-balham" style={{ height: "215px" }}>
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
                                <AgGridColumn field="선택" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                                <AgGridColumn field="검색범위" minWidth={150}></AgGridColumn>
                                <AgGridColumn field="시간" minWidth={150}></AgGridColumn>
                                <AgGridColumn field="배차방식" minWidth={150}></AgGridColumn>
                                <AgGridColumn field="요청차량"></AgGridColumn>
                                <AgGridColumn field="배차거리" minWidth={150}></AgGridColumn>
                            </AgGridReact>
                        </div>
                    </Col>
                    <Col>
                        <Form className="form-cont-type2">
                            <h3 className="tit-sub3-t2">시스템설정</h3>
                            <Row>
                                <Col xs="3" className="tit">
                                    <Label htmlFor="setting1">기사GPS시간</Label>
                                </Col>
                                <Col className="d-flex">
                                    <div className="form-control-wrap">
                                        <Input type="number" name="setting1" id="setting1" placeholder="9999" />
                                        <span className="form-control-clear">
                                            <span className="blind">지우기</span>
                                        </span>
                                    </div>
                                    <span className="wav-">분</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3" className="tit">
                                    <Label htmlFor="setting2">보고주기(최대)</Label>
                                </Col>
                                <Col className="d-flex">
                                    <div className="form-control-wrap">
                                        <Input type="number" name="setting2" id="setting2" placeholder="1" />
                                        <span className="form-control-clear">
                                            <span className="blind">지우기</span>
                                        </span>
                                    </div>
                                    <span className="wav-">분</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3" className="tit">
                                    <Label htmlFor="setting3">보고주기(최소)</Label>
                                </Col>
                                <Col className="d-flex">
                                    <div className="form-control-wrap">
                                        <Input type="number" name="setting3" id="setting3" placeholder="30" />
                                        <span className="form-control-clear">
                                            <span className="blind">지우기</span>
                                        </span>
                                    </div>
                                    <span className="wav-">초</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3" className="tit">
                                    <Label htmlFor="setting4">보고거리</Label>
                                </Col>
                                <Col className="d-flex">
                                    <div className="form-control-wrap">
                                        <Input type="number" name="setting4" id="setting4" placeholder="1500" />
                                        <span className="form-control-clear">
                                            <span className="blind">지우기</span>
                                        </span>
                                    </div>
                                    <span className="wav-">미터</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3" className="tit">
                                    <Label htmlFor="setting5">배차 우선방식</Label>
                                </Col>
                                <Col>
                                    <Select options={setting5} defaultValue={setting5[0]} id="setting5" name="setting5" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3" className="tit">
                                    <Label htmlFor="setting6">강제배차시 이전콜</Label>
                                </Col>
                                <Col>
                                    <Select options={setting6} defaultValue={setting6[0]} id="setting6" name="setting6" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3" className="tit">
                                    <Label htmlFor="setting7">시간대기 변경거리</Label>
                                </Col>
                                <Col>
                                    <div className="form-control-wrap">
                                        <Input type="number" name="setting7" id="setting7" placeholder="500" />
                                        <span className="form-control-clear">
                                            <span className="blind">지우기</span>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3" className="tit">
                                    <Label htmlFor="setting8">접수상태 사용여부</Label>
                                </Col>
                                <Col>
                                    <Select options={possibility} defaultValue={possibility[0]} id="setting8" name="setting8" />
                                </Col>
                                <Col xs="3" className="tit">
                                    <Label htmlFor="setting9">지정배차 사용여부</Label>
                                </Col>
                                <Col>
                                    <Select options={use} defaultValue={use[0]} id="setting9" name="setting9" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3" className="tit">
                                    <Label htmlFor="setting10">하차위치 표시여부</Label>
                                </Col>
                                <Col>
                                    <Select options={display} defaultValue={display[0]} id="setting10" name="10" />
                                </Col>
                                <Col xs="3" className="tit">
                                    <Label htmlFor="setting11">시간콜 표시여부</Label>
                                </Col>
                                <Col>
                                    <Select options={display} defaultValue={display[0]} id="setting11" name="setting11" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3" className="tit">
                                    <Label htmlFor="setting12">콜체크 사용여부</Label>
                                </Col>
                                <Col>
                                    <Select options={use} defaultValue={use[0]} id="setting12" name="setting12" />
                                </Col>
                                <Col xs="3" className="tit">
                                    <Label htmlFor="setting13">수신창에서 여부</Label>
                                </Col>
                                <Col>
                                    <Select options={possibility} defaultValue={possibility[0]} id="setting13" name="setting13" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3" className="tit">
                                    <Label htmlFor="setting14">강제배차 여부</Label>
                                </Col>
                                <Col>
                                    <Select options={use} defaultValue={use[0]} id="setting14" name="setting14" />
                                </Col>
                                <Col xs="3" className="tit">
                                    <Label htmlFor="setting15">중복배차 여부</Label>
                                </Col>
                                <Col>
                                    <Select options={use} defaultValue={use[0]} id="setting15" name="setting15" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3" className="tit">
                                    <Label htmlFor="setting16">회선업무고객구분</Label>
                                </Col>
                                <Col>
                                    <Select options={inComing} defaultValue={inComing[0]} id="setting16" name="setting16" />
                                </Col>
                                <Col xs="3" className="tit">
                                    <Label htmlFor="setting18">수정사용자</Label>
                                </Col>
                                <Col>
                                    <div className="form-control-wrap">
                                        <Input type="text" name="setting18" id="setting18" placeholder="곽욱진" />
                                        <span className="form-control-clear">
                                            <span className="blind">지우기</span>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3" className="tit">
                                    <Label htmlFor="setting17">업무콜완료시요금</Label>
                                </Col>
                                <Col>
                                    <Select options={callEnd} defaultValue={callEnd[0]} id="setting17" name="setting17" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3" className="tit">
                                    <Label htmlFor="setting19">수정일자</Label>
                                </Col>
                                <Col>
                                    <DatePickerButton />
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Current;
