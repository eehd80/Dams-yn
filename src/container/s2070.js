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
                <h2 className="tit-sub">운전원 근무조 관리</h2>
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
                        <AgGridColumn field="근무조" minWidth={100} cellRenderer="testRenderer"></AgGridColumn>
                        <AgGridColumn field="1(토)" minWidth={130}></AgGridColumn>
                        <AgGridColumn field="2(일)" minWidth={130}></AgGridColumn>
                        <AgGridColumn field="3(월)" minWidth={130}></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>

            {/* layer-기본근무조설정 */}
            <div className="layer-" style={{ top: "200px", left: "570px", width: "500px", transform: "translate(0,0)" }}>
                <div className="head-layer">
                    <h3>기본근무조 설정</h3>
                </div>
                <div className="cont-layer form-wrap">
                    <Row>
                        <Col xs="2" className="tit">
                            <label for="workGroupPop">회원사명</label>
                        </Col>
                        <Col>
                            <Select options={workGroup} defaultValue={workGroup[0]} id="workGroupPop" name="workGroupPop" />
                        </Col>
                        <Col xs="2" className="tit">
                            <label for="serviceGroupPop">근무조명</label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="idPop" id="idPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <label for="startTimePop">시작시간</label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="number" name="startTimePop" id="startTimePop" placeholder="0" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <span className="unit- unit-l">분</span>
                        </Col>
                        <Col xs="2" className="tit">
                            <label for="startTimePop">종료시간</label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="number" name="startTimePop" id="startTimePop" placeholder="0" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <span className="unit- unit-l">분</span>
                        </Col>
                    </Row>
                    <Row className="btn-area">
                        <Col>
                            <Button className="btn-w">검색</Button>
                        </Col>
                        <Col>
                            <Button className="btn-w c-yellow">추가</Button>
                        </Col>
                        <Col>
                            <Button className="btn-w c-red">삭제</Button>
                        </Col>
                        <Col>
                            <Button className="btn-w c-blue">저장</Button>
                        </Col>
                    </Row>

                    <div className="tbl- tbl-type1 tbl-call ag-theme-balham" style={{ height: "200px" }}>
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
                            <AgGridColumn field="번호" minWidth={50} maxWidth={60}></AgGridColumn>
                            <AgGridColumn field="선택" minWidth={50} maxWidth={60} checkboxSelection={true}></AgGridColumn>
                            <AgGridColumn field="근무조명" minWidth={130}></AgGridColumn>
                            <AgGridColumn field="시작시간"></AgGridColumn>
                            <AgGridColumn field="종료시간"></AgGridColumn>
                        </AgGridReact>
                    </div>
                </div>
                <Button className="btn-close">
                    <i className="las la-times"></i>
                    <span className="blind">닫기</span>
                </Button>
            </div>

            {/* layer-기사목록 */}
            <div className="layer-" style={{ top: "200px", left: "50px", width: "500px", transform: "translate(0,0)" }}>
                <div className="head-layer">
                    <h3>기사목록</h3>
                </div>
                <div className="cont-layer form-wrap">
                    <div className="tbl- tbl-type1 tbl-call ag-theme-balham" style={{ height: "290px" }}>
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
                            <AgGridColumn field="번호" minWidth={50} maxWidth={60}></AgGridColumn>
                            <AgGridColumn field="기사명" minWidth={70}></AgGridColumn>
                            <AgGridColumn field="아이디"></AgGridColumn>
                            <AgGridColumn field="소속법인"></AgGridColumn>
                        </AgGridReact>
                    </div>
                    <Row className="btn-area">
                        <Col></Col>
                        <Col>
                            <Button className="btn-w c-blue">적용</Button>
                        </Col>
                        <Col>
                            <Button className="btn-w">닫기</Button>
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
