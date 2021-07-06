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

const defaultColDef = {
    width: 100,
    resizable: true,
};

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
                <h2 className="tit-sub">SMS 문구관리</h2>
            </div>

            <div className="lst-data">
                {/* 검색 */}
                <Form className="tbl-filter">
                    <FormGroup>
                        <Label htmlFor="sms" className="blind">
                            SMS대상
                        </Label>
                        <Select options={sms} defaultValue={sms[0]} id="sms" name="sms" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="condition" className="blind">
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
                        <AgGridColumn field="SMS대상"></AgGridColumn>
                        <AgGridColumn field="문구내용" minWidth={600}></AgGridColumn>
                        <AgGridColumn field="업체명" minWidth={200}></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>

            {/* layer - SMS문구 등록 */}
            <div className="layer-" style={{ top: "210px", left: "40px", width: "500px", transform: "translate(0,0)" }}>
                <div className="head-layer">
                    <h3>SMS문구 등록</h3>
                </div>
                <div className="cont-layer form-wrap">
                    <Row>
                        <Col xs="2" className="tit">
                            <Label htmlFor="companyPop">업체명</Label>
                        </Col>
                        <Col>
                            <Select options={company} defaultValue={company[0]} id="companyPop" name="companyPop" />
                        </Col>
                        <Col xs="2" className="tit">
                            <Label htmlFor="smsTargetPop">SMS대상</Label>
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
    );
};

export default Current;
