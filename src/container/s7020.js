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

const lineClass1 = [
    { value: "일반", label: "일반" },
    { value: "업무", label: "업무" },
];
const lineClass2 = [
    { value: "일반", label: "일반" },
    { value: "모범", label: "모범" },
    { value: "대형", label: "대형" },
    { value: "리무진", label: "리무진" },
];
const company = [
    { value: "아이원맥스", label: "아이원맥스" },
    { value: "아이투맥스", label: "아이투맥스" },
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
                <h2 className="tit-sub">CID설정</h2>
            </div>
            <div className="lst-data">
                <Form className="tbl-filter">
                    <div className="btn-group2">
                        <ButtonToggle className="c-blue">
                            <i className="las la-plus"></i> 신규
                        </ButtonToggle>
                        <ButtonToggle>
                            <i className="las la-search"></i> 검색
                        </ButtonToggle>
                    </div>
                </Form>
                <Row className="wrap-col-2">
                    <Col xs="5">
                        <div className="tbl- ag-theme-balham" style={{ height: "400px" }}>
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
                                <AgGridColumn field="회원사" minWidth={150}></AgGridColumn>
                                <AgGridColumn field="SCID" minWidth={150}></AgGridColumn>
                                <AgGridColumn field="회선설정수"></AgGridColumn>
                            </AgGridReact>
                        </div>
                    </Col>
                    <Col>
                        <Form className="form-cont-type2">
                            <Row>
                                <Col xs="2" className="tit">
                                    <Label htmlFor="setting1">회선번호</Label>
                                </Col>
                                <Col>
                                    <div className="form-control-wrap">
                                        <Input type="number" name="intervalPop" id="intervalPop" placeholder="20" />
                                        <span className="form-control-clear">
                                            <span className="blind">지우기</span>
                                        </span>
                                    </div>
                                </Col>
                                <Col xs="2" className="tit">
                                    <Label htmlFor="lineClass1">회선구분1</Label>
                                </Col>
                                <Col>
                                    <Select options={lineClass1} defaultValue={lineClass1[0]} id="lineClass1" name="lineClass1" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="2" className="tit">
                                    <Label htmlFor="setting1">대표번호</Label>
                                </Col>
                                <Col>
                                    <div className="form-control-wrap">
                                        <Input type="number" name="intervalPop" id="intervalPop" placeholder="20" />
                                        <span className="form-control-clear">
                                            <span className="blind">지우기</span>
                                        </span>
                                    </div>
                                </Col>
                                <Col xs="2" className="tit">
                                    <Label htmlFor="lineClass2">회선구분2</Label>
                                </Col>
                                <Col>
                                    <Select options={lineClass2} defaultValue={lineClass2[0]} id="lineClass2" name="lineClass2" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="2" className="tit">
                                    <Label htmlFor="company">회원사</Label>
                                </Col>
                                <Col xs="4">
                                    <Select options={company} defaultValue={company[0]} id="company" name="company" />
                                </Col>
                                <Col className="area-btn">
                                    <ButtonToggle outline size="sm" className="c-yellow">
                                        저장
                                    </ButtonToggle>
                                    <ButtonToggle className="c-blue">추가</ButtonToggle>
                                    <ButtonToggle>삭제</ButtonToggle>
                                </Col>
                            </Row>
                        </Form>

                        <div className="tbl- ag-theme-balham" style={{ height: "254px" }}>
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
                                <AgGridColumn field="회선번호"></AgGridColumn>
                                <AgGridColumn field="회선구분" minWidth={200}></AgGridColumn>
                                <AgGridColumn field="대표번호" minWidth={150}></AgGridColumn>
                                <AgGridColumn field="회원사" minWidth={150}></AgGridColumn>
                            </AgGridReact>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Current;
