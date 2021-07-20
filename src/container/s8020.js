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

const availability = [
    { value: "전체", label: "전체" },
    { value: "사용", label: "사용" },
    { value: "미사용", label: "미사용" },
];
const condition = [
    { value: "사용자명", label: "사용자명" },
    { value: "사용자ID", label: "사용자ID" },
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
                <h2 className="tit-sub">시스템메뉴</h2>
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
                        <ButtonToggle className="c-red">
                            <i className="las la-minus"></i> 삭제
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
                        <AgGridColumn
                            field="선택"
                            minWidth={60}
                            maxWidth={70}
                            cellRenderer="testRenderer"
                            checkboxSelection={true}
                        ></AgGridColumn>
                        <AgGridColumn field="NodeKey" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="ParentKey" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="메뉴명" minWidth={200}></AgGridColumn>
                        <AgGridColumn field="검색" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                        <AgGridColumn field="등록" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                        <AgGridColumn field="수정" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                        <AgGridColumn field="삭제" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                        <AgGridColumn field="엑셀" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                        <AgGridColumn field="추가옵션설정" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                        <AgGridColumn field="추가옵션수"></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>

            {/* layer-신규메뉴 등록 */}
            <div className="layer-" style={{ top: "200px", left: "60px", width: "700px", transform: "translate(0,0)" }}>
                <div className="head-layer">
                    <h3>신규메뉴 등록</h3>
                </div>
                <div className="cont-layer form-wrap">
                    <Form className="tbl-filter">
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
                            <AgGridColumn field="NodeKey" minWidth={150}></AgGridColumn>
                            <AgGridColumn field="ParentKey" minWidth={150}></AgGridColumn>
                            <AgGridColumn field="메뉴명" minWidth={200}></AgGridColumn>
                            <AgGridColumn field="검색" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                            <AgGridColumn field="등록" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                            <AgGridColumn field="수정" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                            <AgGridColumn field="삭제" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                            <AgGridColumn field="엑셀" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                        </AgGridReact>
                    </div>
                </div>
                <div className="cont-layer form-wrap">
                    <Form className="tbl-filter">
                        <div className="btn-group2">
                            <ButtonToggle className="c-blue">
                                <i className="las la-plus"></i> 추가
                            </ButtonToggle>
                            <ButtonToggle>
                                <i className="las la-minus"></i> 삭제
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
                            <AgGridColumn field="기본값"></AgGridColumn>
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
