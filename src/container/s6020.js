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

const timeSearch = [
    { value: "이용예정시간", label: "이용예정시간" },
    { value: "접수시간", label: "접수시간" },
];
const callAll = [
    { value: "즉시콜", label: "즉시콜" },
    { value: "예약콜", label: "예약콜" },
];
const condition = [
    { value: "차량ID", label: "차량ID" },
    { value: "고객명", label: "고객명" },
    { value: "고객전화", label: "고객전화" },
    { value: "회신번호", label: "회신번호" },
    { value: "승차위치", label: "승차위치" },
    { value: "하차위치", label: "하차위치" },
    { value: "차량번호", label: "차량번호" },
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
                <h2 className="tit-sub">운행일지 등록</h2>
            </div>
            <div className="lst-data">
                <Form className="tbl-filter">
                    <div className="btn-group3">
                        <ButtonToggle className="c-yellow">
                            <i className="las la-credit-card"></i> 결제
                        </ButtonToggle>
                        <ButtonToggle>
                            <i className="las la-times-circle"></i> 결제취소
                        </ButtonToggle>
                        <ButtonToggle className="c-blue">
                            <i className="las la-print"></i> 프린트
                        </ButtonToggle>
                    </div>
                    <div className="btn-group2">
                        <ButtonToggle className="c-yellow">저장</ButtonToggle>
                        <ButtonToggle>취소</ButtonToggle>
                    </div>
                </Form>

                <div className="area-subcont">
                    <h3 className="tit-sub3">운행정보</h3>
                    <Form className="tbl-filter">
                        <Row>
                            <Col className="tit-">운행일</Col>
                            <Col></Col>
                        </Row>
                    </Form>
                </div>
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
                        <AgGridColumn field="운행일자" minWidth={120}></AgGridColumn>
                        <AgGridColumn field="운전원" minWidth={100}></AgGridColumn>
                        <AgGridColumn field="차량번호" minWidth={130}></AgGridColumn>
                        <AgGridColumn field="근무시간" minWidth={200}></AgGridColumn>
                        <AgGridColumn field="결제"></AgGridColumn>
                        <AgGridColumn field="금일운행" minWidth={100}></AgGridColumn>
                        <AgGridColumn field="금일주유량" minWidth={100}></AgGridColumn>
                        <AgGridColumn field="고객전화번호" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="기타기재사항" minWidth={200}></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>
        </div>
    );
};

export default Current;
