import React, { useEffect, useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DatePickerButton from "../component/DatePicker";
import NumberFormat from "react-number-format";
import Select from "react-select";
import {
    Row,
    Col,
    Button,
    ButtonToggle,
    Form,
    FormGroup,
    Label,
    Input,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    CardTitle,
    CardText,
} from "reactstrap";
import classnames from "classnames";

import { Item, Menu, Separator, Submenu, useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import { getData } from "../api/data";
import TestRenderer from "../component/TestRenderer";

import Header from "../component/Header";
import Receive from "../component/Receive";
import Map from "../component/Map";
import Call from "../component/Call";

const defaultColDef = {
    width: 100,
    resizable: true,
};

const member = [
    { value: "회원사", label: "회원사" },
    { value: "고객명", label: "고객명" },
];
const tooltip = [
    { value: "기사ID", label: "기사ID" },
    { value: "기사명", label: "기사명" },
    { value: "기사전화", label: "기사전화" },
    { value: "미사용", label: "미사용" },
];
const use = [
    { value: "사용", label: "사용" },
    { value: "미사용", label: "미사용" },
];
const display = [
    { value: "표시", label: "표시" },
    { value: "미표시", label: "미표시" },
];
const trainRun = [
    { value: "자동배차", label: "자동배차" },
    { value: "선택배차(기사상태)", label: "선택배차(기사상태)" },
    { value: "선택배차(기사확인)", label: "선택배차(기사확인)" },
    { value: "선택배차(경쟁)", label: "선택배차(경쟁)" },
];
const appliy = [
    { value: "시간제한", label: "시간제한" },
    { value: "시간제한", label: "시간제한" },
];
const garage = [
    { value: "서울특별시", label: "서울특별시" },
    { value: "기흥", label: "기흥" },
];
const displayLocation = [
    { value: "승차위치", label: "승차위치" },
    { value: "비고", label: "비고" },
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
        <div className="wrap">
            <Header />
            <div id="main">
                <Receive />
                <div className="contents">
                    <Map />
                    <div className="wrap-data h-auto">
                        <div className="tit-sub-wrap">
                            <h2 className="tit-sub">환경설정</h2>
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
                                </div>
                            </Form>
                            <Form className="form-cont">
                                <Row className="aling-items-start">
                                    <Col xs="5" className="pr-3">
                                        <Row>
                                            <Col xs="4" className="tit">
                                                <Label htmlFor="tooltip">툴팁표시</Label>
                                            </Col>
                                            <Col>
                                                <Select options={tooltip} defaultValue={tooltip[0]} id="tooltip" name="tooltip" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="4" className="tit">
                                                <Label htmlFor="setting1">대기지역 자동회차</Label>
                                            </Col>
                                            <Col>
                                                <Select options={use} defaultValue={use[0]} id="setting1" name="setting1" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="4" className="tit">
                                                <Label htmlFor="setting2">대기지역 회차시간</Label>
                                            </Col>
                                            <Col className="d-flex">
                                                <div className="form-control-wrap">
                                                    <Input type="number" name="setting2" id="setting2" placeholder="0" />
                                                    <span className="form-control-clear">
                                                        <span className="blind">지우기</span>
                                                    </span>
                                                </div>
                                                <span className="wav-">분</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="4" className="tit">
                                                <Label htmlFor="setting3">배차 지연시간</Label>
                                            </Col>
                                            <Col className="d-flex">
                                                <div className="form-control-wrap">
                                                    <Input type="number" name="setting3" id="setting3" placeholder="0" />
                                                    <span className="form-control-clear">
                                                        <span className="blind">지우기</span>
                                                    </span>
                                                </div>
                                                <span className="wav-">초</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="4" className="tit">
                                                <Label htmlFor="setting4">요청차량 대수</Label>
                                            </Col>
                                            <Col className="d-flex">
                                                <div className="form-control-wrap">
                                                    <Input type="number" name="setting4" id="setting4" placeholder="0" />
                                                    <span className="form-control-clear">
                                                        <span className="blind">지우기</span>
                                                    </span>
                                                </div>
                                                <span className="wav-">초</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="4" className="tit">
                                                <Label htmlFor="setting5">배차시 고객SMS</Label>
                                            </Col>
                                            <Col>
                                                <Select options={use} defaultValue={use[0]} id="setting5" name="setting5" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="4" className="tit">
                                                <Label htmlFor="setting6">취소시 고객SMS</Label>
                                            </Col>
                                            <Col>
                                                <Select options={use} defaultValue={use[0]} id="setting6" name="setting6" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="4" className="tit">
                                                <Label htmlFor="setting7">완료시 고객SMS</Label>
                                            </Col>
                                            <Col>
                                                <Select options={use} defaultValue={use[0]} id="setting7" name="setting7" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="4" className="tit">
                                                <Label htmlFor="trainRun">기본배차방식</Label>
                                            </Col>
                                            <Col>
                                                <Select options={trainRun} defaultValue={trainRun[0]} id="trainRun" name="trainRun" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="4" className="tit">
                                                <Label htmlFor="display">배차차수표시(기사)</Label>
                                            </Col>
                                            <Col>
                                                <Select options={display} defaultValue={display[0]} id="display" name="display" />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={{ size: "7" }} className="wrap-tabs">
                                        <Nav tabs>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === "1" })}
                                                    onClick={() => {
                                                        toggle("1");
                                                    }}
                                                >
                                                    자동패널티
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === "2" })}
                                                    onClick={() => {
                                                        toggle("2");
                                                    }}
                                                >
                                                    하차위치표시
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === "3" })}
                                                    onClick={() => {
                                                        toggle("3");
                                                    }}
                                                >
                                                    고객전화표시
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === "4" })}
                                                    onClick={() => {
                                                        toggle("4");
                                                    }}
                                                >
                                                    표식설정
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === "5" })}
                                                    onClick={() => {
                                                        toggle("5");
                                                    }}
                                                >
                                                    기본검색주소
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === "6" })}
                                                    onClick={() => {
                                                        toggle("6");
                                                    }}
                                                >
                                                    접수표시
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                        <TabContent activeTab={activeTab}>
                                            <TabPane tabId="1">
                                                <Row>
                                                    <Col xs="2" className="tit">
                                                        <Label htmlFor="tabSet1-1">사용구분</Label>
                                                    </Col>
                                                    <Col xs="5">
                                                        <Select options={use} defaultValue={use[0]} id="tabSet1-1" name="tabSet1-1" />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="2" className="tit">
                                                        <Label htmlFor="tabSet1-2">경고제한</Label>
                                                    </Col>
                                                    <Col className="d-flex">
                                                        <div className="form-control-wrap">
                                                            <Input type="number" name="tabSet1-2" id="tabSet1-2" placeholder="0" />
                                                            <span className="form-control-clear">
                                                                <span className="blind">지우기</span>
                                                            </span>
                                                        </div>
                                                        <span className="wav-">회</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="2" className="tit">
                                                        <Label htmlFor="tabSet1-3">별점제한</Label>
                                                    </Col>
                                                    <Col className="d-flex">
                                                        <div className="form-control-wrap">
                                                            <Input type="number" name="tabSet1-3" id="tabSet1-3" placeholder="0" />
                                                            <span className="form-control-clear">
                                                                <span className="blind">지우기</span>
                                                            </span>
                                                        </div>
                                                        <span className="wav-">점</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="2" className="tit">
                                                        <Label htmlFor="tabSet1-4">적용구분</Label>
                                                    </Col>
                                                    <Col xs="5">
                                                        <Select options={appliy} defaultValue={appliy[0]} id="tabSet1-4" name="tabSet1-4" />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="2" className="tit">
                                                        <Label htmlFor="tabSet1-5">제한시간</Label>
                                                    </Col>
                                                    <Col className="d-flex">
                                                        <div className="form-control-wrap">
                                                            <Input type="number" name="tabSet1-5" id="tabSet1-5" placeholder="0" />
                                                            <span className="form-control-clear">
                                                                <span className="blind">지우기</span>
                                                            </span>
                                                        </div>
                                                        <span className="wav-">분</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="2" className="tit">
                                                        <Label htmlFor="tabSet1-6">리셋여부</Label>
                                                    </Col>
                                                    <Col xs="5">
                                                        <Select options={use} defaultValue={use[0]} id="tabSet1-6" name="tabSet1-6" />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="2" className="tit">
                                                        <Label htmlFor="tabSet1-7">리셋시간</Label>
                                                    </Col>
                                                    <Col className="d-flex">
                                                        <div className="form-control-wrap">
                                                            <Input type="number" name="tabSet1-7" id="tabSet1-7" placeholder="0" />
                                                            <span className="form-control-clear">
                                                                <span className="blind">지우기</span>
                                                            </span>
                                                        </div>
                                                        <span className="wav-">시간</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="c-red-t">&#8251; 최종 경고처리 후 해제 일시</Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <Row>
                                                    <Col xs="2" className="tit">
                                                        <Label htmlFor="tabSet2-1">사용구분</Label>
                                                    </Col>
                                                    <Col xs="5">
                                                        <Select
                                                            options={display}
                                                            defaultValue={display[0]}
                                                            id="tabSet2-1"
                                                            name="tabSet2-1"
                                                        />
                                                    </Col>
                                                    <Col className="d-flex justify-content-end">
                                                        <ButtonToggle className="c-blue mr-1">
                                                            <i className="las la-plus"></i> 추가
                                                        </ButtonToggle>
                                                        <ButtonToggle>
                                                            <i className="las la-search"></i> 삭제
                                                        </ButtonToggle>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="3">
                                                <Row>
                                                    <Col xs="2" className="tit">
                                                        <Label htmlFor="tabSet3-1">사용구분</Label>
                                                    </Col>
                                                    <Col xs="5">
                                                        <Select
                                                            options={display}
                                                            defaultValue={display[0]}
                                                            id="tabSet1-6"
                                                            name="tabSet3-1"
                                                        />
                                                    </Col>
                                                    <Col className="d-flex justify-content-end">
                                                        <ButtonToggle className="c-blue mr-1">
                                                            <i className="las la-plus"></i> 추가
                                                        </ButtonToggle>
                                                        <ButtonToggle>
                                                            <i className="las la-search"></i> 삭제
                                                        </ButtonToggle>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="4">
                                                <Row>
                                                    <Col xs="2" className="tit">
                                                        <Label htmlFor="tabSet4-1">표식</Label>
                                                    </Col>
                                                    <Col xs="5">
                                                        <div className="form-control-wrap">
                                                            <Input type="text" name="tabSet4-1" id="tabSet4-1" />
                                                            <span className="form-control-clear">
                                                                <span className="blind">지우기</span>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                    <Col className="d-flex justify-content-end">
                                                        <ButtonToggle className="c-blue mr-1">
                                                            <i className="las la-plus"></i> 추가
                                                        </ButtonToggle>
                                                        <ButtonToggle>
                                                            <i className="las la-search"></i> 삭제
                                                        </ButtonToggle>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="2" className="tit">
                                                        <Label htmlFor="tabSet4-2">내용</Label>
                                                    </Col>
                                                    <Col>
                                                        <div className="form-control-wrap">
                                                            <Input type="text" name="tabSet4-2" id="tabSet4-2" />
                                                            <span className="form-control-clear">
                                                                <span className="blind">지우기</span>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div className="tbl- ag-theme-balham" style={{ height: "200px" }}>
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
                                                            checkboxSelection={true}
                                                        ></AgGridColumn>
                                                        <AgGridColumn field="순서" minWidth={60} maxWidth={70}></AgGridColumn>
                                                        <AgGridColumn field="내용" minWidth={300}></AgGridColumn>
                                                    </AgGridReact>
                                                </div>
                                            </TabPane>
                                            <TabPane tabId="5">
                                                <Row>
                                                    <Col xs="2" className="tit">
                                                        <Label htmlFor="tabSet5-1">주소</Label>
                                                    </Col>
                                                    <Col xs="5">
                                                        <Select options={garage} defaultValue={garage[0]} id="tabSet5-1" name="tabSet5-1" />
                                                    </Col>
                                                    <Col className="d-flex justify-content-end">
                                                        <ButtonToggle className="c-blue mr-1">
                                                            <i className="las la-plus"></i> 추가
                                                        </ButtonToggle>
                                                        <ButtonToggle>
                                                            <i className="las la-search"></i> 삭제
                                                        </ButtonToggle>
                                                    </Col>
                                                </Row>
                                                <div className="tbl- ag-theme-balham" style={{ height: "200px" }}>
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
                                                            checkboxSelection={true}
                                                        ></AgGridColumn>
                                                        <AgGridColumn field="주소" minWidth={400}></AgGridColumn>
                                                    </AgGridReact>
                                                </div>
                                            </TabPane>
                                            <TabPane tabId="6">
                                                <Row>
                                                    <Col xs="2" className="tit">
                                                        <Label htmlFor="tabSet6-1">표시위치</Label>
                                                    </Col>
                                                    <Col xs="5">
                                                        <Select
                                                            options={displayLocation}
                                                            defaultValue={displayLocation[0]}
                                                            id="tabSet6-1"
                                                            name="tabSet6-1"
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="2" className="tit text-left">
                                                        <FormGroup check>
                                                            <Input type="checkbox" id="tabSet6-2" /> <Label htmlFor="tabSet6-2">흡연</Label>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col className="d-flex">
                                                        <div className="form-control-wrap">
                                                            <Input type="number" name="tabSet6-2-1" id="tabSet6-2-1" placeholder="0" />
                                                            <span className="form-control-clear">
                                                                <span className="blind">지우기</span>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                    <Col xs="2" className="tit">
                                                        <FormGroup check>
                                                            <Input type="checkbox" id="tabSet6-3" />{" "}
                                                            <Label htmlFor="tabSet6-3">외국어</Label>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col className="d-flex">
                                                        <div className="form-control-wrap">
                                                            <Input type="number" name="tabSet6-3-1" id="tabSet6-3-1" placeholder="0" />
                                                            <span className="form-control-clear">
                                                                <span className="blind">지우기</span>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="2" className="tit">
                                                        <FormGroup check>
                                                            <Input type="checkbox" id="tabSet6-4" /> <Label htmlFor="tabSet6-4">네비</Label>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col className="d-flex">
                                                        <div className="form-control-wrap">
                                                            <Input type="number" name="tabSet6-4-1" id="tabSet6-4-1" placeholder="0" />
                                                            <span className="form-control-clear">
                                                                <span className="blind">지우기</span>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                    <Col xs="2" className="tit">
                                                        <FormGroup check>
                                                            <Input type="checkbox" id="tabSet6-5" />{" "}
                                                            <Label htmlFor="tabSet6-5">하이패스</Label>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col className="d-flex">
                                                        <div className="form-control-wrap">
                                                            <Input type="number" name="tabSet6-5-1" id="tabSet6-5-1" placeholder="0" />
                                                            <span className="form-control-clear">
                                                                <span className="blind">지우기</span>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="2" className="tit">
                                                        <FormGroup check>
                                                            <Input type="checkbox" id="tabSet6-6" />{" "}
                                                            <Label htmlFor="tabSet6-6">애완동물</Label>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col className="d-flex">
                                                        <div className="form-control-wrap">
                                                            <Input type="number" name="tabSet6-6-1" id="tabSet6-6-1" placeholder="0" />
                                                            <span className="form-control-clear">
                                                                <span className="blind">지우기</span>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                    <Col xs="2" className="tit">
                                                        <FormGroup check>
                                                            <Input type="checkbox" id="tabSet6-7" /> <Label htmlFor="tabSet6-7">픽업</Label>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col className="d-flex">
                                                        <div className="form-control-wrap">
                                                            <Input type="number" name="tabSet6-7-1" id="tabSet6-7-1" placeholder="0" />
                                                            <span className="form-control-clear">
                                                                <span className="blind">지우기</span>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="2" className="tit">
                                                        <FormGroup check>
                                                            <Input type="checkbox" id="tabSet6-8" /> <Label htmlFor="tabSet6-8">카드</Label>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col className="d-flex">
                                                        <div className="form-control-wrap">
                                                            <Input type="number" name="tabSet6-8-1" id="tabSet6-8-1" placeholder="0" />
                                                            <span className="form-control-clear">
                                                                <span className="blind">지우기</span>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                    <Col xs="2" className="tit">
                                                        <FormGroup check>
                                                            <Input type="checkbox" id="tabSet6-9" />{" "}
                                                            <Label htmlFor="tabSet6-9">신규고객</Label>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col className="d-flex">
                                                        <div className="form-control-wrap">
                                                            <Input type="number" name="tabSet6-9-1" id="tabSet6-9-1" placeholder="0" />
                                                            <span className="form-control-clear">
                                                                <span className="blind">지우기</span>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="2" className="tit">
                                                        <FormGroup check>
                                                            <Input type="checkbox" id="tabSet6-10" />
                                                            <Label htmlFor="tabSet6-10">자체(일반)</Label>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col className="d-flex">
                                                        <div className="form-control-wrap">
                                                            <Input type="number" name="tabSet6-10-1" id="tabSet6-10-1" placeholder="0" />
                                                            <span className="form-control-clear">
                                                                <span className="blind">지우기</span>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col className="c-red-t">&#8251; 프로그램 재시작 후 적용됩니다.</Col>
                                                </Row>
                                            </TabPane>
                                        </TabContent>
                                    </Col>
                                </Row>
                                <h4 className="tit-sub4 mt-4">취소사유</h4>
                                <Form className="tbl-filter">
                                    <FormGroup className="mr-1">
                                        <Label htmlFor="cancel">취소사유</Label>
                                        <div className="form-control-wrap">
                                            <Input type="number" name="intervalPop" id="intervalPop" placeholder="20" />
                                            <span className="form-control-clear">
                                                <span className="blind">지우기</span>
                                            </span>
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="timeSearch">단축코드명</Label>
                                        <div className="form-control-wrap">
                                            <Input type="number" name="intervalPop" id="intervalPop" placeholder="20" />
                                            <span className="form-control-clear">
                                                <span className="blind">지우기</span>
                                            </span>
                                        </div>
                                    </FormGroup>
                                    <div className="btn-group2">
                                        <ButtonToggle className="c-blue">
                                            <i className="las la-plus"></i> 추가
                                        </ButtonToggle>
                                    </div>
                                </Form>
                                <div className="tbl- ag-theme-balham mt-2" style={{ height: "200px" }}>
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
                                        <AgGridColumn field="취소사유" minWidth={300} cellRenderer="testRenderer"></AgGridColumn>
                                        <AgGridColumn field="단축코드명"></AgGridColumn>
                                        <AgGridColumn field="사용여부" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="SMS발송여부" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="비고" minWidth={400}></AgGridColumn>
                                    </AgGridReact>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Current;
