import React, { useEffect, useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
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

const callSearch = [
    { value: "콜검색", label: "콜검색" },
    { value: "아이투맥스", label: "아이투맥스" },
];
const condition = [{ value: "조회조건", label: "조회조건" }];
const company = [{ value: "업체", label: "업체" }];

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
                <h2 className="tit-sub">사용자별메뉴</h2>
            </div>
            <div className="lst-data">
                <Form className="tbl-filter">
                    <FormGroup>
                        <Label htmlFor="condition" className="blind">
                            조회조건
                        </Label>
                        <Select options={condition} id="condition" name="condition" placeholder="조회조건" />
                    </FormGroup>
                    <Input type="text" name="search" id="search" placeholder="검색" className="inp-search" />
                    <FormGroup>
                        <Label htmlFor="company" className="blind">
                            업체선택
                        </Label>
                        <Select options={company} defaultValue={company[0]} id="company" name="company" />
                    </FormGroup>
                    <div className="btn-group2">
                        <ButtonToggle className="c-blue">
                            <i className="las la-search"></i> 검색
                        </ButtonToggle>
                        <ButtonToggle className="c-yellow">
                            <i className="las la-save"></i> 저장
                        </ButtonToggle>
                    </div>
                </Form>
                <Row className="wrap-col-2">
                    <Col xs="5">
                        <Form className="form-cont-type2">
                            <Row>
                                <Col className="d-flex justify-content-end">
                                    <ButtonToggle outline className="c-yellow">
                                        저장
                                    </ButtonToggle>
                                    <ButtonToggle className="c-blue">추가</ButtonToggle>
                                    <ButtonToggle>삭제</ButtonToggle>
                                </Col>
                            </Row>
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
                                <AgGridColumn
                                    field="선택"
                                    minWidth={60}
                                    maxWidth={70}
                                    cellRenderer="testRenderer"
                                    checkboxSelection={true}
                                ></AgGridColumn>
                                <AgGridColumn field="ID" minWidth={150}></AgGridColumn>
                                <AgGridColumn field="사용자명" minWidth={150}></AgGridColumn>
                                <AgGridColumn field="소속사명" minWidth={150}></AgGridColumn>
                                <AgGridColumn field="권한그룹명" minWidth={150}></AgGridColumn>
                            </AgGridReact>
                        </div>
                    </Col>
                    <Col>
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
                                <AgGridColumn
                                    field="선택"
                                    minWidth={60}
                                    maxWidth={70}
                                    cellRenderer="testRenderer"
                                    checkboxSelection={true}
                                ></AgGridColumn>
                                <AgGridColumn field="메뉴명" minWidth={200}></AgGridColumn>
                                <AgGridColumn field="검색" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                                <AgGridColumn field="등록" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                                <AgGridColumn field="수정" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                                <AgGridColumn field="삭제" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                                <AgGridColumn field="엑셀" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                                <AgGridColumn field="추가설정" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                                <AgGridColumn field="설정"></AgGridColumn>
                                <AgGridColumn field="가능"></AgGridColumn>
                            </AgGridReact>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* layer - 사용자별메뉴 추가설정 */}
            <div className="layer-" style={{ top: "300px", left: "60px", width: "550px", transform: "translate(0,0)" }}>
                <div className="head-layer">
                    <h3>사용자별메뉴 추가설정</h3>
                </div>
                <div className="cont-layer form-wrap">
                    <Form className="tbl-filter">
                        <FormGroup>
                            <Label htmlFor="callSearch">메뉴명</Label>
                            <Select options={callSearch} defaultValue={callSearch[0]} id="callSearch" name="callSearch" />
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

                    <div className="tbl- tbl-type1 tbl-call ag-theme-balham" style={{ height: "150px" }}>
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
                            <AgGridColumn field="추가옵션명" minWidth={300}></AgGridColumn>
                            <AgGridColumn field="기본값" minWidth={150}></AgGridColumn>
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
