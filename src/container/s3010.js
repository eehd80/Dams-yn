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
        <div id="Memo" className="wrap-data">
            <div className="tit-sub-wrap">
                <h2 className="tit-sub">공지사항</h2>
            </div>

            <div className="lst-data">
                <div className="btn-util">
                    <Button color="primary">
                        <i className="las la-plus"></i> 신규
                    </Button>
                    <Button color="secondary">
                        <i className="las la-search"></i> 검색
                    </Button>
                    <Button color="danger">
                        <i className="las la-backspace"></i> 삭제
                    </Button>
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
                        <AgGridColumn field="번호" minWidth={60} maxWidth={70}></AgGridColumn>
                        <AgGridColumn field="제목" minWidth={400}></AgGridColumn>
                        <AgGridColumn field="등록일" minWidth={200}></AgGridColumn>
                        <AgGridColumn field="등록업체" minWidth={200}></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>
        </div>
    );
};

export default Current;
