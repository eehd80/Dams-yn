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

const sort = [
    { value: "차량별", label: "차량별" },
    { value: "기사별", label: "기사별" },
    { value: "고객별", label: "고객별" },
];
const state = [
    { value: "완료", label: "완료" },
    { value: "취소", label: "취소" },
];
const useGoal = [
    { value: "이용목적", label: "이용목적" },
    { value: "취소", label: "취소" },
];
const disabilityGrade = [
    { value: "장애종류", label: "장애종류" },
    { value: "등급외", label: "등급외" },
    { value: "6급", label: "6급" },
    { value: "7급", label: "7급" },
];
const wheelchair = [
    { value: "미사용", label: "미사용" },
    { value: "자동", label: "자동" },
    { value: "수동", label: "수동" },
    { value: "보행보조기구", label: "보행보조기구" },
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
                <h2 className="tit-sub">구분별 통계</h2>
            </div>
            <div className="lst-data">
                {/* 검색 */}
                <Form className="tbl-filter">
                    <FormGroup>
                        <Label htmlFor="sms" className="blind">
                            구분
                        </Label>
                        <Select options={sort} defaultValue={sort[0]} id="sort" name="sort" />
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
                        <AgGridColumn field="완료"></AgGridColumn>
                        <AgGridColumn field="취소"></AgGridColumn>
                        <AgGridColumn field="운행거리" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="수입금" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="지역구분">
                            <AgGridColumn headerName="수지구" field="수지구" width={100} filter="agTextColumnFilter" />
                            <AgGridColumn headerName="처인구" field="처인구" width={100} filter="agTextColumnFilter" />
                            <AgGridColumn headerName="기흥구" field="기흥구" width={100} filter="agTextColumnFilter" />
                            <AgGridColumn headerName="서울" field="서울" width={100} filter="agTextColumnFilter" />
                            <AgGridColumn headerName="경기" field="경기" width={100} filter="agTextColumnFilter" />
                            <AgGridColumn headerName="인천" field="인천" width={100} filter="agTextColumnFilter" />
                            <AgGridColumn headerName="기타" field="기타" width={100} filter="agTextColumnFilter" />
                        </AgGridColumn>
                        <AgGridColumn field="이용대상자유형">
                            <AgGridColumn field="지체" />
                            <AgGridColumn field="뇌병변" />
                            <AgGridColumn field="시각" />
                            <AgGridColumn field="청각" />
                            <AgGridColumn field="언어" />
                            <AgGridColumn field="신장" />
                            <AgGridColumn field="심장" />
                            <AgGridColumn field="호흡기" />
                            <AgGridColumn field="간" />
                            <AgGridColumn field="안면" />
                            <AgGridColumn field="장루,요루" />
                            <AgGridColumn field="간질" />
                            <AgGridColumn field="지적" />
                            <AgGridColumn field="자폐성" />
                            <AgGridColumn field="정신" />
                            <AgGridColumn field="노약자" />
                            <AgGridColumn field="일시적" />
                            <AgGridColumn field="요양" />
                            <AgGridColumn field="임산부" />
                        </AgGridColumn>
                        <AgGridColumn field="이용목적">
                            <AgGridColumn field="소계" />
                            <AgGridColumn field="관내병원" />
                            <AgGridColumn field="관외병원" />
                            <AgGridColumn field="복지관" />
                            <AgGridColumn field="재활" />
                            <AgGridColumn field="생업" />
                            <AgGridColumn field="학교" />
                            <AgGridColumn field="여가" />
                            <AgGridColumn field="기타" />
                        </AgGridColumn>
                        <AgGridColumn field="동행인"></AgGridColumn>
                        <AgGridColumn field="휠체어"></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>

            {/* layer - 구분별 현황 상세 */}
            <div className="layer-" style={{ top: "230px", left: "40px", width: "1100px", transform: "translate(0,0)" }}>
                <div className="head-layer">
                    <h3>구분별 현황 상세</h3>
                </div>
                <div className="cont-layer form-wrap">
                    <Form className="tbl-filter">
                        <FormGroup>
                            <Label htmlFor="carNum">차량번호</Label>
                            <Input type="text" name="search" id="search" className="inp-search" defaultValue="5236" />
                        </FormGroup>
                        <FormGroup xs="2">
                            <Label htmlFor="companyPop" className="blind">
                                검색기간
                            </Label>
                            <DatePickerButton /> <span className="wav- wav-right">~</span> <DatePickerButton />
                        </FormGroup>
                    </Form>
                    <Form className="tbl-filter">
                        <FormGroup>
                            <Label htmlFor="statePop" className="blind">
                                상태
                            </Label>
                            <Select options={state} defaultValue={state[0]} id="statePop" name="statePop" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="useGoalPop" className="blind">
                                이용목적
                            </Label>
                            <Select options={useGoal} defaultValue={useGoal[0]} id="useGoalPop" name="useGoalPop" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="disabilityGradePop" className="blind">
                                장애종류
                            </Label>
                            <Select
                                options={disabilityGrade}
                                defaultValue={disabilityGrade[0]}
                                id="disabilityGradePop"
                                name="disabilityGradePop"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="wheelchairPop" className="blind">
                                휠체어
                            </Label>
                            <Select options={wheelchair} defaultValue={wheelchair[0]} id="wheelchairPop" name="wheelchairPop" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="conditionPop" className="blind">
                                조회조건
                            </Label>
                            <Select options={condition} defaultValue={condition[0]} id="conditionPop" name="conditionPop" />
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
                            <AgGridColumn field="기사명" />
                            <AgGridColumn field="고객명" />
                            <AgGridColumn field="이용예정시간" />
                            <AgGridColumn field="승차시간" />
                            <AgGridColumn field="하차시간" />
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
