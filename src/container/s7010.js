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

const defaultColDef = {
    width: 100,
    resizable: true,
};

const member = [
    { value: "회원사", label: "회원사" },
    { value: "고객명", label: "고객명" },
];
const carNum = [
    { value: "차량ID", label: "차량ID" },
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
                <h2 className="tit-sub">환경설정</h2>
            </div>
            <div className="lst-data">
                <Form className="tbl-filter">
                    <FormGroup>
                        <Label htmlFor="member" className="blind">
                            환경설정 설정
                        </Label>
                        <Select options={member} defaultValue={member[0]} id="member" name="member" placeholder="조회조건" />
                    </FormGroup>
                    <div className="btn-group2">
                        <ButtonToggle className="c-blue">
                            <i className="las la-save"></i> 저장
                        </ButtonToggle>
                    </div>
                </Form>
                <div className="form-wrap">
                    <Row>
                        <Col xs="5">
                            <Row>
                                <Col xs="5" className="tit">
                                    <label htmlFor="tooltip">툴팁표시</label>
                                </Col>
                                <Col>
                                    <Select options={tooltip} defaultValue={tooltip[0]} id="tooltip" name="tooltip" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="5" className="tit">
                                    <label htmlFor="setting1">대기지역 자동회차</label>
                                </Col>
                                <Col>
                                    <Select options={use} defaultValue={use[0]} id="setting1" name="setting1" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="5" className="tit">
                                    <label htmlFor="setting2">대기지역 회차시간</label>
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
                                <Col xs="5" className="tit">
                                    <label htmlFor="setting3">배차 지연시간</label>
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
                                <Col xs="5" className="tit">
                                    <label htmlFor="setting4">요청차량 대수</label>
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
                                <Col xs="5" className="tit">
                                    <label htmlFor="setting5">배차시 고객SMS</label>
                                </Col>
                                <Col>
                                    <Select options={use} defaultValue={use[0]} id="setting5" name="setting5" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="5" className="tit">
                                    <label htmlFor="setting6">취소시 고객SMS</label>
                                </Col>
                                <Col>
                                    <Select options={use} defaultValue={use[0]} id="setting6" name="setting6" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="5" className="tit">
                                    <label htmlFor="setting7">완료시 고객SMS</label>
                                </Col>
                                <Col>
                                    <Select options={use} defaultValue={use[0]} id="setting7" name="setting7" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="5" className="tit">
                                    <label htmlFor="trainRun">기본배차방식</label>
                                </Col>
                                <Col>
                                    <Select options={trainRun} defaultValue={trainRun[0]} id="trainRun" name="trainRun" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="5" className="tit">
                                    <label htmlFor="display">배차차수표시(기사)</label>
                                </Col>
                                <Col>
                                    <Select options={display} defaultValue={display[0]} id="display" name="display" />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={{ size: "6", offset: "1" }} className="wrap-tabs">
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
                                            toggle("3");
                                        }}
                                    >
                                        표식설정
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === "5" })}
                                        onClick={() => {
                                            toggle("3");
                                        }}
                                    >
                                        기본검색주소
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === "6" })}
                                        onClick={() => {
                                            toggle("3");
                                        }}
                                    >
                                        접수표시
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab} className="mt-3">
                                <TabPane tabId="1">
                                    <Row>
                                        <Col xs="4" className="tit">
                                            <label htmlFor="setting8">사용구분</label>
                                        </Col>
                                        <Col>
                                            <Select options={use} defaultValue={use[0]} id="setting8" name="setting8" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="4" className="tit">
                                            <label htmlFor="setting8">경고제한</label>
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
                                            <label htmlFor="setting8">별점제한</label>
                                        </Col>
                                        <Col className="d-flex">
                                            <div className="form-control-wrap">
                                                <Input type="number" name="setting4" id="setting4" placeholder="0" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                            <span className="wav-">점</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="4" className="tit">
                                            <label htmlFor="setting8">적용구분</label>
                                        </Col>
                                        <Col>
                                            <Select options={use} defaultValue={use[0]} id="setting8" name="setting8" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="4" className="tit">
                                            <label htmlFor="setting8">제한시간</label>
                                        </Col>
                                        <Col className="d-flex">
                                            <div className="form-control-wrap">
                                                <Input type="number" name="setting4" id="setting4" placeholder="0" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                            <Select options={use} defaultValue={use[0]} id="setting8" name="setting8" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="4" className="tit">
                                            <label htmlFor="setting8">리셋여부</label>
                                        </Col>
                                        <Col>
                                            <Select options={use} defaultValue={use[0]} id="setting8" name="setting8" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="4" className="tit">
                                            <label htmlFor="setting8">리셋시간</label>
                                        </Col>
                                        <Col className="d-flex">
                                            <div className="form-control-wrap">
                                                <Input type="number" name="setting4" id="setting4" placeholder="0" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                            <span className="wav-">시간</span>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="12">
                                            <h4>Tab 1 Contents</h4>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="3">
                                    <Row>
                                        <Col sm="12">
                                            <h4>Tab 1 Contents</h4>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                    <h4 className="tit-sub4 mt-5">취소사유</h4>
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
                            <AgGridColumn field="번호" minWidth={60} maxWidth={70} cellRenderer="testRenderer"></AgGridColumn>
                            <AgGridColumn field="성명"></AgGridColumn>
                            <AgGridColumn field="보호자"></AgGridColumn>
                            <AgGridColumn field="출발지" minWidth={200}></AgGridColumn>
                            <AgGridColumn field="출발시간"></AgGridColumn>
                            <AgGridColumn field="도착지" minWidth={200}></AgGridColumn>
                            <AgGridColumn field="도착시간"></AgGridColumn>
                            <AgGridColumn field="운행(km)"></AgGridColumn>
                            <AgGridColumn field="요금"></AgGridColumn>
                            <AgGridColumn field="비교"></AgGridColumn>
                        </AgGridReact>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Current;
