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

const callState = [
    { value: "콜상태", label: "콜상태" },
    { value: "콜상태", label: "콜상태" },
];
const condition = [{ value: "아이디", label: "아이디" }];

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
                <h2 className="tit-sub">일자별 통계</h2>
            </div>
            <div className="lst-data">
                {/* 검색 */}
                <Form className="tbl-filter">
                    <FormGroup>
                        <Label for="sms" className="blind">
                            일자선택
                        </Label>
                        <DatePickerButton /> <span className="wav- wav-right">~</span> <DatePickerButton />
                    </FormGroup>
                    <div className="btn-group2">
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
                        <AgGridColumn field="일자" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="회원수(명)" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="콜 건수">
                            <AgGridColumn headerName="전체콜" field="전체콜" width={100} filter="agTextColumnFilter" />
                            <AgGridColumn headerName="사전예약" field="사전예약" width={100} filter="agTextColumnFilter" />
                            <AgGridColumn headerName="즉시콜" field="즉시콜" width={100} filter="agTextColumnFilter" />
                            <AgGridColumn headerName="취소" field="취소" width={100} filter="agTextColumnFilter" />
                            <AgGridColumn headerName="미배차" field="미배차" width={100} filter="agTextColumnFilter" />
                        </AgGridColumn>
                        <AgGridColumn field="운행 건수">
                            <AgGridColumn headerName="소개" field="소개" width={100} filter="agTextColumnFilter" />
                            <AgGridColumn headerName="사전예약" field="사전예약" width={100} filter="agTextColumnFilter" />
                            <AgGridColumn headerName="즉시예약" field="즉시예약" width={100} filter="agTextColumnFilter" />
                        </AgGridColumn>
                        <AgGridColumn field="운행거리(km)"></AgGridColumn>
                        <AgGridColumn field="수입금(원)"></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>

            {/* layer - 일자별 콜통계 상세 */}
            <div className="layer-" style={{ top: "230px", left: "40px", width: "1100px", transform: "translate(0,0)" }}>
                <div className="head-layer">
                    <h3>일자별 콜통계 상세</h3>
                </div>
                <div className="cont-layer form-wrap">
                    <Form className="tbl-filter">
                        <FormGroup xs="2">
                            <Label for="companyPop" className="blind">
                                검색기간
                            </Label>
                            <DatePickerButton /> <span className="wav- wav-right">~</span> <DatePickerButton />
                        </FormGroup>
                        <FormGroup>
                            <Label for="callStatePop" className="blind">
                                콜상태
                            </Label>
                            <Select options={callState} defaultValue={callState[0]} id="callStatePop" name="callStatePop" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="callStatePop" className="blind">
                                검색조건
                            </Label>
                            <Select options={condition} defaultValue={condition[0]} id="condition" name="condition" />
                        </FormGroup>
                        <Input type="text" name="search" id="search" placeholder="검색" className="inp-search" />
                        <div className="btn-group2">
                            <ButtonToggle className="">
                                <i className="las la-search"></i> 검색
                            </ButtonToggle>
                            <ButtonToggle className="c-green">
                                <i className="las la-file-excel"></i> 엑셀
                            </ButtonToggle>
                        </div>
                    </Form>
                    <div className="tbl- ag-theme-balham" id={"test-call"}>
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
                            <AgGridColumn field="상태" minWidth={60} maxWidth={70} cellRenderer="testRenderer" />
                            <AgGridColumn field="차량번호" />
                            <AgGridColumn field="배차기사명" />
                            <AgGridColumn field="고객명" />
                            <AgGridColumn field="이용예정시간" />
                            <AgGridColumn field="승차시간" />
                            <AgGridColumn field="하차시간" />
                            <AgGridColumn field="상태" hide={true} />
                            <AgGridColumn field="승차위치" minWidth={200} />
                            <AgGridColumn field="하차위치" minWidth={200} />
                            <AgGridColumn field="수입금" />
                            <AgGridColumn field="이동거리" />
                            <AgGridColumn field="이용목적" />
                            <AgGridColumn field="장애종류" />
                            <AgGridColumn field="휠체어" />
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
